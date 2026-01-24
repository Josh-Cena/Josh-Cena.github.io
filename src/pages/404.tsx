import type { ReactNode } from "react";
import { useSSRContext } from "@/context/SSRContext";

export default function NotFound(): ReactNode {
  const context = useSSRContext();
  if (context) context.status = 404;
  return (
    <>
      <h1>404</h1>
      <p>Page not found.</p>
    </>
  );
}

export const meta = {
  title: "Not found",
  description: "Page not found",
};
