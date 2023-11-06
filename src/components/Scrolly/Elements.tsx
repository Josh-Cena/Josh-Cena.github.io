import React from "react";
import clsx from "clsx";
import { useColorMode } from "@/context/ColorMode";
import styles from "./Elements.module.css";

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

function ScrollyElements(
  {
    getVal,
    superTall,
    globalYShift,
  }: {
    readonly getVal: (keyframes: readonly number[]) => number;
    readonly superTall: boolean;
    readonly globalYShift: number;
  },
  ref: React.Ref<SVGSVGElement>,
) {
  const gScale = getVal(gScales);
  const jSizeW = getVal(jSizeWs);
  const jSizeH = getVal(jSizeHs);
  const cSizeW = getVal(cSizeWs);
  const cSizeH = getVal(cSizeHs);
  const textSize = getVal(textSizes);
  const { colorMode } = useColorMode();
  const jColors = colorMode === "dark" ? [255, 255] : [0, 255];
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-100 0 400 ${superTall ? 1000 : 200}`}
      className={clsx(styles.elements)}
      preserveAspectRatio="xMinYMin slice">
      <g
        data-color-mode="dark"
        transform={`matrix(${gScale}, 0, 0, ${gScale}, ${getVal(gShiftXs)}, ${
          getVal(gShiftYs) + globalYShift
        })`}>
        <path
          transform={`matrix(${jSizeW / jSizeOrig.w}, 0, 0, ${
            jSizeH / jSizeOrig.h
          }, ${getVal(jCenterXs) - (jCenterOrig.x * jSizeW) / jSizeOrig.w}, ${
            getVal(jCenterYs) - (jCenterOrig.y * jSizeH) / jSizeOrig.h
          })`}
          fill={`rgb(${getVal(jColors)}, ${getVal(jColors)}, ${getVal(
            jColors,
          )})`}
          d="m 25.000024,33.983972 c 0,6.666603 0,13.333209 0,19.999811 21.206457,0 42.412914,0 63.619371,0 C 76.268383,84.308203 63.917371,114.63262 51.56636,144.95704 43.949254,138.6582 36.332149,132.35936 28.715044,126.06052 c -4.215592,5.09771 -8.431183,10.19542 -12.646774,15.29312 14.560523,12.04027 29.121047,24.08053 43.68157,36.1208 16.765902,-41.16356 33.531802,-82.327105 50.2977,-123.490657 21.65088,0 43.30175,0 64.95263,0 0,-6.666602 0,-13.333208 0,-19.999811 -50.00005,0 -100.000099,0 -150.000146,0 z"
        />
        <path
          transform={`matrix(${cSizeW / cSizeOrig.w}, 0, 0, ${
            cSizeW / cSizeOrig.w
          }, ${getVal(cCenterXs) - cCenterOrig.x * (cSizeW / cSizeOrig.w)}, ${
            getVal(cCenterYs) - cCenterOrig.y * (cSizeH / cSizeOrig.h)
          })`}
          fill="#39cac4"
          d="m 140.00024,88.704146 c -14.57119,-0.146727 -28.77435,8.438626 -35.41701,21.408444 -6.887844,12.80774 -5.907795,29.33375 2.44512,41.23782 8.1127,12.06896 23.18577,18.91468 37.61195,17.08339 12.76941,-1.39907 24.56534,-9.40876 30.57588,-20.76168 -6.24613,-2.54437 -12.49226,-5.08875 -18.73839,-7.63312 -4.58977,6.86513 -13.68643,10.24125 -21.64158,7.9871 -8.26921,-2.07565 -14.58304,-9.94716 -14.81805,-18.4691 -0.49978,-8.60374 5.25678,-17.06758 13.44756,-19.75545 8.10211,-2.942 17.85888,0.15517 22.77742,7.23362 0.61787,1.1324 1.20218,2.0566 2.45912,0.99798 5.66191,-2.46481 11.32382,-4.92962 16.98572,-7.39443 -6.45,-13.066693 -20.52456,-21.861287 -35.09633,-21.930195 -0.19712,-0.0029 -0.39427,-0.0044 -0.59141,-0.0044 z"
        />
        <text
          opacity={getVal(text1Opacities)}
          x={getVal(text1Xs)}
          y={getVal(text1Ys)}
          fontSize={textSize}
          fill="var(--color-text)">
          {/* cSpell:ignore oshua */}
          {getVal([0, 1]) > 0.5 ? "oshua" : ""}
        </text>
        <text
          opacity={getVal(text2Opacities)}
          x={getVal(text2Xs)}
          y={getVal(text2Ys)}
          fontSize={textSize}
          fill="#39cac4">
          {getVal([0, 1]) > 0.5 ? "hen" : ""}
        </text>
      </g>
      <g transform="matrix(1.2, 0, 0, 1.2, -23, -30)">
        <path
          className={styles.eyebrow}
          d="m 130.03906,35.265625 c -6.57096,0.37252 -13.07243,3.355468 -17.28515,8.46875 0.88932,0.650391 1.77865,1.300781 2.66797,1.951172 4.43368,-5.340543 11.71756,-7.687776 18.51336,-7.130448 7.67453,0.605406 14.78248,4.099282 21.12921,8.26912 0.60807,-0.91862 1.21615,-1.83724 1.82422,-2.75586 -7.38373,-4.862754 -15.85747,-8.764558 -24.84934,-8.859205 -0.66714,-0.004 -1.33444,0.01439 -2.00027,0.05647 z"
        />
        <path
          style={{
            fill: "white",
            stroke: "black",
            strokeWidth: 4,
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            paintOrder: "stroke fill markers",
          }}
          d="m 153.86903,55.368874 c -0.10519,2.366721 -2.40555,3.806331 -4.30783,4.756214 -5.76944,2.601433 -12.276,3.051559 -18.52206,2.704715 -4.72103,-0.402854 -9.66795,-1.168747 -13.69218,-3.840952 -1.57182,-1.014048 -3.00432,-3.044071 -2.06513,-4.940148 1.38193,-2.600204 4.39224,-3.709345 7.0221,-4.603408 7.07564,-2.055388 14.68311,-2.140198 21.87419,-0.631329 3.21502,0.807417 6.74549,1.805406 8.93804,4.466841 0.44661,0.601486 0.75658,1.329592 0.75287,2.088067 z"
        />
        <path
          className={styles.eye}
          fill="black"
          d="m 127.75874,54.998494 c 0.0205,1.2573 -1.00865,2.3469 -2.15068,2.4722 -1.20933,0.2018 -2.54385,-0.659 -2.79539,-1.9736 -0.26724,-1.1948 0.49672,-2.4748 1.57136,-2.8371 1.20571,-0.4801 2.74703,0.1524 3.2175,1.4672 0.10312,0.2763 0.15748,0.5737 0.15721,0.8713 z"
        />
        <path
          className={styles.eyebrow}
          d="m 67.189453,34.892578 c -6.570618,0.37531 -13.07235,3.357143 -17.285156,8.470703 0.889323,0.650391 1.778646,1.300781 2.667969,1.951172 4.433686,-5.34054 11.717567,-7.687777 18.513365,-7.130448 7.674528,0.605406 14.782484,4.099283 21.129213,8.26912 0.608073,-0.91862 1.216145,-1.837239 1.824218,-2.755859 -7.383909,-4.862683 -15.857256,-8.765788 -24.849343,-8.861111 -0.667137,-0.004 -1.334436,0.01434 -2.000266,0.05642 z"
        />
        <path
          style={{
            fill: "white",
            stroke: "black",
            strokeWidth: 4,
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            paintOrder: "stroke fill markers",
          }}
          d="m 91.019508,54.997169 c -0.105185,2.366722 -2.405551,3.806332 -4.307834,4.756215 -5.769431,2.601433 -12.275998,3.051559 -18.52205,2.704715 -4.721032,-0.402854 -9.66795,-1.168747 -13.692187,-3.840952 -1.571817,-1.014048 -3.004316,-3.044071 -2.065128,-4.940148 1.381929,-2.600204 4.392238,-3.709345 7.022107,-4.603408 7.075633,-2.055388 14.6831,-2.140198 21.874179,-0.631329 3.215024,0.807417 6.745497,1.805406 8.938038,4.466841 0.446612,0.601486 0.756586,1.329591 0.752875,2.088066 z"
        />
        <path
          className={styles.eye}
          fill="black"
          d="m 64.199753,54.998493 c 0.01817,1.240801 -0.970846,2.309985 -2.094058,2.463637 -1.211091,0.228208 -2.55671,-0.595823 -2.839702,-1.909945 -0.289738,-1.167921 0.407551,-2.434405 1.446127,-2.845906 1.189665,-0.542318 2.744057,0.01649 3.283233,1.303159 0.133651,0.308771 0.204696,0.648627 0.2044,0.989055 z"
          style={{ strokeWidth: 1.33 }}
        />
      </g>
      <g
        opacity={getVal(borderOpacities)}
        transform={`matrix(1, 0, 0, 1, 0, ${globalYShift})`}>
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
