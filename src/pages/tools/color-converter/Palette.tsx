import type { ReactNode } from "react";
import clsx from "clsx";
import Color from "color";
import { colors } from "@/colors";
import styles from "./Palette.module.css";

export default function Palette({
  onSelect,
}: {
  readonly onSelect: (color: string) => void;
}): ReactNode {
  return (
    <div>
      <div className={styles.colorWheel}>
        {Object.entries(colors).map(([name, color], i) => (
          <div
            key={name}
            className={styles.colorGroup}
            style={{ ["--group-index" as never]: i }}>
            {[-30, -15, -10, 0, 10, 15, 30].map((percent) => {
              const colorShade = Color(color)
                .darken(percent / 100)
                .hex();
              return (
                <button
                  type="button"
                  key={percent}
                  className={clsx(
                    styles.colorDot,
                    percent === 0 && styles.colorDotBase,
                  )}
                  style={{
                    backgroundColor: colorShade,
                    color: Color(colorShade).isLight() ? "black" : "white",
                  }}
                  data-label={colorShade}
                  aria-label={colorShade}
                  onClick={() => onSelect(colorShade)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
