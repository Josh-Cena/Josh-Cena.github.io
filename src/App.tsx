import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import "./global.css";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/*.tsx", { eager: true });

const routes = Object.entries(pages).map(([path, module]) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]!;
  return {
    name,
    path: name === "index" ? "/" : `/${name.toLowerCase()}`,
    RouteComp: (module as typeof import("./pages/index")).default,
  };
});

export default function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, RouteComp }) => (
          <Route key={path} path={path} element={<RouteComp />} />
        ))}
      </Routes>
    </Layout>
  );
}
