import React from "react";
import { normalizeRoute } from "./normalize-route";
import { useLanguageContext } from "./context/Language";
import { useSSRContext } from "./context/SSRContext";
import { useIsomorphicLayoutEffect } from "./utils";

// Auto generates routes from files under ./pages
// https://vite.dev/guide/features.html#glob-import
const pages = import.meta.glob<
  boolean,
  string,
  {
    default: React.ComponentType<{ [key: string]: unknown }> & {
      meta?: { title: string; description: string; lang?: string };
    };
  }
>(["./pages/**/[!_]*.{tsx,mdx}", "!./pages/**/_*/**/*.{tsx,mdx}"]);

export const routes = Object.entries(pages)
  .map(([path, module]) => {
    const canonical = normalizeRoute(path.replace(/^\.\/pages\//u, ""));
    return {
      path: canonical === "/404" ? "*" : canonical,
      RouteComp: React.lazy(async () => {
        const { default: Comp } = await module();
        const metadata = Comp.meta;
        if (!metadata)
          throw new Error(`Page ${path} must export meta information`);
        const { lang: metaLang = "en-US" } = metadata;
        return {
          // eslint-disable-next-line func-name-matching
          default: function RouteComp() {
            const ssrContext = useSSRContext();
            const { setLang } = useLanguageContext();
            if (ssrContext) ssrContext.lang = metaLang;
            useIsomorphicLayoutEffect(() => {
              setLang(metaLang);
            }, [metaLang, setLang]);
            return (
              <>
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
                {/* Re-inject front matter so MDX code can access
              (without it being exported) */}
                <Comp {...metadata} />
              </>
            );
          },
        };
      }),
    };
  })
  .sort((a, b) => (a.path === "*" ? 1 : b.path === "*" ? -1 : 0));

export const paths = routes.map(({ path }) => path).filter((p) => p !== "*");
