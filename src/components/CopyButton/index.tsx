import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import copy from "copy-text-to-clipboard";
import styles from "./index.module.css";

export default function CopyButton({
  string,
  children,
  className,
}: {
  readonly string: string;
  readonly children?: ReactNode;
  readonly className?: string;
}): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  const title = copied ? "Copied" : "Copy to clipboard";
  return (
    <button
      className={clsx(styles.copyButton, className)}
      onClick={() => {
        copy(string);
        setCopied(true);
        timeout.current = window.setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      aria-label={title}
      title={title}
      type="button">
      {children}
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.copyIcon}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
            fill="var(--color-text)"
          />
          <path
            d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
            fill="var(--color-text)"
          />
        </svg>
      )}
    </button>
  );
}
