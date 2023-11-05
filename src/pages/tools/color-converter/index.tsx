import { useState, useRef, useEffect, type ReactNode } from "react";
import Color from "color";
import copy from "copy-text-to-clipboard";
import styles from "./index.module.css";

function Tabs({ children }: { readonly children: JSX.Element[] }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.colorInputs}>
      {children.map((tab, i) => (
        <button
          className={i === selected ? styles.selected : ""}
          key={tab.props.label}
          onClick={() => setSelected(i)}
          type="button">
          {tab.props.label}
        </button>
      ))}
      {children[selected]}
    </div>
  );
}

function TabItem({
  children,
}: {
  readonly children: ReactNode;
  readonly label: string;
}) {
  return <>{children}</>;
}

const r = (strings: TemplateStringsArray, ...args: unknown[]) =>
  String.raw(
    { raw: strings },
    ...args.map((a) =>
      typeof a === "number"
        ? Math.round(a * (strings[0] === "rgb(" ? 1 : 100)) /
          (strings[0] === "rgb(" ? 1 : 100)
        : a,
    ),
  );
function ColorInput({
  c,
  color,
  method,
  min = 0,
  max,
  setColor,
}: {
  readonly c: string;
  readonly color: Color;
  readonly method:
    | "red"
    | "blue"
    | "green"
    | "hue"
    | "saturationl"
    | "lightness"
    | "white"
    | "black"
    | "cyan"
    | "magenta"
    | "yellow"
    | "l"
    | "a"
    | "b"
    | "chroma";
  readonly min?: number;
  readonly max: number;
  readonly setColor: (color: Color) => void;
}) {
  return (
    <label key={c}>
      {c}
      <input
        type="range"
        style={{
          ...Object.fromEntries(
            Array.from({ length: 11 }, (_, i) => [
              `--color-${i}`,
              (color[method]((max / 10) * i) as Color).rgb().toString(),
            ]),
          ),
          // @ts-expect-error: custom CSS variables
          "--color-current": color.negate().toString(),
        }}
        value={color[method]()}
        min={min}
        max={max}
        onInput={(e) => {
          setColor(color[method](Number(e.currentTarget.value)) as Color);
        }}
      />
    </label>
  );
}

function CopiableColor({ colorString }: { readonly colorString: string }) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  return (
    <button
      className={styles.copyButton}
      onClick={() => {
        copy(colorString);
        setCopied(true);
        timeout.current = setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      type="button">
      <code>{colorString}</code>
      {copied ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.copyIcon}>
          <path
            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
            stroke="var(--color-green)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.copyIcon}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
            fill="#0F0F0F"
          />
          <path
            d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
            fill="#0F0F0F"
          />
        </svg>
      )}
    </button>
  );
}

export default function ColorConverter(): JSX.Element {
  const [color, setColor] = useState<Color>(new Color("#39cac4"));
  return (
    <>
      <h1>Color converter</h1>
      <div className={styles.container}>
        <input
          className={styles.colorTextBox}
          onInput={(e) => {
            try {
              setColor(new Color(e.currentTarget.value));
              e.currentTarget.setCustomValidity("");
            } catch (err) {
              e.currentTarget.setCustomValidity("Invalid color");
              e.currentTarget.reportValidity();
            }
          }}
          defaultValue={color.hex().toString()}
        />
        <div className={styles.colorData}>
          <div
            className={styles.colorPreview}
            style={{ backgroundColor: color.rgb().toString() }}
          />
          <div className={styles.colorDataText}>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">
                HEX
              </a>
              : <CopiableColor colorString={color.hex()} />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">
                RGB
              </a>
              :{" "}
              <CopiableColor
                colorString={r`rgb(${color.red()} ${color.green()} ${color.blue()})`}
              />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">
                HSL
              </a>
              :{" "}
              <CopiableColor
                colorString={r`hsl(${color.hue()} ${color.saturationl()}% ${color.lightness()}%)`}
              />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb">
                HWB
              </a>
              :{" "}
              <CopiableColor
                colorString={r`hwb(${color.hue()} ${color.white()}% ${color.black()}%)`}
              />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/device-cmyk">
                CMYK
              </a>
              :{" "}
              <CopiableColor
                colorString={r`device-cmyk(${color.cyan()}% ${color.magenta()}% ${color.yellow()}% ${color.black()}%)`}
              />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab">
                LAB
              </a>
              :{" "}
              <CopiableColor
                colorString={r`lab(${color.l()}% ${color.a()}% ${color.b()}%)`}
              />
            </span>
            <span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch">
                LCH
              </a>
              :{" "}
              <CopiableColor
                colorString={r`lch(${color.l()}% ${color.chroma()}% ${color.hue()})`}
              />
            </span>
          </div>
        </div>
        <Tabs>
          <TabItem label="RGB">
            {(["R", "G", "B"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      R: "red",
                      G: "green",
                      B: "blue",
                    } as const
                  )[c]
                }
                max={255}
                setColor={setColor}
              />
            ))}
          </TabItem>
          <TabItem label="HSL">
            {(["H", "S", "L"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      H: "hue",
                      S: "saturationl",
                      L: "lightness",
                    } as const
                  )[c]
                }
                max={c === "H" ? 359 : 100}
                setColor={setColor}
              />
            ))}
          </TabItem>
          <TabItem label="HWB">
            {(["H", "W", "B"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      H: "hue",
                      W: "white",
                      B: "black",
                    } as const
                  )[c]
                }
                max={c === "H" ? 359 : 100}
                setColor={setColor}
              />
            ))}
          </TabItem>
          <TabItem label="CMYK">
            {(["C", "M", "Y", "K"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      C: "cyan",
                      M: "magenta",
                      Y: "yellow",
                      K: "black",
                    } as const
                  )[c]
                }
                max={100}
                setColor={setColor}
              />
            ))}
          </TabItem>
          <TabItem label="LAB">
            {(["L", "A", "B"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      L: "l",
                      A: "a",
                      B: "b",
                    } as const
                  )[c]
                }
                min={c === "L" ? 0 : -100}
                max={100}
                setColor={setColor}
              />
            ))}
          </TabItem>
          <TabItem label="LCH">
            {(["L", "C", "H"] as const).map((c) => (
              <ColorInput
                key={c}
                c={c}
                color={color}
                method={
                  (
                    {
                      L: "l",
                      C: "chroma",
                      H: "hue",
                    } as const
                  )[c]
                }
                max={c === "H" ? 360 : 100}
                setColor={setColor}
              />
            ))}
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
