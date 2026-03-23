import type { ReactNode } from "react";

export type AssetMap = {
  bootstrapModules: string[];
  stylesheets: string[];
};

export default function Document({
  assets,
  children,
}: {
  readonly assets: AssetMap;
  readonly children: ReactNode;
}): ReactNode {
  return (
    <html lang="en-US" dir="ltr" data-color-mode="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          rel="stylesheet"
        />
        {assets.stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
