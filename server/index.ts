import FS from "node:fs/promises";
import Path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import * as Vite from "vite";
import type { SSRContextValue } from "@/context/SSRContext";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p: string) => Path.resolve(__dirname, p);

export async function createServer(
  root = process.cwd(),
  hmrPort?: number,
): Promise<{ app: express.Express }> {
  const app = express();

  const viteServer = await Vite.createServer({
    root,
    logLevel: "info",
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
      hmr: {
        ...(hmrPort && { port: hmrPort }),
      },
    },
    appType: "custom",
  });
  app.use(viteServer.middlewares);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template = await FS.readFile(toAbsolute("../index.html"), "utf-8");
      template = await viteServer.transformIndexHtml(url, template);
      const { render } = (await viteServer.ssrLoadModule(
        "/src/server-entry.tsx",
      )) as typeof import("../src/server-entry");

      const context: SSRContextValue = {};
      const appHTML = await render(url, context);

      const html = template
        // The HTML may contain dollar signs, which should not be special!
        .replace("<!--body-->", () => appHTML.body)
        .replace("<!--metaTags-->", () => appHTML.metaTags)
        .replace(/<head[^>]+/u, () => `$& ${appHTML.htmlAttributes}`)
        .replace(/<body[^>]+/u, () => `$& ${appHTML.bodyAttributes}`);

      res
        .status(Number(context.status ?? 200))
        .set({ "Content-Type": "text/html" })
        .end(html);
    } catch (e) {
      console.log("SSR error on path", req.originalUrl);
      if (!(e instanceof Error)) {
        console.log(e);
        throw e;
      }
      viteServer.ssrFixStacktrace(e);
      console.log(e);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

void createServer().then(({ app }) =>
  app.listen(5173, () => {
    console.log("Dev server started on http://localhost:5173");
  }),
);
