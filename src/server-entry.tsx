import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";
import { SSRContextProvider, type SSRContextValue } from "./context/SSRContext";

// Inspired by https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/server-utils/writable-as-promise.js
class WritableAsPromise extends Writable {
  #output: string;
  #deferred: {
    promise: Promise<string> | null;
    resolve: (value: string) => void;
    reject: (reason: Error) => void;
  };

  constructor() {
    super();
    this.#output = ``;
    this.#deferred = {
      promise: null,
      resolve: () => null,
      reject: () => null,
    };
    this.#deferred.promise = new Promise((resolve, reject) => {
      this.#deferred.resolve = resolve;
      this.#deferred.reject = reject;
    });
  }

  override _write(chunk: unknown, enc: unknown, next: () => void) {
    this.#output += String(chunk);
    next();
  }

  override _destroy(error: Error | null, next: (error?: Error | null) => void) {
    if (error instanceof Error) this.#deferred.reject(error);
    else next();
  }

  override end() {
    this.#deferred.resolve(this.#output);
    return this.destroy();
  }

  getPromise(): Promise<string> {
    return this.#deferred.promise!;
  }
}

export async function render(
  url: string,
  context: SSRContextValue,
): Promise<{
  body: string;
  htmlAttributes: string;
  bodyAttributes: string;
  metaTags: string;
}> {
  const helmetContext = {};
  const app = (
    <React.StrictMode>
      <SSRContextProvider context={context}>
        <StaticRouter location={url}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </SSRContextProvider>
    </React.StrictMode>
  );
  // Inspired from
  // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/static-entry.js
  const writableStream = new WritableAsPromise();

  const { pipe } = renderToPipeableStream(app, {
    onError(error) {
      writableStream.destroy(error as Error);
    },
    onAllReady() {
      pipe(writableStream);
    },
  });

  const body = await writableStream.getPromise();
  const { helmet } = helmetContext as FilledContext;

  const htmlAttributes = helmet.htmlAttributes.toString();
  const bodyAttributes = helmet.bodyAttributes.toString();
  const metaStrings = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ];
  const metaTags = metaStrings.filter(Boolean).join("\n");
  return { body, htmlAttributes, bodyAttributes, metaTags };
}
