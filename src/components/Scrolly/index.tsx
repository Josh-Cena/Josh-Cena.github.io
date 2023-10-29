import { useEffect, useRef, useState, useCallback } from "react";
import clsx from "clsx";
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
const jColors = [0, 0, 255] as const;
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
  const [percentage, setPercentage] = useState(0);
  const [verticalDistance, setVerticalDistance] = useState(0);
  const [svgRatio, setSvgRatio] = useState(1);
  const [frameHeight, setFrameHeight] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const onScroll = useCallback(() => {
    const scrollPercentage =
      Math.floor(window.scrollY / frameHeight * 1000) / 1000;
    if (
      scrollPercentage >= 0 &&
      scrollPercentage <= 1 &&
      scrollPercentage !== percentage
    ) {
      setPercentage(scrollPercentage);
      setVerticalDistance(window.scrollY / svgRatio);
    }
  }, [svgRatio, frameHeight]);
  const onResize = useCallback(() => {
    setSvgRatio((svgRef.current?.getBoundingClientRect().width ?? 400) / 400);
    setFrameHeight(frameRef.current?.getBoundingClientRect().height ?? 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [onResize, onScroll]);
  const getVal = linearInterpolate(percentage);
  return (
    <div className={styles.container}>
      {[0, 1].map((i) => (
        <div
          className={clsx(styles.frame, i === 1 && styles.pictureFrame)}
          key={i}
          ref={i === 0 ? frameRef : undefined}
        />
      ))}
      <ScrollyElements
        ref={svgRef}
        superTall
        gScale={getVal(gScales)}
        gShift={{ x: getVal(gShiftXs), y: getVal(gShiftYs) + verticalDistance }}
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
        borderOpacity={getVal(borderOpacities)}
        borderShiftY={verticalDistance}
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
              jColor={getVal(jColors)}
              cCenter={{ x: getVal(cCenterXs), y: getVal(cCenterYs) }}
              cSize={{ w: getVal(cSizeWs), h: getVal(cSizeHs) }}
              text1={i === 1 ? "oshua" : ""}
              text2={i === 1 ? "hen" : ""}
              text1Pos={{ x: getVal(text1Xs), y: getVal(text1Ys) }}
              text2Pos={{ x: getVal(text2Xs), y: getVal(text2Ys) }}
              textSize={getVal(textSizes)}
              text1Opacity={getVal(text1Opacities)}
              text2Opacity={getVal(text2Opacities)}
              borderOpacity={getVal(borderOpacities)}
              borderShiftY={0}
            />
          </div>
        </div>
      );})}
    </div>
  );
}

export default function Scrolly() {
  // return <ScrollyServer />;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <ScrollyClient /> : <ScrollyServer />;
}
