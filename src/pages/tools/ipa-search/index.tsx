import { useMemo, useState, type ReactNode } from "react";
import useSWR from "swr";
import Link from "@/components/Link";
import IPAKeyboard from "./_IPAKeyboard";
import { filter, type Entry } from "./filter";
import styles from "./index.module.css";

const URL =
  "https://gist.githubusercontent.com/Josh-Cena/f834b677a6bc0d0fc594d91d26627e7d/raw/a61f41236d20c69148b2f089e6f5d7a5da946b66/CMU.in.IPA.txt";

const CACHE_KEY = "cmu-ipa-db-v1";

function parseDatabase(text: string): Entry[] {
  return text
    .split(/\r?\n/u)
    .map((line) => {
      const [word, ipa] = line.split("\t");
      return word && ipa ? { word, ipa: ipa.split(" ") } : null;
    })
    .filter((x): x is Entry => x !== null);
}

async function fetchTextWithProgress(
  url: string,
  onProgress: (progress: number | null) => void,
): Promise<string> {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    onProgress(1);
    return cached;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch database: ${res.status}`);

  const total = Number(res.headers.get("Content-Length"));
  const reader = res.body?.getReader();

  if (!reader) {
    const text = await res.text();
    localStorage.setItem(CACHE_KEY, text);
    onProgress(1);
    return text;
  }

  const chunks: Uint8Array[] = [];
  let received = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    received += value.length;

    onProgress(total ? received / total : null);
  }

  const text = new TextDecoder().decode(
    new Uint8Array(chunks.flatMap((chunk) => Array.from(chunk))),
  );

  localStorage.setItem(CACHE_KEY, text);
  onProgress(1);

  return text;
}

export default function IpaSearch(): ReactNode {
  const [progress, setProgress] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useSWR(
    URL,
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
        onInput={(text) => {
          setQuery((q) => q + text);
          setExpanded(false);
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
