import type { ReactNode, ComponentProps } from "react";
import { useColorMode } from "@/context/ColorMode";

export default function Mermaid({
  srcLight,
  srcDark,
  ...props
}: {
  readonly srcLight: string;
  readonly srcDark: string;
} & ComponentProps<"img">): ReactNode {
  const { colorMode } = useColorMode();
  return (
    <img
      src={colorMode === "dark" ? srcDark : srcLight}
      alt="Mermaid Diagram"
      {...props}
    />
  );
}
