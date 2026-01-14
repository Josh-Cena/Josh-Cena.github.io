import "core-js/proposals/set-methods-v2";
import "core-js/proposals/iterator-helpers";

import React from "react";
import { Prism } from "prism-react-renderer";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./Layout";

import "./global.css";

globalThis.Prism = Prism;
await import("prismjs/components/prism-bash");
await import("prismjs/components/prism-diff");
await import("prismjs/components/prism-haskell");
await import("prismjs/components/prism-ocaml");
await import("prismjs/components/prism-python");
await import("prismjs/components/prism-r");

export default function App(): JSX.Element {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, RouteComp }) => (
          <Route
            key={path}
            path={path}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <RouteComp />
              </React.Suspense>
            }
          />
        ))}
      </Routes>
    </Layout>
  );
}
