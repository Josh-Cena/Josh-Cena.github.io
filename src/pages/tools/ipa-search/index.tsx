import { useMemo, useState, useRef, useEffect, type ReactNode } from "react";
import useSWR from "swr";
import Link from "@/components/Link";
import IPAKeyboard from "./_IPAKeyboard";
import { fetchTextWithProgress } from "./fetcher";
import { filter, type Entry } from "./filter";
import styles from "./index.module.css";

const gistURL =
  "https://gist.githubusercontent.com/Josh-Cena/f834b677a6bc0d0fc594d91d26627e7d/raw/a61f41236d20c69148b2f089e6f5d7a5da946b66/CMU.in.IPA.txt";

function parseDatabase(text: string): Entry[] {
  return text
    .split(/\r?\n/u)
    .map((line) => {
      const [word, ipa] = line.split("\t");
      return word && ipa ? { word, ipa: ipa.split(" ") } : null;
    })
    .filter((x): x is Entry => x !== null);
}

export default function IpaSearch(): ReactNode {
  const [progress, setProgress] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  // Legacy localStorage caching
  useEffect(() => {
    localStorage.removeItem("cmu-ipa-db-v1");
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useSWR(
    typeof window === "undefined" ? null : gistURL,
    (url) => fetchTextWithProgress(url, setProgress),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      dedupingInterval: Infinity,
    },
  );

  const entries = useMemo(() => (data ? parseDatabase(data) : []), [data]);
  const filtered = useMemo(() => filter(query, entries), [query, entries]);
  const inputRef = useRef<HTMLInputElement>(null);

  if (error) {
    return (
      <p className={styles.error}>
        Failed to load database. {(error as Error).toString()}
      </p>
    );
  }

  if (isLoading || !data) {
    return (
      <>
        <p>loading database...</p>

        <div className={styles.progressOuter}>
          <div
            className={styles.progressInner}
            style={{
              width:
                progress === null ? "35%" : `${Math.round(progress * 100)}%`,
            }}
          />
        </div>

        <p className={styles.progressText}>
          {progress === null
            ? "Downloading..."
            : `${Math.round(progress * 100)}%`}
        </p>
      </>
    );
  }

  return (
    <>
      <h1>IPA Search</h1>

      <input
        ref={inputRef}
        className={styles.input}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setExpanded(false);
        }}
        placeholder="Filter by IPA..."
        autoComplete="off"
      />

      <IPAKeyboard
        // eslint-disable-next-line react/jsx-no-bind
        onInput={(text) => {
          const input = inputRef.current;

          if (!input) {
            setQuery((q) => q + text);
            return;
          }

          const start = input.selectionStart ?? query.length;
          const end = input.selectionEnd ?? query.length;

          const next = query.slice(0, start) + text + query.slice(end);

          setQuery(next);
          setExpanded(false);

          requestAnimationFrame(() => {
            input.focus();

            const cursor = start + text.length;
            input.setSelectionRange(cursor, cursor);
          });
        }}
      />
      <small>
        Also supports the following characters: <kbd>C</kbd> = consonant,{" "}
        <kbd>V</kbd> = vowel, <kbd>&#123;a,b,c&#125;</kbd> = /a/, /b/, or /c/,{" "}
        <kbd>.</kbd> = any sound
        <br />
        Example: <kbd>&#123;p,b,m&#125;Vʒ</kbd> = "p, b, or m, followed by a
        vowel, followed by ʒ"
      </small>

      {typeof filtered === "string" ? (
        <p className={styles.error}>Error in query: {filtered}</p>
      ) : (
        <>
          <p className={styles.count}>
            {filtered.length.toLocaleString("en-US")} matching items
          </p>

          <ul className={styles.results}>
            {(expanded ? filtered : filtered.slice(0, 100)).map((item) => (
              <li key={item.word} className={styles.row}>
                <span className={styles.word}>{item.word}</span>
                <span className={styles.ipa}>{item.ipa.join(" ")}</span>
              </li>
            ))}
          </ul>

          {!expanded && filtered.length > 100 && (
            <button
              type="button"
              className={styles.button}
              onClick={() => setExpanded(true)}>
              Show all {filtered.length.toLocaleString("en-US")} matches
            </button>
          )}
        </>
      )}

      <div>
        <small>
          Note: This database is based on the{" "}
          <Link href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict">
            CMU Pronouncing Dictionary
          </Link>
          , with transcriptions converted to IPA myself (
          <Link href="https://gist.github.com/Josh-Cena/f834b677a6bc0d0fc594d91d26627e7d">
            GitHub Gist
          </Link>
          ).
        </small>
      </div>
    </>
  );
}

IpaSearch.meta = {
  title: "IPA Search",
  description:
    "Search for English words by their IPA transcription (CMU dictionary based).",
};
