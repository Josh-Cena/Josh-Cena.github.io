import { useState, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Tabs({
  children,
  className,
}: {
  readonly children: ReactElement<{ label: string }>[];
  readonly className?: string;
}): ReactNode {
  const [selected, setSelected] = useState(0);
  return (
    <div className={clsx(styles.tabs, className)}>
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

Tabs.Item = ({
  children,
}: {
  readonly children: ReactNode;
  readonly label: string;
}): ReactNode => <>{children}</>;
