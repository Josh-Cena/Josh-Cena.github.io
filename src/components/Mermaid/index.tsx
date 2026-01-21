import { useState, useEffect } from "react";
import mermaid, { type RenderResult } from "mermaid";
import { useColorMode } from "@/context/ColorMode";

export default function Mermaid({
  code,
}: {
  readonly code: string;
}): JSX.Element | null {
  const [result, setResult] = useState<RenderResult | null>(null);
  const { colorMode } = useColorMode();
  // TODO: replace with useId() when upgrading to React 19
  // eslint-disable-next-line react/hook-use-state
  const [id] = useState(`mermaid-svg-${Math.round(Math.random() * 10000000)}`);

  useEffect(() => {
    mermaid.initialize({ theme: colorMode === "dark" ? "dark" : "default" });
    mermaid
      .render(id, code)
      .then(setResult)
      .catch((e: unknown) => {
        console.log(e);
        setResult({
          svg: `<pre style="color: red;">Error rendering Mermaid diagram: ${(e as Error).message}</pre>`,
          diagramType: "error",
        });
        // A "Syntax error in text" SVG element is created
        const error = document.querySelector<HTMLElement>(`#d${id}`);
        if (error) error.style.display = "none";
      });
  }, [id, code, colorMode]);

  if (result === null) return null;
  return (
    <div
      ref={(el) => {
        if (el) result.bindFunctions?.(el);
      }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: result.svg }}
    />
  );
}
