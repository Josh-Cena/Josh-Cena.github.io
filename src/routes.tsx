import React from "react";
import * as H from "react-helmet-async";

const { Helmet } = (H as unknown as { default: typeof H }).default;

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob<
  boolean,
  string,
  { default: React.ComponentType; [key: string]: unknown }
>("./pages/**/[!_]*.{tsx,mdx}");

export const routes = Object.entries(pages)
  .map(([path, module]) => {
    const name = /\.\/pages\/(?<name>.*)\.(?:tsx|mdx)$/u.exec(path)!.groups!
      .name!;
    return {
      path:
        name === "404" ? "*" : `/${name.toLowerCase()}`.replace(/index$/u, ""),
      RouteComp: React.lazy(async () => {
        const { default: Comp, ...rest } = await module();
        const metadata = (
          path.endsWith(".mdx") ? rest.frontMatter : rest.meta
        ) as {
          title: string;
          description: string;
        };
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
