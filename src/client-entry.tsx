import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as H from "react-helmet-async";
import App from "./App";

const { HelmetProvider } = (H as unknown as { default: typeof H }).default;

ReactDOM.hydrateRoot(
  document.getElementById("app")!,
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
