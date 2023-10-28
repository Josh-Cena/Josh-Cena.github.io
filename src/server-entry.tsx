import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url: string, context: Record<string, unknown>) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
