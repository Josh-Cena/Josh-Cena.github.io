import { useRef, useEffect } from "react";
import { useColorMode, type ColorMode } from "@/context/ColorMode";
import styles from "./index.module.css";

export default function Canvas({
  code,
  width,
  height,
  ...props
}: {
  readonly code: (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    textColor: string,
    colorMode: ColorMode,
  ) => void;
  readonly width: number;
  readonly height: number;
} & React.CanvasHTMLAttributes<HTMLCanvasElement>): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { colorMode } = useColorMode();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const textColor = getComputedStyle(
      document.documentElement,
    ).getPropertyValue("--color-text");
    ctx.strokeStyle = textColor;
    ctx.fillStyle = textColor;
    try {
      code(ctx, width, height, textColor, colorMode);
    } catch (e) {
      ctx.fillStyle = "red";
      ctx.font = "16px sans-serif";
      ctx.fillText(`Error: ${(e as Error).message}`, 10, 30);
    }
    return () => ctx.reset();
  }, [code, width, height, colorMode]);
  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        {...props}
        style={
          {
            "--width": `${width}px`,
            "--height": `${height}px`,
          } as React.CSSProperties
        }
        className={styles.canvas}
      />
    </div>
  );
}
