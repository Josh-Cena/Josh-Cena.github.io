import FS from "node:fs/promises";
import Path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => Path.resolve(__dirname, p);
const distPath = (...ps: string[]) => Path.join(__dirname, "../dist", ...ps);

const template = await FS.readFile(distPath("static/index.html"), "utf-8");
const render = (
  (await import(
    // @ts-expect-error: no declaration
    "../dist/server/server-entry.js"
  )) as typeof import("../src/server-entry")
).render;

// Has leading slash; no trailing slash
// e.g. ["/", "/about", "/404"]
const routesToPrerender = (
  await glob(toAbsolute("../src/pages/**/*.{tsx,mdx}"))
).map((file) => {
  const name = Path.relative(toAbsolute("../src/pages"), file)
    .replace(/(?:\/?index)?\.(?:tsx|mdx)$/, "")
    .toLowerCase();
  return `/${name}`;
});

console.log("routes to prerender", routesToPrerender);

const promises = routesToPrerender.map(async (url) => {
  try {
    const context = {};
    const appHtml = await render(url, context);

    const html = template
      .replace("<!--body-->", appHtml.body)
      .replace("<!--metaTags-->", appHtml.metaTags)
      .replace(/(?<=<head[^>]+)(?=>)/, ` ${appHtml.htmlAttributes}`)
      .replace(/(?<=<body[^>]+)(?=>)/, ` ${appHtml.bodyAttributes}`);

    const filePath = distPath(
      "static",
      ...(url === "/404"
        ? ["404.html"]
        : url === "/"
        ? ["index.html"]
        : [url, "index.html"]),
    );
    await FS.mkdir(Path.dirname(filePath), { recursive: true });
    await FS.writeFile(filePath, html);
    console.log("pre-rendered", filePath);
  } catch (e) {
    console.log("pre-render error", e, "on path", url);
    if (!(e instanceof Error)) throw e;
    console.log(e);
  }
});
Promise.all(promises);
