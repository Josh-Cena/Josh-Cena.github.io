// Separate file because this function is shared between the server and client.

/**
 * Takes a path that's relative to `src/pages` and normalizes it to the
 * canonical URL.
 *
 * E.g.:
 * - `index.tsx` -> `/`
 * - `404.tsx` -> `/404/`
 * - `about/index.tsx` -> `/about/`
 * - `blog/2023-11-05-welcome.mdx` -> `/blog/welcome/`
 * - `notes/quicksort.mdx` -> `/notes/quicksort/`
 */
export function normalizeRoute(path: string): string {
  const name = path
    .toLowerCase()
    .replace(/(?:\/?index)?\.(?:tsx|mdx)$/u, "")
    .replace(/\d{4}-\d{2}-\d{2}-/u, "");
  if (name === "") return "/";
  // No trailing slash, because it needs to be 404.html instead of
  // 404/index.html
  if (name === "404") return "/404";
  return `/${name}/`;
}
