import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import ScrollyElements from "./Elements";
import styles from "./index.module.css";

const bgOpacities = [0, 1] as const;

function linearInterpolate(x: number) {
  return (keyframes: readonly number[]) => {
    const xScaled = x * (keyframes.length - 1);
    const x1 = Math.floor(xScaled);
    if (x1 === keyframes.length - 1) return keyframes.at(-1)!;
    const y1 = keyframes[x1]!;
    const y2 = keyframes[x1 + 1]!;
    const res = y1 + (y2 - y1) * (xScaled - x1);
    return res;
  };
}

function ScrollyClient() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const getVal = linearInterpolate(percentage);

  useEffect(() => {
    function onScroll() {
      if (!frameRef.current) return;
      const { top, height } = frameRef.current.getBoundingClientRect();
      const newPercentage = Math.min(1, Math.max(0, (height - top) / height));
      console.log(newPercentage);
      setPercentage(newPercentage);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.frame, styles.scrollable, styles.pictureFrame)}
        // @ts-expect-error: custom CSS variables
        style={{ "--opacity-bg": getVal(bgOpacities) }}>
        <ScrollyElements className={styles.scrolly} getVal={getVal} />
      </div>
      <div className={clsx(styles.frame, styles.firstFrame)} />
      <div className={clsx(styles.frame)} ref={frameRef} />
    </div>
  );
}

function ScrollyServer() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <ScrollyElements getVal={linearInterpolate(0)} />
      </div>
      <div
        className={clsx(styles.frame, styles.pictureFrame)}
        // @ts-expect-error: custom CSS variables
        style={{ "--opacity-bg": 1 }}>
        <ScrollyElements getVal={linearInterpolate(1)} />
      </div>
    </div>
  );
}

export default function Scrolly(): ReactNode {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <ScrollyClient /> : <ScrollyServer />;
}
