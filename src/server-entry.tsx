import React from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App";
import Document, { type AssetMap } from "./Document";
import { LanguageContextProvider } from "./context/Language";
import { SSRContextProvider, type SSRContextValue } from "./context/SSRContext";

async function readableStreamToString(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let out = "";

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    out += decoder.decode(value, { stream: true });
  }
  out += decoder.decode();
  return out;
}

export async function render(
  url: string,
  context: SSRContextValue,
  assets: AssetMap,
): Promise<string> {
  const app = (
    <React.StrictMode>
      <LanguageContextProvider>
        <SSRContextProvider context={context}>
          <Document assets={assets}>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </Document>
        </SSRContextProvider>
      </LanguageContextProvider>
    </React.StrictMode>
  );

  const { prelude } = await prerender(app, {
    bootstrapModules: assets.bootstrapModules,
    bootstrapScriptContent: `window.__ASSET_MAP__ = ${JSON.stringify(assets)};`,
  });

  const html = await readableStreamToString(prelude);
  return html.replaceAll(
    /%ssr-lang%/gu,
    (context.lang as string | undefined) ?? "en-US",
  );
}
