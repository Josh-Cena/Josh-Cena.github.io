import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useColorMode } from "../../context/ColorMode";
import ScrollyElements from "./Elements";
import styles from "./styles.module.css";

const jCenterOrig = { x: 95.534, y: 105.729 };
const cCenterOrig = { x: 137.853, y: 128.715 };
const jSizeOrig = { w: 158.932, h: 143.49 };
const cSizeOrig = { w: 75.67, h: 80.026 };

const gScales = [1, 0.7] as const;
const gShiftXs = [0, 35] as const;
const gShiftYs = [0, 32] as const;
const jCenterXs = [jCenterOrig.x, 40] as const;
const jCenterYs = [jCenterOrig.y, 60] as const;
const resizedJ = jSizeOrig.w * (cSizeOrig.h / jSizeOrig.h);
const jSizeWs = [jSizeOrig.w, resizedJ * 0.8] as const;
const jSizeHs = [jSizeOrig.h, cSizeOrig.h * 0.8] as const;
const cCenterXs = [cCenterOrig.x, 50] as const;
const cCenterYs = [cCenterOrig.y, 140] as const;
const cSizeWs = [cSizeOrig.w, cSizeOrig.w * 0.8] as const;
const cSizeHs = [cSizeOrig.h, cSizeOrig.h * 0.8] as const;
const text1Xs = [-30, 50] as const;
const text1Ys = [135, 90] as const;
const text2Xs = [180, 85] as const;
const text2Ys = [135, 170] as const;
const textSizes = [64, 64 * 0.8] as const;
const text1Opacities = [0, 0, 1] as const;
const text2Opacities = [0, 0, 1] as const;
const borderOpacities = [0, 1] as const;
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

  const { colorMode } = useColorMode();
  const jColors = colorMode === "dark" ? [1, 1] : [0, 1];
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
  const getVal = linearInterpolate(percentage);
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
        superTall
        ref={svgRef}
        gScale={getVal(gScales)}
        gShift={{
          x: getVal(gShiftXs),
          y: getVal(gShiftYs) + verticalDistance / getSVGRatio(),
        }}
        jCenter={{ x: getVal(jCenterXs), y: getVal(jCenterYs) }}
        jSize={{ w: getVal(jSizeWs), h: getVal(jSizeHs) }}
        jColor={getVal(jColors)}
        cCenter={{ x: getVal(cCenterXs), y: getVal(cCenterYs) }}
        cSize={{ w: getVal(cSizeWs), h: getVal(cSizeHs) }}
        text1={percentage > 0.5 ? "oshua" : ""}
        text2={percentage > 0.5 ? "hen" : ""}
        text1Pos={{ x: getVal(text1Xs), y: getVal(text1Ys) }}
        text2Pos={{ x: getVal(text2Xs), y: getVal(text2Ys) }}
        textSize={getVal(textSizes)}
        text1Opacity={getVal(text1Opacities)}
        text2Opacity={getVal(text2Opacities)}
        borderProgress={getVal(borderOpacities)}
        borderShiftY={verticalDistance / getSVGRatio()}
      />
    </div>
  );
}

function ScrollyServer() {
  return (
    <div className={styles.container}>
      {([0, 1] as const).map((i) => {
        const getVal = linearInterpolate(i);
        return (
          <div
            className={clsx(styles.frame, i === 1 && styles.pictureFrame)}
            key={i}>
            <div className={styles.frameContent}>
              <ScrollyElements
                superTall={false}
                gScale={getVal(gScales)}
                gShift={{ x: getVal(gShiftXs), y: getVal(gShiftYs) }}
                jCenter={{ x: getVal(jCenterXs), y: getVal(jCenterYs) }}
                jSize={{ w: getVal(jSizeWs), h: getVal(jSizeHs) }}
                jColor={getVal([0, 1])}
                cCenter={{ x: getVal(cCenterXs), y: getVal(cCenterYs) }}
                cSize={{ w: getVal(cSizeWs), h: getVal(cSizeHs) }}
                text1={i === 1 ? "oshua" : ""}
                text2={i === 1 ? "hen" : ""}
                text1Pos={{ x: getVal(text1Xs), y: getVal(text1Ys) }}
                text2Pos={{ x: getVal(text2Xs), y: getVal(text2Ys) }}
                textSize={getVal(textSizes)}
                text1Opacity={getVal(text1Opacities)}
                text2Opacity={getVal(text2Opacities)}
                borderProgress={getVal(borderOpacities)}
                borderShiftY={0}
              />
            </div>
          </div>
        );
      })}
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
