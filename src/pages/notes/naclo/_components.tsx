import type { ReactNode } from "react";
import chroma from "chroma-js";
import Link from "@/components/Link";
import { tableByProb } from "./_data";
import styles from "./_components.module.css";

const scale = chroma.scale(["#ca393e", "#3eca39"]).domain([0, 1]);

export function Difficulty({
  prob,
  alwaysSolid,
}: {
  readonly prob: string;
  readonly alwaysSolid?: boolean;
}): ReactNode {
  const row = tableByProb.get(prob);
  if (!row || Number.isNaN(row.medianSolvePct)) return "N/A";
  const color = scale(row.medianSolvePct).hex();
  return (
    <span
      style={{
        ...(row.isOpen || alwaysSolid
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

function maxProb(year: number): string {
  let max = "A";
  for (const prob of tableByProb.keys()) {
    const match = /^(?<year>\d{4})(?<prob>[A-Z])$/u.exec(prob);
    if (match?.groups?.year === year.toString())
      if (match.groups.prob! > max) max = match.groups.prob!;
  }
  return max;
}

export type MDFrontMatter = {
  readonly title: string;
  readonly tags: readonly string[];
  readonly year: number;
  readonly prob: string;
};

function ProblemPaginator({
  frontMatter,
}: {
  readonly frontMatter: MDFrontMatter;
}): ReactNode {
  const curProbCode = frontMatter.prob.charCodeAt(0);
  return (
    <nav className={styles.paginator}>
      {frontMatter.prob === "A" ? (
        <span className="phantom">← Previous</span>
      ) : (
        <Link
          href={`/notes/naclo/${frontMatter.year}/${String.fromCharCode(curProbCode - 1)}/`.toLowerCase()}>
          ← Previous
        </Link>
      )}{" "}
      <Link href={`/notes/naclo/${frontMatter.year}/`}>Back to year index</Link>{" "}
      {frontMatter.prob === maxProb(frontMatter.year) ? (
        <span className="phantom">→ Next</span>
      ) : (
        <Link
          href={`/notes/naclo/${frontMatter.year}/${String.fromCharCode(curProbCode + 1)}/`.toLowerCase()}>
          Next →
        </Link>
      )}
    </nav>
  );
}

export function ProblemHeader({
  frontMatter,
}: {
  readonly frontMatter: MDFrontMatter;
}): ReactNode {
  const probStatementLink =
    frontMatter.year === 2024
      ? `https://naclo.org/resources/problems/2024/NACLO2024ROUND${frontMatter.prob <= "H" ? "1" : "2"}_booklet.pdf`
      : `https://naclo.org/resources/problems/${frontMatter.year}/N${frontMatter.year}-${frontMatter.prob}.pdf`;
  const officialSolutionLink =
    frontMatter.year === 2024
      ? `https://naclo.org/resources/problems/2024/NACLO2024ROUND${frontMatter.prob <= "H" ? "1" : "2"}SOL.pdf`
      : `https://naclo.org/resources/problems/${frontMatter.year}/N${frontMatter.year}-${frontMatter.prob}S.pdf`;
  const row = tableByProb.get(`${frontMatter.year}${frontMatter.prob}`);
  return (
    <>
      <p>
        {row?.isOpen ? "Open round" : "Invitational round"} | {row?.max} points
        |{" "}
        <Difficulty
          prob={`${frontMatter.year}${frontMatter.prob}`}
          alwaysSolid
        />{" "}
        | <Link href={probStatementLink}>Problem statement</Link> |{" "}
        <Link href={officialSolutionLink}>Official solution</Link> | Tags:{" "}
        {frontMatter.tags.map((t) => (
          <span className={styles.tag} key={t}>
            {t}
          </span>
        ))}
      </p>
      <ProblemPaginator frontMatter={frontMatter} />
    </>
  );
}

export function ProblemFooter({
  frontMatter,
}: {
  readonly frontMatter: MDFrontMatter;
}): ReactNode {
  return <ProblemPaginator frontMatter={frontMatter} />;
}

function YearPaginator({ year }: { readonly year: number }): ReactNode {
  return (
    <nav className={styles.paginator}>
      {year === 2022 ? (
        <span className="phantom">← Previous year</span>
      ) : (
        <Link href={`/notes/naclo/${year - 1}/`}>← Previous year</Link>
      )}{" "}
      <Link href="/notes/naclo/">Back to NACLO index</Link>{" "}
      {year === 2026 ? (
        <span className="phantom">→ Next year</span>
      ) : (
        <Link href={`/notes/naclo/${year + 1}/`}>→ Next year</Link>
      )}
    </nav>
  );
}

function YearIndex({ year }: { readonly year: number }): ReactNode {
  const base = "A".charCodeAt(0);
  return (
    <nav>
      <ul className={styles.yearIndex}>
        {Array.from(
          { length: maxProb(year).charCodeAt(0) - base + 1 },
          (_, i) => i,
        ).map((prob) => (
          <li key={prob}>
            <Link
              href={`/notes/naclo/${year}/${String.fromCharCode(base + prob)}/`.toLowerCase()}>
              {String.fromCharCode(base + prob)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function YearHeader({ year }: { readonly year: number }): ReactNode {
  return (
    <>
      <p>
        Problem statements:{" "}
        <Link
          href={`https://naclo.org/resources/problems/${year}/NACLO${year}ROUND1.pdf`}>
          Round 1
        </Link>
        ,{" "}
        <Link
          href={`https://naclo.org/resources/problems/${year}/NACLO${year}ROUND2.pdf`}>
          Round 2
        </Link>{" "}
        | Official solutions:{" "}
        <Link
          href={`https://naclo.org/resources/problems/${year}/NACLO${year}ROUND1SOL.pdf`}>
          Round 1
        </Link>
        ,{" "}
        <Link
          href={`https://naclo.org/resources/problems/${year}/NACLO${year}ROUND2SOL.pdf`}>
          Round 2
        </Link>
      </p>
      <YearPaginator year={year} />
      <YearIndex year={year} />
    </>
  );
}

export function CoachingYearPaginator({
  year,
}: {
  readonly year: number;
}): ReactNode {
  return (
    <nav className={styles.paginator}>
      {year === 2022 ? (
        <span className="phantom">← Previous year</span>
      ) : (
        <Link href={`/notes/yale/naclo/${year - 1}/`}>← Previous year</Link>
      )}{" "}
      <Link href="/notes/yale/naclo/">Back to NACLO index</Link>{" "}
      {year === 2025 ? (
        <span className="phantom">→ Next year</span>
      ) : (
        <Link href={`/notes/yale/naclo/${year + 1}/`}>→ Next year</Link>
      )}
    </nav>
  );
}
