import React from "react";
import { Helmet } from "react-helmet-async";
import { normalizeRoute } from "./normalize-route";

// Auto generates routes from files under ./pages
// https://vite.dev/guide/features.html#glob-import
const pages = import.meta.glob<
  boolean,
  string,
  { default: React.ComponentType; [key: string]: unknown }
>(["./pages/**/[!_]*.{tsx,mdx}", "!./pages/**/_*/**/*.{tsx,mdx}"]);

export const routes = Object.entries(pages)
  .map(([path, module]) => {
    const canonical = normalizeRoute(path.replace(/^\.\/pages\//u, ""));
    return {
      path: canonical === "/404" ? "*" : canonical,
      RouteComp: React.lazy(async () => {
        const { default: Comp, ...rest } = await module();
        const metadata = (
          path.endsWith(".mdx") ? rest.frontMatter : rest.meta
        ) as { title: string; description: string } | undefined;
        if (!metadata) {
          return {
            default: () => (
              <h1>
                You must provide the <code>meta</code> export
              </h1>
            ),
          };
        }
        return {
          default: () => (
            <>
              <Helmet>
                <title>
                  {metadata.title
                    ? `${metadata.title} | Joshua Chen`
                    : "Joshua Chen"}
                </title>
                <meta name="description" content={metadata.description} />
                <link
                  rel="canonical"
                  href={`https://joshcena.com${canonical}`}
                />
              </Helmet>
              <Comp {...rest} />
            </>
          ),
        };
      }),
    };
  })
  .sort((a, b) => (a.path === "*" ? 1 : b.path === "*" ? -1 : 0));

export const paths = routes.map(({ path }) => path).filter((p) => p !== "*");
