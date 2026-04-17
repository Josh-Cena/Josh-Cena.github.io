const candidates = new Set<string>();

for (let i = 0; i <= 0x10ffff; i++) {
  const char = String.fromCodePoint(i);
  if (
    char.toUpperCase() !== char ||
    char.toLowerCase() !== char ||
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    /^[\p{Uppercase_Letter}\p{Lowercase_Letter}\p{Uppercase}\p{Lowercase}]$/u.test(
      char,
    )
  )
    candidates.add(char);
}

console.log(candidates.size);

for (const char of [...candidates]) {
  let newChar = char.toUpperCase();
  let isUpper = true;
  while (!candidates.has(newChar)) {
    candidates.add(newChar);
    newChar = isUpper ? newChar.toLowerCase() : newChar.toUpperCase();
    isUpper = !isUpper;
  }

  newChar = char.toLowerCase();
  isUpper = false;
  while (!candidates.has(newChar)) {
    candidates.add(newChar);
    newChar = isUpper ? newChar.toLowerCase() : newChar.toUpperCase();
    isUpper = !isUpper;
  }
}

console.log(candidates.size);

for (const char of candidates) {
  if (!candidates.has(char.toUpperCase()))
    console.log(`Failed to satisfy closure under toUpperCase for ${char}`);
  if (!candidates.has(char.toLowerCase()))
    console.log(`Failed to satisfy closure under toLowerCase for ${char}`);
}

for (const char of candidates) {
  if (
    char.toUpperCase() === char &&
    char.toLowerCase() === char &&
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    !/^[\p{Uppercase_Letter}\p{Lowercase_Letter}\p{Uppercase}\p{Lowercase}]$/u.test(
      char,
    )
  )
    console.log(`Failed to satisfy closure under case conversion for ${char}`);
}

let c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 = 0;

for (const char of candidates) {
  const isLu = /^\p{Uppercase_Letter}$/u.test(char);
  const isLl = /^\p{Lowercase_Letter}$/u.test(char);
  const isUppercase = /^\p{Uppercase}$/u.test(char);
  const isLowercase = /^\p{Lowercase}$/u.test(char);
  if (isLu && !isUppercase)
    console.log(`Failed to satisfy Uppercase_Letter ⊆ Uppercase for ${char}`);
  if (isLl && !isLowercase)
    console.log(`Failed to satisfy Lowercase_Letter ⊆ Lowercase for ${char}`);
  if (isUppercase && isLowercase)
    console.log(`Failed to satisfy Uppercase ∩ Lowercase = ∅ for ${char}`);
  if (isLu) c1++;
  else if (isLl) c2++;
  else if (isUppercase) c3++;
  else if (isLowercase) c4++;
  else if ([...char].length === 1) c5++;
  else c6++;
}

console.log(c1, c2, c3, c4, c5, c6);

const lowersTo = new Map<string, Set<string>>();
const uppersTo = new Map<string, Set<string>>();

for (const s of candidates) {
  const lower = s.toLowerCase();
  const upper = s.toUpperCase();
  if (s !== lower)
    lowersTo.set(lower, (lowersTo.get(lower) ?? new Set()).add(s));
  if (s !== upper)
    uppersTo.set(upper, (uppersTo.get(upper) ?? new Set()).add(s));
}

function formatChar(char: string) {
  const points = [...char]
    .map(
      (c) =>
        `U+${c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`,
    )
    .join(" ");
  return `${char} (${points})`;
}

function charType(char: string) {
  if ([...char].length > 1) return "multi-code-point";
  if (/^\p{Uppercase_Letter}$/u.test(char)) return "uppercase letter";
  if (/^\p{Lowercase_Letter}$/u.test(char)) return "lowercase letter";
  if (/^\p{Uppercase}$/u.test(char)) return "uppercase non-letter";
  if (/^\p{Lowercase}$/u.test(char)) return "lowercase non-letter";
  return "uncased";
}

const isolated = [];

for (const char of candidates) {
  if (char.toUpperCase() === char && char.toLowerCase() === char) {
    if (lowersTo.has(char) || uppersTo.has(char))
      console.log(`Failed to satisfy isolation for ${char}`);
    isolated.push(char);
  }
}

const g1 = [],
  g2 = [],
  g3 = [],
  g4 = [];
for (const char of isolated) {
  const type = charType(char);
  if (type === "uppercase letter") g1.push(char);
  else if (type === "lowercase letter") g2.push(char);
  else if (type === "uppercase non-letter") g3.push(char);
  else if (type === "lowercase non-letter") g4.push(char);
  else console.log(`Bad category: ${char} (${type})`);
}

console.log(isolated.length, g1.length, g2.length, g3.length, g4.length);
// Console.table(g1.map(formatChar));
// console.table(g2.map(formatChar));
// console.table(g3.map(formatChar));
// console.table(g4.map(formatChar));

const pairs = [];

for (const upper of candidates) {
  if (upper.toUpperCase() !== upper) continue;
  const lower = upper.toLowerCase();
  if (lower.toUpperCase() !== upper || lower === upper) continue;
  pairs.push({ upper, lower });
}

console.log(pairs.length);
// Console.table(
//   pairs.map(({ upper, lower }) => ({
//     upper: formatChar(upper),
//     lower: formatChar(lower),
//   })),
// );

c1 = 0;
c2 = 0;
c3 = 0;
for (const { upper, lower } of pairs) {
  const upperType = charType(upper);
  const lowerType = charType(lower);
  if (upperType === "uppercase letter" && lowerType === "lowercase letter") {
    c1++;
  } else if (
    upperType === "uppercase non-letter" &&
    lowerType === "lowercase non-letter"
  ) {
    c2++;
  } else if (
    upperType === "multi-code-point" &&
    lowerType === "multi-code-point"
  ) {
    c3++;
  } else {
    console.log(
      `Bad pair: ${formatChar(upper)} (${upperType}) and ${formatChar(lower)} (${lowerType})`,
    );
  }
}
console.log(c1, c2, c3);

const isolatedSet = new Set(isolated);
const pairLookup = new Map(
  pairs.flatMap(({ upper, lower }) => [
    [upper, lower],
    [lower, upper],
  ]),
);

const rest = candidates.difference(isolatedSet).difference(pairLookup);
console.log(rest.size);

for (const char of rest) {
  if (lowersTo.has(char) || uppersTo.has(char)) continue;
  const nextNodes = (
    [
      ["-U->", char.toUpperCase()],
      ["-L->", char.toLowerCase()],
    ] satisfies [string, string][]
  ).filter((c) => c[1] !== char);
  if (nextNodes.length === 0)
    throw new Error(`Can't happen because ${char} is not isolated`);
  for (const [label, next] of nextNodes) {
    const path = [char, label, next];
    let current = next;
    while (!pairLookup.has(current)) {
      if (isolatedSet.has(current))
        throw new Error(`Can't happen because ${current} is isolated`);
      const nextNodes = (
        [
          ["-U->", current.toUpperCase()],
          ["-L->", current.toLowerCase()],
        ] satisfies [string, string][]
      ).filter((c) => c[1] !== current);
      if (nextNodes.length === 0)
        throw new Error(`Can't happen because ${current} is not isolated`);
      if (nextNodes.length > 1) {
        throw new Error(
          `Can't happen because ${current} shouldn't have multiple outgoing edges`,
        );
      }
      const [label, next] = nextNodes[0]!;
      path.push(label, next);
      current = next;
    }
    console.log(
      path
        .map((x, i) => {
          if (i === path.length - 1)
            return `${formatChar(x)} <--> ${formatChar(pairLookup.get(x)!)}`;
          else if (i % 2 === 0) return formatChar(x);
          return x;
        })
        .join(" "),
    );
  }
}

const toLowerCounts = {
  "lowercase letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "uppercase letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "lowercase non-letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "uppercase non-letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  uncased: {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "multi-code-point": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
};
const toUpperCounts = {
  "lowercase letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "uppercase letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "lowercase non-letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "uppercase non-letter": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  uncased: {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
  "multi-code-point": {
    id: [],
    "lowercase letter": [],
    "uppercase letter": [],
    "lowercase non-letter": [],
    "uppercase non-letter": [],
    uncased: [],
    "multi-code-point": [],
  },
};

for (const char of candidates) {
  const type = charType(char);
  const lower = char.toLowerCase();
  const upper = char.toUpperCase();
  if (lower === char) toLowerCounts[type].id.push(char);
  else toLowerCounts[type][charType(lower)].push(char);
  if (upper === char) toUpperCounts[type].id.push(char);
  else toUpperCounts[type][charType(upper)].push(char);
}

console.table(
  Object.fromEntries(
    Object.entries(toUpperCounts).map(([fromType, mapping]) => [
      fromType,
      Object.fromEntries(
        Object.entries(mapping).map(([toType, chars]) => [
          toType,
          chars.length,
        ]),
      ),
    ]),
  ),
);

console.table(
  Object.fromEntries(
    Object.entries(toLowerCounts).map(([fromType, mapping]) => [
      fromType,
      Object.fromEntries(
        Object.entries(mapping).map(([toType, chars]) => [
          toType,
          chars.length,
        ]),
      ),
    ]),
  ),
);

const bothVariant = [];
for (const char of candidates) {
  if (char.toUpperCase() !== char && char.toLowerCase() !== char)
    bothVariant.push(char);
}
console.table(bothVariant.map(formatChar));

const lowerToSingle = [];
const upperToSingle = [];

for (const char of candidates) {
  const normChar = char.normalize("NFC");
  if ([...normChar].length > 1) {
    const upper = char.toUpperCase().normalize("NFC");
    const lower = char.toLowerCase().normalize("NFC");
    if ([...upper].length === 1) upperToSingle.push({ char: normChar, upper });
    if ([...lower].length === 1) lowerToSingle.push({ char: normChar, lower });
  }
}

console.table(
  lowerToSingle.map(({ char, lower }) => ({
    char: formatChar(char),
    lower: formatChar(lower),
  })),
);

console.table(
  upperToSingle.map(({ char, upper }) => ({
    char: formatChar(char),
    upper: formatChar(upper),
  })),
);
