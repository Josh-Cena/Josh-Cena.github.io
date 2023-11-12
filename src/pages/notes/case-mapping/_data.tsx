export function toLowerCase(char: string): string;
export function toLowerCase(char: Iterable<string>): Set<string>;
export function toLowerCase(
  char: string | Iterable<string>,
): string | Set<string> {
  if (typeof char === "string") return char.toLowerCase().normalize("NFC");
  return new Set(Iterator.from(char).map(toLowerCase));
}

export function toUpperCase(char: string): string;
export function toUpperCase(char: Iterable<string>): Set<string>;
export function toUpperCase(
  char: string | Iterable<string>,
): string | Set<string> {
  if (typeof char === "string") return char.toUpperCase().normalize("NFC");
  return new Set(Iterator.from(char).map(toUpperCase));
}

export function isChar(char: string): boolean {
  return [...char].length === 1;
}

export function isUpperCase(char: string): boolean {
  return /\p{Uppercase_Letter}/u.test(char);
}

export function isLowerCase(char: string): boolean {
  return /\p{Lowercase_Letter}/u.test(char);
}

export const UC = new Set<string>();
export const U = new Set<string>();
export const L = new Set<string>();
export const Uext = new Set<string>();
export const Lext = new Set<string>();
export const ML = new Set<string>();
export const MU = new Set<string>();
export const ML_ = new Set<string>();
export const MU_ = new Set<string>();
export const NL = new Set<string>();
export const NU = new Set<string>();
export const NL_ = new Set<string>();
export const NU_ = new Set<string>();

export function isI(c: string): boolean {
  return toUpperCase(c) === c && toLowerCase(c) === c;
}

for (let c = 0; c < 0x10ffff; c++) {
  const char = String.fromCodePoint(c).normalize("NFC");
  if (isUpperCase(char)) Uext.add(char);
  if (isLowerCase(char)) Lext.add(char);
  if (!isChar(char) || isI(char)) continue;
  UC.add(char);
  const upper = toUpperCase(char);
  const lower = toLowerCase(char);
  if (isI(upper))
    console.error(`Invariant broken: toUpperCase(${char}) = ${upper} ∈ I`);
  else if (isI(lower))
    console.error(`Invariant broken: toLowerCase(${char}) = ${lower} ∈ I`);
  if (!isChar(upper)) {
    if (isChar(toLowerCase(upper))) {
      ML.add(char);
      ML_.add(upper);
    } else {
      NL.add(char);
      NL_.add(upper);
    }
  }
  if (!isChar(lower)) {
    if (isChar(toUpperCase(lower))) {
      MU.add(char);
      MU_.add(lower);
    } else {
      NU.add(char);
      NU_.add(lower);
    }
  }
  if (isUpperCase(char)) U.add(char);
  if (isLowerCase(char)) L.add(char);
}

export const GrU = new Set(NL.values().filter((c) => toLowerCase(c) !== c));

export const RU = toUpperCase(UC);
export const RL = toLowerCase(UC);
