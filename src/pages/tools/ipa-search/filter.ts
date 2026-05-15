import { CONSONANT_KEYS, VOWEL_KEYS } from "./_IPAKeyboard";

export type Entry = { word: string; ipa: string[] };

const CONSONANT_SOUNDS = new Set(CONSONANT_KEYS.map((k) => k.symbol));
const VOWEL_SOUNDS = new Set(VOWEL_KEYS.map((k) => k.symbol));
const IPA_SOUNDS = [...CONSONANT_SOUNDS, ...VOWEL_SOUNDS].sort(
  (a, b) => b.length - a.length,
);

type IpaMatcher =
  | { kind: "any" }
  | { kind: "class"; values: Set<string> }
  | { kind: "literal"; value: string };

function compileIpaQuery(queryText: string): IpaMatcher[] | string {
  const query = queryText.trim();
  const matchers: IpaMatcher[] = [];

  let i = 0;

  while (i < query.length) {
    const char = query[i]!;

    if (/\s/u.test(char)) {
      i += 1;
      continue;
    }

    if (char === ".") {
      matchers.push({ kind: "any" });
      i += 1;
      continue;
    }

    if (char === "C") {
      matchers.push({ kind: "class", values: CONSONANT_SOUNDS });
      i += 1;
      continue;
    }

    if (char === "V") {
      matchers.push({ kind: "class", values: VOWEL_SOUNDS });
      i += 1;
      continue;
    }

    if (char === "{") {
      const end = query.indexOf("}", i + 1);
      if (end === -1) return "Unmatched { in query";
      const values = new Set(
        query
          .slice(i + 1, end)
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean),
      );
      if ([...values].some((v) => !IPA_SOUNDS.includes(v))) {
        return `Invalid sound in class: ${[...values]
          .filter((v) => !IPA_SOUNDS.includes(v))
          .join(", ")}`;
      }

      matchers.push({ kind: "class", values });

      i = end + 1;
      continue;
    }

    const sound = IPA_SOUNDS.find((s) => query.startsWith(s, i));
    if (!sound) return `Invalid token at position ${i + 1}: "${char}"`;
    matchers.push({ kind: "literal", value: sound });
    i += sound.length;
  }

  return matchers;
}

function matcherAccepts(matcher: IpaMatcher, sound: string): boolean {
  switch (matcher.kind) {
    case "any":
      return true;
    case "class":
      return matcher.values.has(sound);
    case "literal":
      return matcher.value === sound;
  }
  throw new Error("Unexpected");
}

function containsContiguousMatch(
  ipa: string[],
  matchers: IpaMatcher[],
): boolean {
  if (matchers.length === 0) return true;
  if (matchers.length > ipa.length) return false;

  for (let start = 0; start <= ipa.length - matchers.length; start += 1) {
    let matched = true;

    for (let offset = 0; offset < matchers.length; offset += 1) {
      if (!matcherAccepts(matchers[offset]!, ipa[start + offset]!)) {
        matched = false;
        break;
      }
    }

    if (matched) return true;
  }

  return false;
}

export function filter(queryText: string, items: Entry[]): Entry[] | string {
  const matchers = compileIpaQuery(queryText);
  if (typeof matchers === "string") return matchers;
  return items.filter((item) => containsContiguousMatch(item.ipa, matchers));
}
