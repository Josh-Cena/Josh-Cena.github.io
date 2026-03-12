import FS from "node:fs/promises";
import Path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "tinyglobby";
import { SitemapStream, streamToPromise } from "sitemap";
import { normalizeRoute } from "@/normalize-route.ts";
import type { SSRContextValue } from "@/context/SSRContext";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));
const distPath = (...ps: string[]) => Path.join(__dirname, "../dist", ...ps);

const template = await FS.readFile(distPath("static/index.html"), "utf-8");
const { render } = (await import(
  // @ts-expect-error: no declaration
  "../dist/server/server-entry.js"
)) as typeof import("../src/server-entry");

// Has leading slash and trailing slash except for 404
// e.g. ["/", "/about/", "/404"]
const routesToPrerender = (
  await glob([
    "./src/pages/**/[!_]*.{tsx,mdx}",
    "!./src/pages/**/_*/**/*.{tsx,mdx}",
  ])
).map((file) => normalizeRoute(file.slice("src/pages/".length)));

async function renderSitemap(routes: string[]) {
  const sitemapStream = new SitemapStream({ hostname: "https://joshcena.com" });
  routes.toSorted().forEach((url) => {
    if (url === "/404") return;
    sitemapStream.write({
      url,
      changefreq: "daily",
      priority: 0.7,
    });
  });
  sitemapStream.end();
  const sitemap = await streamToPromise(sitemapStream);
  await FS.writeFile(distPath("static/sitemap.xml"), sitemap.toString());
}

const promises = routesToPrerender.map(async (url) => {
  try {
    const context: SSRContextValue = {};
    const appHTML = await render(url, context);

    const html = template
      // The HTML may contain dollar signs, which should not be special!
      .replace("<!--body-->", () => appHTML.body)
      .replace("<!--metaTags-->", () => appHTML.metaTags)
      .replace(/<head[^>]+/u, () => `$& ${appHTML.htmlAttributes}`)
      .replace(/<body[^>]+/u, () => `$& ${appHTML.bodyAttributes}`);

    const filePath = distPath(
      "static",
      ...(url === "/404" ? ["404.html"] : [url, "index.html"]),
    );
    await FS.mkdir(Path.dirname(filePath), { recursive: true });
    await FS.writeFile(filePath, html);
  } catch (e) {
    console.log("pre-render error", e, "on path", url);
    if (!(e instanceof Error)) throw e;
  }
});

promises.push(renderSitemap(routesToPrerender));

void Promise.all(promises);
