import { useState, type ReactNode, type ReactElement } from "react";
import Color from "color";
import Link from "@/components/Link";
import CopyButton from "@/components/CopyButton";
import styles from "./index.module.css";

function Tabs({
  children,
}: {
  readonly children: ReactElement<{ label: string }>[];
}) {
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
  name,
  color,
  method,
  min = 0,
  max,
  setColor,
}: {
  readonly name: string;
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
  readonly setColor: (c: Color) => void;
}) {
  return (
    <label>
      {name}
      <input
        type="range"
        style={{
          ...Object.fromEntries(
            Array.from({ length: 11 }, (_, i) => [
              `--color-${i}`,
              color[method]((max / 10) * i)
                .rgb()
                .toString(),
            ]),
          ),
          // @ts-expect-error: custom CSS variables
          "--color-current": color.negate().toString(),
        }}
        value={color[method]()}
        min={min}
        max={max}
        onInput={(e) => {
          setColor(color[method](Number(e.currentTarget.value)));
        }}
      />
    </label>
  );
}

function CopiableColor({ colorString }: { readonly colorString: string }) {
  return (
    <span style={{ display: "inline-block" }}>
      <CopyButton string={colorString} className="show-copy-button">
        <code style={{ marginRight: "0.5em" }}>{colorString}</code>
      </CopyButton>
    </span>
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
            } catch {
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
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">
                HEX
              </Link>
              : <CopiableColor colorString={color.hex()} />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">
                RGB
              </Link>
              :{" "}
              <CopiableColor
                colorString={r`rgb(${color.red()} ${color.green()} ${color.blue()})`}
              />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">
                HSL
              </Link>
              :{" "}
              <CopiableColor
                colorString={r`hsl(${color.hue()} ${color.saturationl()}% ${color.lightness()}%)`}
              />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb">
                HWB
              </Link>
              :{" "}
              <CopiableColor
                colorString={r`hwb(${color.hue()} ${color.white()}% ${color.black()}%)`}
              />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/device-cmyk">
                CMYK
              </Link>
              :{" "}
              <CopiableColor
                colorString={r`device-cmyk(${color.cyan()}% ${color.magenta()}% ${color.yellow()}% ${color.black()}%)`}
              />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab">
                LAB
              </Link>
              :{" "}
              <CopiableColor
                colorString={r`lab(${color.l()}% ${color.a()}% ${color.b()}%)`}
              />
            </span>
            <span>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch">
                LCH
              </Link>
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
                name={c}
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
                name={c}
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
                name={c}
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
                name={c}
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
                name={c}
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
                name={c}
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

export const meta = {
  title: "Color converter",
  description:
    "Readily convert colors to different formats and adjust its components with visualizations",
};
