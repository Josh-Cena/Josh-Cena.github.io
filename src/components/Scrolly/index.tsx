import { useEffect, useRef, useState } from "react";
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

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const p = entries[0]!.intersectionRatio;
        if (
          p >= 0 &&
          p <= 1 &&
          p !== percentage &&
          entries[0]!.intersectionRect.top !== entries[0]!.rootBounds!.top
        )
          setPercentage(p);
      },
      { threshold: Array.from({ length: 1000 }, (_, i) => i / 1000) },
    ),
  );
  useEffect(() => {
    observer.current.observe(frameRef.current!);
    const onScroll = () => {
      // Intersection observer doesn't reliably fire for the boundaries, so we
      // add another handler (but IO still has better performance). It's also
      // useful for the initial render
      if (window.scrollY < 20) setPercentage(0);
      else if (window.scrollY > frameRef.current!.offsetTop) setPercentage(1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      // Observer ref never changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.current.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
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

export default function Scrolly(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <ScrollyClient /> : <ScrollyServer />;
}
