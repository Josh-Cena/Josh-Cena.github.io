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
  const [verticalDistance, setVerticalDistance] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [percentage, setPercentage] = useState(0);
  const getSVGRatio = () =>
    (svgRef.current?.getBoundingClientRect().width ?? 400) / 400;
  const getVal = linearInterpolate(percentage);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const p = entries[0]!.intersectionRatio;
        const d = entries[0]!.intersectionRect.height;
        if (
          p >= 0 &&
          p <= 1 &&
          p !== percentage &&
          entries[0]!.intersectionRect.top !== entries[0]!.rootBounds!.top
        ) {
          setPercentage(p);
          setVerticalDistance(d);
        }
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
      if (window.scrollY < 20) {
        setPercentage(0);
        setVerticalDistance(0);
      } else if (window.scrollY > frameRef.current!.offsetTop) {
        setPercentage(1);
        setVerticalDistance(frameRef.current!.getBoundingClientRect().height);
      }
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
      {[0, 1].map((i) => (
        <div
          className={clsx(styles.frame)}
          key={i}
          ref={i === 1 ? frameRef : undefined}
        />
      ))}
      <div
        style={{
          transform: `translateY(${verticalDistance}px)`,
          opacity: getVal(bgOpacities),
          position: "absolute",
          top: 0,
          left: 0,
        }}
        className={clsx(styles.frame, styles.pictureFrame)}
      />
      <ScrollyElements
        getVal={getVal}
        superTall
        ref={svgRef}
        globalYShift={verticalDistance / getSVGRatio()}
      />
    </div>
  );
}

function ScrollyServer() {
  return (
    <div className={styles.container}>
      {([0, 1] as const).map((i) => (
        <div
          className={clsx(styles.frame, i === 1 && styles.pictureFrame)}
          key={i}>
          <div className={styles.frameContent}>
            <ScrollyElements
              getVal={linearInterpolate(i)}
              superTall={false}
              globalYShift={0}
            />
          </div>
        </div>
      ))}
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
