import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export default function CommandButton({
  onClick,
}: {
  readonly onClick?: () => void;
}): ReactNode {
  return (
    <div className={styles.inputContent}>
      <button
        type="button"
        className={clsx(styles.cleanButton, styles.inputRow)}
        onClick={onClick}>
        $ _
      </button>
    </div>
  );
}
