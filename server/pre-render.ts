import FS from "node:fs/promises";
import Path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => Path.resolve(__dirname, p);

const template = await FS.readFile(
  toAbsolute("../dist/static/index.html"),
  "utf-8",
);
// @ts-expect-error: no declaration
const { render } = await import("../dist/server/server-entry.js");

const routesToPrerender = (await FS.readdir(toAbsolute("../src/pages"))).map(
  (file) => {
    const name = file.replace(/\.tsx$/, "").toLowerCase();
    return name === "index" ? `/` : `/${name}`;
  },
);

(async () => {
  for (const url of routesToPrerender) {
    try {
      const context = {};
      const appHtml = await render(url, context);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      const filePath = `../dist/static${url === "/" ? "/index" : url}.html`;
      await FS.writeFile(toAbsolute(filePath), html);
      console.log("pre-rendered:", filePath);
    } catch (e) {
      console.log("pre-render error", e, "on path", url);
      if (!(e instanceof Error)) {
        throw e;
      }
      console.log(e);
    }
  }
})();
