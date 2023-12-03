import clsx from "clsx";
import styles from "./_DataTables.module.css";

export function charCode(char: string): string {
  return `${char} (${[...char]
    .map(
      (c) =>
        `U+${c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`,
    )
    .join(" ")})`;
}

export function CharSet<T>({
  set,
  display,
  assertSize,
}: {
  readonly set: Iterable<T>;
  readonly display?: (char: T) => string;
  readonly assertSize?: number;
}): JSX.Element {
  const values = [...set];
  const assertionFailed =
    assertSize !== undefined && values.length !== assertSize;
  if (assertionFailed) {
    console.error(
      "Assertion failed: expected set of size",
      assertSize,
      "but got",
      values.length,
    );
  }
  if (values.length === 0) {
    return (
      <span className={clsx(assertionFailed && "assertion-failed")}>∅</span>
    );
  }

  return (
    <details>
      <summary>
        Character set ({/* No space */}
        <span className={clsx(assertionFailed && "assertion-failed")}>
          {values.length}
        </span>
        {/* No space */})
      </summary>
      {display ? (
        <ul>
          {values.map((char, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>{display(char)}</li>
          ))}
        </ul>
      ) : (
        <div className={styles.charSet}>
          {values.map((char) => (
            <span key={char as string} className={styles.char}>
              {charCode(char as string)}
            </span>
          ))}
        </div>
      )}
    </details>
  );
}
