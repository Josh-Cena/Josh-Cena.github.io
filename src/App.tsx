import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import "./global.css";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/**/*.tsx");

const routes = Object.entries(pages)
  .map(([path, module]) => {
    const name = path.match(/\.\/pages\/(?<name>.*)\.tsx$/)!.groups!.name!;
    return {
      path:
        name === "404" ? "*" : `/${name.toLowerCase()}`.replace(/index$/, ""),
      RouteComp: React.lazy(
        module as () => Promise<{ default: React.ComponentType }>,
      ),
    };
  })
  .sort((a, b) => (a.path === "*" ? 1 : b.path === "*" ? -1 : 0));

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
