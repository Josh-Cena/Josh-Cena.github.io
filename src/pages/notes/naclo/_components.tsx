import chroma from "chroma-js";
import Link from "@/components/Link";
import { tableByProb } from "./_data";
import styles from "./_components.module.css";

const scale = chroma.scale(["#ca393e", "#3eca39"]).domain([0, 1]);

export function Difficulty({
  prob,
}: {
  readonly prob: string;
}): JSX.Element | string {
  const row = tableByProb.get(prob);
  if (!row || Number.isNaN(row.medianSolvePct)) return "N/A";
  const color = scale(row.medianSolvePct).hex();
  return (
    <span
      style={{
        ...(row.isOpen
          ? {
              backgroundColor: color,
              color: chroma(color).luminance() < 0.5 ? "white" : "black",
            }
          : { border: `2px solid ${color}`, color }),
        padding: "0.1em 0.4em",
        borderRadius: "var(--border-radius-small)",
        fontWeight: "bold",
        fontVariantNumeric: "tabular-nums",
      }}
      title={`Median Solve Percentage: ${(row.medianSolvePct * 100).toFixed(2)}%`}>
      {(row.medianSolvePct * 100).toFixed(2)}%
    </span>
  );
}

export function YearPaginator({
  year,
}: {
  readonly year: number;
}): JSX.Element {
  return (
    <nav className={styles.paginator}>
      {year === 2022 ? (
        <span className="phantom">← Previous year</span>
      ) : (
        <Link href={`/notes/naclo/${year - 1}/`}>← Previous year</Link>
      )}{" "}
      <Link href="/notes/naclo/">Back to NACLO index</Link>{" "}
      {year === 2025 ? (
        <span className="phantom">→ Next year</span>
      ) : (
        <Link href={`/notes/naclo/${year + 1}/`}>→ Next year</Link>
      )}
    </nav>
  );
}
