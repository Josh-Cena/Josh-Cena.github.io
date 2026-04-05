import "@vitejs/plugin-react/preamble";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import Document, { type AssetMap } from "./Document";
import { LanguageContextProvider } from "./context/Language";

declare global {
  interface Window {
    __ASSET_MAP__: AssetMap;
  }
}

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <LanguageContextProvider>
      <Document assets={window.__ASSET_MAP__}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Document>
    </LanguageContextProvider>
  </React.StrictMode>,
);
