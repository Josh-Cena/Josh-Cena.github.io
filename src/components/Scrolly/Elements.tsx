import React from "react";
import clsx from "clsx";
import styles from "./Elements.module.css";

const jCenterOrig = { x: 95.534, y: 105.729 };
const cCenterOrig = { x: 137.853, y: 128.715 };
const jSizeOrig = { w: 158.932, h: 143.49 };
const cSizeOrig = { w: 75.67, h: 80.026 };

function ScrollyElements(
  {
    superTall,
    gScale,
    gShift,
    jCenter,
    jSize,
    jColor,
    cCenter,
    cSize,
    text1,
    text2,
    text1Pos,
    text2Pos,
    textSize,
    text1Opacity,
    text2Opacity,
    borderProgress,
    borderShiftY,
  }: {
    superTall: boolean;
    gScale: number;
    gShift: { x: number; y: number };
    jCenter: { x: number; y: number };
    jSize: { w: number; h: number };
    jColor: number;
    cCenter: { x: number; y: number };
    cSize: { w: number; h: number };
    text1: string;
    text2: string;
    text1Pos: { x: number; y: number };
    text2Pos: { x: number; y: number };
    textSize: number;
    text1Opacity: number;
    text2Opacity: number;
    borderProgress: number;
    borderShiftY: number;
  },
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-100 0 400 ${superTall ? 1000 : 200}`}
      className={clsx(styles.elements)}
      preserveAspectRatio="xMinYMin slice">
      <g
        data-color-mode="dark"
        transform={`matrix(${gScale}, 0, 0, ${gScale}, ${gShift.x}, ${gShift.y})`}>
        <path
          transform={`matrix(${jSize.w / jSizeOrig.w}, 0, 0, ${
            jSize.h / jSizeOrig.h
          }, ${jCenter.x - (jCenterOrig.x * jSize.w) / jSizeOrig.w}, ${
            jCenter.y - (jCenterOrig.y * jSize.h) / jSizeOrig.h
          })`}
          fill="var(--color-text)"
          filter={`brightness(${jColor})`}
          d="m 25.000024,33.983972 c 0,6.666603 0,13.333209 0,19.999811 21.206457,0 42.412914,0 63.619371,0 C 76.268383,84.308203 63.917371,114.63262 51.56636,144.95704 43.949254,138.6582 36.332149,132.35936 28.715044,126.06052 c -4.215592,5.09771 -8.431183,10.19542 -12.646774,15.29312 14.560523,12.04027 29.121047,24.08053 43.68157,36.1208 16.765902,-41.16356 33.531802,-82.327105 50.2977,-123.490657 21.65088,0 43.30175,0 64.95263,0 0,-6.666602 0,-13.333208 0,-19.999811 -50.00005,0 -100.000099,0 -150.000146,0 z"
        />
        <path
          transform={`matrix(${cSize.w / cSizeOrig.w}, 0, 0, ${
            cSize.w / cSizeOrig.w
          }, ${cCenter.x - cCenterOrig.x * (cSize.w / cSizeOrig.w)}, ${
            cCenter.y - cCenterOrig.y * (cSize.h / cSizeOrig.h)
          })`}
          fill="#39cac4"
          d="m 140.00024,88.704146 c -14.57119,-0.146727 -28.77435,8.438626 -35.41701,21.408444 -6.887844,12.80774 -5.907795,29.33375 2.44512,41.23782 8.1127,12.06896 23.18577,18.91468 37.61195,17.08339 12.76941,-1.39907 24.56534,-9.40876 30.57588,-20.76168 -6.24613,-2.54437 -12.49226,-5.08875 -18.73839,-7.63312 -4.58977,6.86513 -13.68643,10.24125 -21.64158,7.9871 -8.26921,-2.07565 -14.58304,-9.94716 -14.81805,-18.4691 -0.49978,-8.60374 5.25678,-17.06758 13.44756,-19.75545 8.10211,-2.942 17.85888,0.15517 22.77742,7.23362 0.61787,1.1324 1.20218,2.0566 2.45912,0.99798 5.66191,-2.46481 11.32382,-4.92962 16.98572,-7.39443 -6.45,-13.066693 -20.52456,-21.861287 -35.09633,-21.930195 -0.19712,-0.0029 -0.39427,-0.0044 -0.59141,-0.0044 z"
        />
        <text
          opacity={text1Opacity}
          x={text1Pos.x}
          y={text1Pos.y}
          fontSize={textSize}
          fill="white">
          {text1}
        </text>
        <text
          opacity={text2Opacity}
          x={text2Pos.x}
          y={text2Pos.y}
          fontSize={textSize}
          fill="#39cac4">
          {text2}
        </text>
      </g>
      <g
        opacity={borderProgress}
        transform={`matrix(1, 0, 0, 1, 0, ${borderShiftY})`}>
        <path
          stroke="var(--color-background)"
          strokeWidth={5}
          className={styles.nameBorder}
          d="M -100,100 L 10,100"
        />
        <path
          stroke="var(--color-background)"
          strokeWidth={5}
          className={styles.nameBorder}
          d="M 300,100 L 190,100"
        />
        <path
          fillOpacity={0}
          stroke="var(--color-background)"
          strokeWidth={5}
          className={styles.nameBorder}
          d="M 10,5 L 190,5 L 190,195 L 10,195 Z"
        />
      </g>
    </svg>
  );
}

export default React.forwardRef(ScrollyElements);
