import type { ReactNode } from "react";
import { useColorMode } from "@/context/ColorMode";
import SunIcon from "assets/sun-icon.svg?react";
import MoonIcon from "assets/moon-icon.svg?react";
import styles from "./index.module.css";

export default function ColorModeToggle(): ReactNode {
  const { colorMode, setColorMode } = useColorMode();
  const Icon = colorMode === "light" ? SunIcon : MoonIcon;
  const title = `Switch between dark and light mode (currently in ${colorMode} mode)`;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      title={title}
      aria-label={title}
      aria-live="polite">
      <Icon className={styles.icon} />
    </button>
  );
}
