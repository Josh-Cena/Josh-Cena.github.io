import type { ReactNode } from "react";
import styles from "./_IPAKeyboard.module.css";

type IpaKeySpec = {
  symbol: string;
  row: number;
  col: number;
  side?: "left" | "right" | "center";
};

export const CONSONANT_KEYS: IpaKeySpec[] = [
  { symbol: "p", row: 0, col: 0 },
  { symbol: "b", row: 0, col: 0 },
  { symbol: "t", row: 0, col: 2 },
  { symbol: "d", row: 0, col: 2 },
  { symbol: "k", row: 0, col: 4 },
  { symbol: "ɡ", row: 0, col: 4 },

  { symbol: "m", row: 1, col: 0 },
  { symbol: "n", row: 1, col: 2 },
  { symbol: "ŋ", row: 1, col: 4 },

  { symbol: "f", row: 2, col: 0 },
  { symbol: "v", row: 2, col: 0 },
  { symbol: "θ", row: 2, col: 1 },
  { symbol: "ð", row: 2, col: 1 },
  { symbol: "s", row: 2, col: 2 },
  { symbol: "z", row: 2, col: 2 },
  { symbol: "ʃ", row: 2, col: 3 },
  { symbol: "ʒ", row: 2, col: 3 },
  { symbol: "h", row: 2, col: 4 },

  { symbol: "r", row: 3, col: 2 },
  { symbol: "j", row: 3, col: 4 },
  { symbol: "w", row: 3, col: 0 },

  { symbol: "l", row: 3, col: 2 },
];

export const VOWEL_KEYS: IpaKeySpec[] = [
  { symbol: "i", row: 0, col: 0 },
  { symbol: "ɪ", row: 0, col: 0 },
  { symbol: "u", row: 0, col: 2 },
  { symbol: "ʊ", row: 0, col: 2 },

  { symbol: "eɪ", row: 1, col: 0 },
  { symbol: "aɪ", row: 1, col: 0 },
  { symbol: "ɔɪ", row: 1, col: 1 },
  { symbol: "oʊ", row: 1, col: 2 },
  { symbol: "aʊ", row: 1, col: 2 },

  { symbol: "ɛ", row: 2, col: 0 },
  { symbol: "ɚ", row: 2, col: 1 },
  { symbol: "ə", row: 2, col: 1 },
  { symbol: "ʌ", row: 2, col: 2 },
  { symbol: "ɔ", row: 2, col: 2 },

  { symbol: "æ", row: 3, col: 0 },
  { symbol: "ɑ", row: 3, col: 2 },
];

const CONSONANT_ROWS = ["Plosive", "Nasal", "Fricative", "Approximant"];
const CONSONANT_COLUMNS = [
  "Bilabial/Labiodental",
  "Dental",
  "Alveolar",
  "Postalveolar",
  "Palatal/Velar/Glottal",
];

const VOWEL_ROWS = ["Close", "Close-mid", "Open-mid", "Open"];
const VOWEL_COLUMNS = ["Front", "Central", "Back"];

export default function IPAKeyboard({
  onInput,
}: {
  readonly onInput: (text: string) => void;
}): ReactNode {
  const renderKey = ({ symbol }: IpaKeySpec) => (
    <button
      key={symbol}
      type="button"
      className={styles.ipaKey}
      onClick={() => onInput(symbol)}>
      {symbol}
    </button>
  );

  const consonantsAt = (row: number, col: number) =>
    CONSONANT_KEYS.filter((key) => key.row === row && key.col === col);

  const vowelsAt = (row: number, col: number) =>
    VOWEL_KEYS.filter((key) => key.row === row && key.col === col);

  return (
    <div className={styles.ipaKeyboard}>
      <div className={styles.consonantChart}>
        {CONSONANT_ROWS.map((row, rowIndex) =>
          CONSONANT_COLUMNS.map((column, colIndex) => (
            <div key={`${row}-${column}`} className={styles.chartCell}>
              {consonantsAt(rowIndex, colIndex).map(renderKey)}
            </div>
          )),
        )}
      </div>
      <div className={styles.vowelChart}>
        {VOWEL_ROWS.map((row, rowIndex) =>
          VOWEL_COLUMNS.map((column, colIndex) => (
            <div key={`${row}-${column}`} className={styles.chartCell}>
              {vowelsAt(rowIndex, colIndex).map(renderKey)}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
