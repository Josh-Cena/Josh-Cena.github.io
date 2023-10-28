import FS from "node:fs";
import Path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import * as Vite from "vite";
import serveStatic from "serve-static";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.VITEST;

process.env.MY_CUSTOM_SECRET = "API_KEY_qwertyuiop";

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  hmrPort?: number,
) {
  const toAbsolute = (p: string) => Path.resolve(__dirname, p);

  const indexProd = isProd
    ? FS.readFileSync(toAbsolute("dist/client/index.html"), "utf-8")
    : "";

  const app = express();

  let viteServer: Vite.ViteDevServer | undefined = undefined;
  if (!isProd) {
    viteServer = await Vite.createServer({
      root,
      logLevel: isTest ? "error" : "info",
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
  } else {
    app.use(
      serveStatic(toAbsolute("dist/client"), {
        index: false,
      }),
    );
  }

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (viteServer) {
        template = FS.readFileSync(toAbsolute("../index.html"), "utf-8");
        template = await viteServer.transformIndexHtml(url, template);
        render = (await viteServer.ssrLoadModule("/src/server-entry.tsx"))
          .render;
      } else {
        template = indexProd;
        // @ts-expect-error: no declaration
        render = (await import("../dist/server/server-entry.js")).render;
      }

      const context: Record<string, unknown> = {};
      const appHtml = render(url, context);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, String(context.url));
      }

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      console.log("SSR error on path", req.originalUrl);
      if (!(e instanceof Error)) {
        console.log(e);
        throw e;
      }
      viteServer?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log("Dev server started on http://localhost:5173");
    }),
  );
}
