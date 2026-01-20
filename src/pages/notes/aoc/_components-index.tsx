import Link from "@/components/Link";
import { type MDFrontMatter, source } from "./_components";
import styles from "./_components.module.css";

// This has to be split out because the individual pages cannot depend on
// this glob call, or a circular dependency occurs.
const pages = import.meta.glob<true, string, MDFrontMatter>("./*/[0-9]*.mdx", {
  eager: true,
  import: "frontMatter",
});

const data = Object.entries(pages).map(([path, frontMatter]) => {
  const match = /\/(?<year>\d{4})\/(?<day>\d{1,2})\.mdx$/u.exec(path)!.groups!;
  const year = Number(match.year);
  const day = Number(match.day);
  return {
    year,
    day,
    title: frontMatter.title.split(": ")[1],
    frontMatter,
  };
});

export function Table(): JSX.Element {
  const allTags: { [tag: string]: [number, number][] } = {};
  data.forEach(({ year, day, frontMatter }) => {
    frontMatter.tags.forEach((t) => {
      (allTags[t] ??= []).push([year, day]);
    });
  });
  return (
    <div>
      <div>
        {Object.entries(allTags)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([t, probs]) => (
            <span key={t} className={styles.tag}>
              {t} ({probs.length})
            </span>
          ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Day</th>
            <th>Title</th>
            <th>Links</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "smaller" }}>
          {data
            .sort((a, b) =>
              a.year !== b.year ? b.year - a.year : a.day - b.day,
            )
            .map(({ year, day, title, frontMatter }) => {
              const sourceLink =
                source[year]!.replace("$n", day.toString()) || "#";
              return (
                <tr key={`${year}-${day}`}>
                  <td>{year}</td>
                  <td>{day}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{title}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <Link href={`https://adventofcode.com/${year}/day/${day}`}>
                      Prob
                    </Link>
                    {" | "}
                    <Link href={sourceLink}>Src</Link>
                    {" | "}
                    <Link href={`/notes/aoc/${year}/${day}/`}>Notes</Link>
                  </td>
                  <td>
                    {frontMatter.tags.map((t) => (
                      <span className={styles.tag} key={t}>
                        {t}
                      </span>
                    ))}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
