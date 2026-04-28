import { useEffect, useState, type ReactElement } from "react";
import Link from "@/components/Link";

function renderTextToPixels(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 100;

  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textBaseline = "top";
  ctx.fillText(text, 0, 0);

  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}

function pixelsEqual(a: Uint8ClampedArray, b: Uint8ClampedArray) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

// On Android, unsupported flags still renders as a flag (white with question
// mark). If so, then we need to compare pixels against a known "unknown" flag.
// Otherwise, unsupported flags render as two separate region indicator
// symbols, so just compare against the known "separate" rendering.
let flagForUnknown: Uint8ClampedArray | null | undefined = undefined;

function rendersAsFlag(text: string) {
  if (flagForUnknown === undefined) {
    const guaranteedUnknown = "🇿🇿";
    const unknownChars = [...guaranteedUnknown];
    const pixelsUnknown = renderTextToPixels(guaranteedUnknown);
    const separateUnknown = renderTextToPixels(
      `${unknownChars[0]!}\u200b${unknownChars[1]!}`,
    );
    flagForUnknown = pixelsEqual(pixelsUnknown, separateUnknown)
      ? null
      : pixelsUnknown;
  }
  const chars = [...text];
  return !pixelsEqual(
    renderTextToPixels(text),
    flagForUnknown ?? renderTextToPixels(`${chars[0]!}\u200b${chars[1]!}`),
  );
}

const regionNames = new Intl.DisplayNames(["en-US"], {
  type: "region",
  fallback: "none",
});
const nameToCodes: { [name: string]: string[] } = {};
for (let i = 0; i < 26; i++) {
  for (let j = 0; j < 26; j++) {
    const code = `${String.fromCodePoint(65 + i)}${String.fromCodePoint(65 + j)}`;
    const name = regionNames.of(code);
    if (name !== undefined) {
      nameToCodes[name] ??= [];
      nameToCodes[name].push(code);
    }
  }
}

export default function Flags(): ReactElement {
  const [onlySupported, setOnlySupported] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [allFlags, setAllFlags] = useState(() =>
    Object.fromEntries(
      Array.from({ length: 26 }, (_, i) => [
        String.fromCodePoint(65 + i),
        Object.fromEntries(
          Array.from({ length: 26 }, (_, j) => [
            String.fromCodePoint(65 + j),
            {
              flag: `${String.fromCodePoint(0x1f1e6 + i)}${String.fromCodePoint(0x1f1e6 + j)}`,
              name: regionNames.of(
                String.fromCodePoint(65 + i) + String.fromCodePoint(65 + j),
              ),
              // Start by marking all flags as supported on server side
              flagRendered: true,
            },
          ]),
        ),
      ]),
    ),
  );
  useEffect(() => {
    setIsClient(true);
    const newAllFlags = { ...allFlags };
    for (const [c1, row] of Object.entries(allFlags)) {
      const newRow = { ...row };
      for (const [c2, { flag }] of Object.entries(row))
        newRow[c2]!.flagRendered = rendersAsFlag(flag);
      newAllFlags[c1] = newRow;
    }
    setAllFlags(newAllFlags);
    setOnlySupported(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [mode, setMode] = useState<"wide" | "long">("long");
  return (
    <>
      <h1>Emoji flags</h1>
      <p>
        Your system supports{" "}
        {isClient
          ? Object.values(allFlags).flatMap((r) =>
              Object.values(r).filter((c) => c.flagRendered),
            ).length
          : "[Calculating...]"}{" "}
        emoji flags (defined as "doesn't just render two separate region
        indicator symbols").
      </p>
      <label htmlFor="supported-only">
        Only show supported flags{" "}
        <input
          type="checkbox"
          id="supported-only"
          checked={onlySupported}
          onChange={(e) => setOnlySupported(e.target.checked)}
        />
      </label>
      <label>
        Display mode{" "}
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as "wide" | "long")}>
          <option value="wide">Wide table</option>
          <option value="long">Long table</option>
        </select>
      </label>
      <table>
        {mode === "wide" && (
          <thead>
            <tr>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <td />
              {Object.keys(allFlags).map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {mode === "wide"
            ? Object.keys(allFlags).map((c) => (
                <tr key={c}>
                  <th>{c}</th>
                  {Object.entries(allFlags[c]!).map(([c2, flagData]) => (
                    <td key={c2} className="no-br">
                      {(!onlySupported || flagData.flagRendered) && (
                        <>
                          {flagData.flag}{" "}
                          <small suppressHydrationWarning>
                            {flagData.name ?? "Unknown"}
                          </small>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : Object.entries(allFlags).flatMap(([c1, row]) => {
                const firstSupported = Object.entries(row).find(
                  ([, flagData]) => flagData.flagRendered,
                )?.[0];
                return Object.entries(row).map(
                  ([c2, flagData]) =>
                    (!onlySupported || flagData.flagRendered) && (
                      <tr key={`${c1}${c2}`}>
                        {(onlySupported
                          ? c2 === firstSupported
                          : c2 === "A") && (
                          <th
                            rowSpan={
                              onlySupported
                                ? Object.values(row).filter(
                                    (c) => c.flagRendered,
                                  ).length
                                : 26
                            }>
                            {c1}
                          </th>
                        )}
                        <th>{c2}</th>
                        <td className="no-br">
                          {flagData.flag}{" "}
                          <small suppressHydrationWarning>
                            {flagData.name ?? "Unknown"}
                          </small>
                        </td>
                      </tr>
                    ),
                );
              })}
        </tbody>
      </table>
      <p>
        The following region codes have names given by{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames">
          Intl.DisplayNames
        </Link>{" "}
        but do not have emoji flags; most of them are legacy aliases of other
        region codes:
      </p>
      <ul>
        {Object.entries(allFlags).flatMap(([c1, row]) =>
          Object.entries(row)
            .filter(
              ([, flagData]) =>
                !flagData.flagRendered && flagData.name !== undefined,
            )
            .map(([c2, flagData]) => {
              const canonical = nameToCodes[flagData.name!]!.map(
                (code) => [code, allFlags[code[0]!]![code[1]!]!] as const,
              ).find((c) => c[1].flagRendered);
              return (
                <li key={`${c1}${c2}`}>
                  {c1}
                  {c2} ({flagData.name})
                  {canonical && (
                    <>
                      {" → "}
                      {canonical[0]} {canonical[1].flag}
                    </>
                  )}
                </li>
              );
            }),
        )}
      </ul>
    </>
  );
}

Flags.meta = {
  title: "Emoji flags",
  description:
    "Table containing all Unicode emoji flags, as they would be rendered on your system.",
};
