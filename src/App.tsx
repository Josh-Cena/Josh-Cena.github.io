import "core-js/proposals/set-methods-v2";
import "core-js/proposals/iterator-helpers";

import React from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import "./global.css";

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
