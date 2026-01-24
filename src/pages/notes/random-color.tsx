import { useRef, useEffect, type ReactNode } from "react";

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = randInt(0, i + 1);
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  }
}

type Coord3 = { x: number; y: number; z: number };
type Coord2 = { x: number; y: number };

function mapCoord2(
  coord: Coord2,
  fn: (x: number, k: "x" | "y") => number,
): Coord2 {
  return { x: fn(coord.x, "x"), y: fn(coord.y, "y") };
}

function mapCoord3(
  coord: Coord3,
  fn: (x: number, k: "x" | "y" | "z") => number,
): Coord3 {
  return { x: fn(coord.x, "x"), y: fn(coord.y, "y"), z: fn(coord.z, "z") };
}

const dirs2D: Coord2[] = [
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
];

const dirs3D: Coord3[] = [
  { x: -1, y: 0, z: 0 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: 0, z: -1 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 0, z: 1 },
];

function* traverseRGB(width: number, type: "BFS" | "DFS") {
  const stk: Coord3[] = [];
  stk.push({
    x: randInt(0, width),
    y: randInt(0, width),
    z: randInt(0, width),
  });
  const vis = Array.from({ length: width }, () =>
    Array.from({ length: width }, () =>
      Array.from({ length: width }, () => false),
    ),
  );
  while (stk.length > 0) {
    const p = stk[type === "BFS" ? "shift" : "pop"]()!;
    if (!vis[p.x]![p.y]![p.z]) {
      yield mapCoord3(p, (x) => x / width);
      vis[p.x]![p.y]![p.z] = true;
    }
    shuffle(dirs3D);
    for (const dir of dirs3D) {
      const pp = mapCoord3(p, (x, k) => x + dir[k]);
      if (
        Object.values(pp).every((x) => x >= 0 && x < width) &&
        !vis[pp.x]![pp.y]![pp.z]
      )
        stk.push(pp);
    }
  }
}

function* traversePixel(width: number, type: "BFS" | "DFS") {
  const stk: Coord2[] = [];
  stk.push({
    x: randInt(0, width),
    y: randInt(0, width),
  });
  const vis = Array.from({ length: width }, () =>
    Array.from({ length: width }, () => false),
  );
  while (stk.length > 0) {
    const p = stk[type === "BFS" ? "shift" : "pop"]()!;
    if (!vis[p.x]![p.y]) {
      yield p;
      vis[p.x]![p.y] = true;
    }
    shuffle(dirs2D);
    for (const dir of dirs2D) {
      const pp = mapCoord2(p, (x, k) => x + dir[k]);
      if (
        Object.values(pp).every((x) => x >= 0 && x < width) &&
        !vis[pp.x]![pp.y]
      )
        stk.push(pp);
    }
  }
}

const rgbWidth = 256 / 4;
const pictureWidth = Math.floor(Math.sqrt(rgbWidth ** 3));
const canvasWidth = 800;
const scale = canvasWidth / pictureWidth;

export default function RandomColor(): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  useEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;
    const iter = traversePixel(pictureWidth, "DFS");
    const rgbPath = traverseRGB(rgbWidth, "DFS");
    rafRef.current = requestAnimationFrame(function draw() {
      for (let i = 0; i < 200; i++) {
        const nextPixel = iter.next();
        const nextRGB = rgbPath.next();
        if (nextPixel.done || nextRGB.done) return;
        const p = nextPixel.value;
        const [r, g, b] = Object.values(nextRGB.value).map((x) =>
          Math.floor(x * 255),
        ) as [number, number, number];
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(p.x * scale, p.y * scale, scale, scale);
      }
      rafRef.current = requestAnimationFrame(draw);
    });
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);
  return <canvas ref={canvasRef} width={canvasWidth} height={canvasWidth} />;
}

export const meta = {
  title: "Random Color",
  description: "Generates a map of random RGB colors",
};
