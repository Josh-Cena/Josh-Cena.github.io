import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";var n=e();function r(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,sup:`sup`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Unicode case mapping study`}),`
`,(0,n.jsx)(r.p,{children:`This page primarily concerns the following concepts:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Single code point character`}),`: Any grapheme that is a single Unicode code point. This includes astral characters, but excludes grapheme clusters, including certain accented characters.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Upper-/lowercase mapping`}),`: The default case conversion algorithm implemented in JavaScript by the `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase`,children:(0,n.jsx)(r.code,{children:`toUpperCase`})}),` and `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase`,children:(0,n.jsx)(r.code,{children:`toLowerCase`})}),` methods. (See `,(0,n.jsx)(r.a,{href:`https://unicode.org/Public/UCD/latest/ucd/UnicodeData.txt`,children:`UnicodeData.txt`}),`.) Importantly, this is not the same as `,(0,n.jsx)(r.em,{children:`case folding`}),` (used in JavaScript by `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase`,children:`Unicode-aware case-insensitive matching`}),`), which is a canonicalization process. It is also not locale-sensitive, as provided by the `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase`,children:(0,n.jsx)(r.code,{children:`toLocaleUpperCase`})}),` and `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase`,children:(0,n.jsx)(r.code,{children:`toLocaleLowerCase`})}),` methods.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Upper-/lowercase letter`}),`: Any character that has the Unicode `,(0,n.jsx)(r.code,{children:`Uppercase_Letter`}),` (Lu) or `,(0,n.jsx)(r.code,{children:`Lowercase_Letter`}),` (Ll) general category, respectively.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Upper-/lowercase symbol`}),`: Any character that has the Unicode `,(0,n.jsx)(r.code,{children:`Uppercase`}),` or `,(0,n.jsx)(r.code,{children:`Lowercase`}),` property, respectively.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`There's no great way to list all existing Unicode code points in JavaScript. However, most of these code points, even if they exist, are things like `,(0,n.jsx)(r.code,{children:`&`}),` which are (1) not letters, (2) not cased, (3) invariant under case conversion, and therefore not relevant to this discussion. The non-existent code points also check all these boxes are therefore thrown out. So, we can simply list all the code points and check if they are either cased or case-variant. We call these code points "interesting".`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const candidates = new Set();

for (let i = 0; i <= 0x10ffff; i++) {
  const char = String.fromCodePoint(i);
  if (
    char.toUpperCase() !== char ||
    char.toLowerCase() !== char ||
    /^[\\p{Uppercase_Letter}\\p{Lowercase_Letter}\\p{Uppercase}\\p{Lowercase}]$/u.test(
      char,
    )
  )
    candidates.add(char);
}

console.log(candidates.size);
`})}),`
`,(0,n.jsx)(r.p,{children:`At the time of writing (Unicode v17), there are 4632 such interesting code points.`}),`
`,(0,n.jsxs)(r.p,{children:[`But that's not the end of the story. Some single code point characters map to multiple code points under case conversion, which then can be further case-converted, and so on. (We'll see more closely later.) So, we also need to include all the code points that are reachable from these 4632 code points by applying `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` repeatedly until we reach a fixed point.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`for (const char of [...candidates]) {
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
`})}),`
`,(0,n.jsx)(r.p,{children:`This brings us to a total of 4778 strings. To confirm that this set is closed under case conversion:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`for (const char of candidates) {
  if (!candidates.has(char.toUpperCase()))
    console.log(\`Failed to satisfy closure under toUpperCase for \${char}\`);
  if (!candidates.has(char.toLowerCase()))
    console.log(\`Failed to satisfy closure under toLowerCase for \${char}\`);
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`By definition "uninteresting" characters cannot change `,(0,n.jsx)(r.em,{children:`into`}),` interesting characters because they are invariant. Can we have an interesting character that changes `,(0,n.jsx)(r.em,{children:`into`}),` an uninteresting character? We check if all of `,(0,n.jsx)(r.code,{children:`candidates`}),` are still interesting.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`for (const char of candidates) {
  if (
    char.toUpperCase() === char &&
    char.toLowerCase() === char &&
    !/^[\\p{Uppercase_Letter}\\p{Lowercase_Letter}\\p{Uppercase}\\p{Lowercase}]$/u.test(
      char,
    )
  )
    console.log(\`Failed to satisfy closure under case conversion for \${char}\`);
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[`So the `,(0,n.jsx)(r.code,{children:`candidates`}),` set remains fully interesting; the only difference is that we have added some multi-code point strings that are reachable from interesting code points by case conversion.`]}),`
`,(0,n.jsx)(r.h2,{children:`Relationship between Uppercase_Letter/Lowercase_Letter and Uppercase/Lowercase`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`Uppercase_Letter`}),` and `,(0,n.jsx)(r.code,{children:`Lowercase_Letter`}),` general categories are supposedly subsets of the `,(0,n.jsx)(r.code,{children:`Uppercase`}),` and `,(0,n.jsx)(r.code,{children:`Lowercase`}),` properties, respectively. Furthermore a character cannot be simultaneously uppercase and lowercase. We shall verify this:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`let c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 = 0;

for (const char of candidates) {
  const isLu = /^\\p{Uppercase_Letter}$/u.test(char);
  const isLl = /^\\p{Lowercase_Letter}$/u.test(char);
  const isUppercase = /^\\p{Uppercase}$/u.test(char);
  const isLowercase = /^\\p{Lowercase}$/u.test(char);
  if (isLu && !isUppercase)
    console.log(\`Failed to satisfy Uppercase_Letter ⊆ Uppercase for \${char}\`);
  if (isLl && !isLowercase)
    console.log(\`Failed to satisfy Lowercase_Letter ⊆ Lowercase for \${char}\`);
  if (isUppercase && isLowercase)
    console.log(\`Failed to satisfy Uppercase ∩ Lowercase = ∅ for \${char}\`);
  if (isLu) c1++;
  else if (isLl) c2++;
  else if (isUppercase) c3++;
  else if (isLowercase) c4++;
  else if ([...char].length === 1) c5++;
  else c6++;
}

console.log(c1, c2, c3, c4, c5, c6);
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Indeed this is true. Other than the 4778－4632=146 multi-code point strings, the remaining ones may have a maximum of 2`,(0,n.jsx)(r.sup,{children:`4`}),`=16 combinations of these 4 boolean properties, but since `,(0,n.jsx)(r.code,{children:`Uppercase_Letter`}),` implies `,(0,n.jsx)(r.code,{children:`Uppercase`}),`, `,(0,n.jsx)(r.code,{children:`Lowercase_Letter`}),` implies `,(0,n.jsx)(r.code,{children:`Lowercase`}),`, `,(0,n.jsx)(r.code,{children:`Uppercase`}),` implies not `,(0,n.jsx)(r.code,{children:`Lowercase`}),` and vice versa, we are left with only 5 valid combinations:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Uppercase_Letter`}),(0,n.jsx)(r.th,{children:`Lowercase_Letter`}),(0,n.jsx)(r.th,{children:`Uppercase`}),(0,n.jsx)(r.th,{children:`Lowercase`}),(0,n.jsx)(r.th,{children:`Category`}),(0,n.jsx)(r.th,{children:`Count`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`Uppercase letter`}),(0,n.jsx)(r.td,{children:`1858`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`Lowercase letter`}),(0,n.jsx)(r.td,{children:`2258`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`Uppercase non-letter`}),(0,n.jsx)(r.td,{children:`120`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`Lowercase non-letter`}),(0,n.jsx)(r.td,{children:`311`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`0`}),(0,n.jsx)(r.td,{children:`Uncased`}),(0,n.jsx)(r.td,{children:`31`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Mapping graph`}),`
`,(0,n.jsxs)(r.p,{children:[`Here's the data structure we are going to be working with: a `,(0,n.jsx)(r.em,{children:`mapping graph`}),`. The node set is the `,(0,n.jsx)(r.code,{children:`candidates`}),` set. Each node has exactly two outgoing edges, one labeled `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and the other labeled `,(0,n.jsx)(r.code,{children:`toLowerCase`}),`, which point to the nodes corresponding to the result of applying the respective case conversion method to the node. Edges can be self-referential, and there can be any number of incoming edges.`]}),`
`,(0,n.jsx)(r.p,{children:`Nodes in this graph can be classified into the following categories:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Multi-code-point`}),`
`,(0,n.jsx)(r.li,{children:`Uppercase letter`}),`
`,(0,n.jsx)(r.li,{children:`Uppercase non-letter`}),`
`,(0,n.jsx)(r.li,{children:`Lowercase letter`}),`
`,(0,n.jsx)(r.li,{children:`Lowercase non-letter`}),`
`,(0,n.jsx)(r.li,{children:`Uncased`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`It's apparent that this graph isn't going to be very connected: it's going to have many isolated components. We identify these components by their shapes.`}),`
`,(0,n.jsx)(r.p,{children:`To begin with, we build a reverse graph for easy lookup:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const lowersTo = new Map();
const uppersTo = new Map();

for (const s of candidates) {
  const lower = s.toLowerCase();
  const upper = s.toUpperCase();
  if (s !== lower)
    lowersTo.set(lower, (lowersTo.get(lower) ?? new Set()).add(s));
  if (s !== upper)
    uppersTo.set(upper, (uppersTo.get(upper) ?? new Set()).add(s));
}

function formatChar(char) {
  const points = [...char]
    .map(
      (c) =>
        \`U+\${c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}\`,
    )
    .join(" ");
  return \`\${char} (\${points})\`;
}

function charType(char) {
  if ([...char].length > 1) return "multi-code-point";
  if (/^\\p{Uppercase_Letter}$/u.test(char)) return "uppercase letter";
  if (/^\\p{Lowercase_Letter}$/u.test(char)) return "lowercase letter";
  if (/^\\p{Uppercase}$/u.test(char)) return "uppercase non-letter";
  if (/^\\p{Lowercase}$/u.test(char)) return "lowercase non-letter";
  return "uncased";
}
`})}),`
`,(0,n.jsx)(r.h3,{children:`Isolated nodes`}),`
`,(0,n.jsxs)(r.p,{children:[`There are some nodes that are both toUpperCase-invariant and toLowerCase-invariant. These are still interesting because they are cased, but they have 2 self-loop edges. Furthermore, `,(0,n.jsx)(r.em,{children:`all of them`}),` are isolated, meaning that no other node points to them.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const isolated = [];

for (const char of candidates) {
  if (char.toUpperCase() === char && char.toLowerCase() === char) {
    if (lowersTo.has(char) || uppersTo.has(char))
      console.log(\`Failed to satisfy isolation for \${char}\`);
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
  else console.log(\`Bad category: \${char} (\${type})\`);
}

console.table(g1.map(formatChar));
console.table(g2.map(formatChar));
console.table(g3.map(formatChar));
console.table(g4.map(formatChar));
`})}),`
`,(0,n.jsx)(r.p,{children:`There are 1651 such isolated nodes. Among these: there 499 uppercase letters, 805 lowercase letters, 78 uppercase non-letters, and 269 lowercase non-letters.`}),`
`,(0,n.jsx)(r.h3,{children:`Pairs`}),`
`,(0,n.jsx)(r.p,{children:`Presumably most of the nodes satisfy the following:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`One of them is the `,(0,n.jsx)(r.em,{children:`uppercase`}),`: it's toUpperCase-invariant.`]}),`
`,(0,n.jsxs)(r.li,{children:[`The other is the `,(0,n.jsx)(r.em,{children:`lowercase`}),`: it's toLowerCase-invariant.`]}),`
`,(0,n.jsxs)(r.li,{children:[`They point to each other: the uppercase's `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` edge points to the lowercase, and the lowercase's `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` edge points to the uppercase.`]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const pairs = [];

for (const upper of candidates) {
  if (upper.toUpperCase() !== upper) continue;
  const lower = upper.toLowerCase();
  if (lower.toUpperCase() !== upper) continue;
  pairs.push({ upper, lower });
}

console.table(
  pairs.map(({ upper, lower }) => ({
    upper: formatChar(upper),
    lower: formatChar(lower),
  })),
);
`})}),`
`,(0,n.jsx)(r.p,{children:`There are 1496 such pairs; together with the isolated nodes, they account for 4643 nodes, which is 97.2% of the entire graph's 4778 nodes. Furthermore, all of these pairs satisfy that either they are an uppercase/lowercase letter pair (1381 pairs), or they are an uppercase/lowercase non-letter pair (42 pairs), or they both have multiple code points (73 pairs).`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`c1 = 0;
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
      \`Bad pair: \${formatChar(upper)} (\${upperType}) and \${formatChar(lower)} (\${lowerType})\`,
    );
  }
}
console.log(c1, c2, c3);
`})}),`
`,(0,n.jsxs)(r.p,{children:[`There cannot exist cycle kinds other than isolated nodes and pairs. If a triangle exists: A → B → C → A, then two of these three adjacent edges must be labeled the same, violating idempotence. (Note that this is about a `,(0,n.jsx)(r.em,{children:`circular`}),` triangle; there can be a non-circular triangle, where A uppercases to B and lowercases to C, while B and C form a pair. We'll see these later.) There could theoretically be other even-numbered cycles (A uppercases to B, B lowercases to C, C uppercases to D, D lowercases to A), but that would be exceedingly unlikely. Therefore, the remaining 135 nodes must eventually arrive at one of these pairs (since the isolated nodes don't have incoming edges) via some single-directional path.`]}),`
`,(0,n.jsx)(r.h3,{children:`Aliases`}),`
`,(0,n.jsx)(r.p,{children:`Since these 135 nodes must be pointing to some pair via a single-directional path, we just traverse each one and see where we end up.`}),`
`,(0,n.jsx)(r.p,{children:`There are two kinds of cases here: (1) the node is invariant under one mapping; (2) the node is variant under both mappings. In the first case, there's one simple path; in the second case, there are two paths that may eventually reach different places. However, we can be sure about one thing: this node must have no incoming edges, because that would break idempotence. So we just need to find all nodes with no incoming edges, and then traverse them.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const isolatedSet = new Set(isolated);
const pairLookup = new Map(
  pairs.flatMap(({ upper, lower }) => [
    [upper, lower],
    [lower, upper],
  ]),
);

const rest = candidates.difference(isolatedSet).difference(pairLookup);

for (const char of rest) {
  if (lowersTo.has(char) || uppersTo.has(char)) continue;
  const nextNodes = (
    [
      ["-U->", char.toUpperCase()],
      ["-L->", char.toLowerCase()],
    ]
  ).filter((c) => c[1] !== char);
  if (nextNodes.length === 0)
    throw new Error(\`Can't happen because \${char} is not isolated\`);
  for (const [label, next] of nextNodes) {
    const path = [char, label, next];
    let current = next;
    while (!pairLookup.has(current)) {
      if (isolatedSet.has(current))
        throw new Error(\`Can't happen because \${current} is isolated\`);
      const nextNodes = (
        [
          ["-U->", current.toUpperCase()],
          ["-L->", current.toLowerCase()],
        ]
      ).filter((c) => c[1] !== current);
      if (nextNodes.length === 0)
        throw new Error(\`Can't happen because \${current} is not isolated\`);
      if (nextNodes.length > 1) {
        throw new Error(
          \`Can't happen because \${current} shouldn't have multiple outgoing edges\`,
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
            return \`\${formatChar(x)} <--> \${formatChar(pairLookup.get(x)!)}\`;
          else if (i % 2 === 0) return formatChar(x);
          return x;
        })
        .join(" "),
    );
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:`The results form a few obvious groups:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0080.pdf`,children:`Latin-1 Supplement`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0100.pdf`,children:`Latin Extended-A`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0370.pdf`,children:`Greek and Coptic`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1C80.pdf`,children:`Cyrillic Extended-C`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1E00.pdf`,children:`Latin Extended Additional`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1F00.pdf`,children:`Greek Extended`}),` (1+2+8+9+1+1=22 groups, 22 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`An extra alias for the lowercase form: A → B, B ↔ C. A is a lowercase letter, while B and C an upper/lowercase letter pair.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`µ (U+00B5)`}),(0,n.jsx)(r.td,{children:`Μ (U+039C)`}),(0,n.jsx)(r.td,{children:`μ (U+03BC)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ı (U+0131)`}),(0,n.jsx)(r.td,{children:`I (U+0049)`}),(0,n.jsx)(r.td,{children:`i (U+0069)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ſ (U+017F)`}),(0,n.jsx)(r.td,{children:`S (U+0053)`}),(0,n.jsx)(r.td,{children:`s (U+0073)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ς (U+03C2)`}),(0,n.jsx)(r.td,{children:`Σ (U+03A3)`}),(0,n.jsx)(r.td,{children:`σ (U+03C3)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϐ (U+03D0)`}),(0,n.jsx)(r.td,{children:`Β (U+0392)`}),(0,n.jsx)(r.td,{children:`β (U+03B2)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϑ (U+03D1)`}),(0,n.jsx)(r.td,{children:`Θ (U+0398)`}),(0,n.jsx)(r.td,{children:`θ (U+03B8)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϕ (U+03D5)`}),(0,n.jsx)(r.td,{children:`Φ (U+03A6)`}),(0,n.jsx)(r.td,{children:`φ (U+03C6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϖ (U+03D6)`}),(0,n.jsx)(r.td,{children:`Π (U+03A0)`}),(0,n.jsx)(r.td,{children:`π (U+03C0)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϰ (U+03F0)`}),(0,n.jsx)(r.td,{children:`Κ (U+039A)`}),(0,n.jsx)(r.td,{children:`κ (U+03BA)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϱ (U+03F1)`}),(0,n.jsx)(r.td,{children:`Ρ (U+03A1)`}),(0,n.jsx)(r.td,{children:`ρ (U+03C1)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϵ (U+03F5)`}),(0,n.jsx)(r.td,{children:`Ε (U+0395)`}),(0,n.jsx)(r.td,{children:`ε (U+03B5)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲀ (U+1C80)`}),(0,n.jsx)(r.td,{children:`В (U+0412)`}),(0,n.jsx)(r.td,{children:`в (U+0432)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲁ (U+1C81)`}),(0,n.jsx)(r.td,{children:`Д (U+0414)`}),(0,n.jsx)(r.td,{children:`д (U+0434)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲂ (U+1C82)`}),(0,n.jsx)(r.td,{children:`О (U+041E)`}),(0,n.jsx)(r.td,{children:`о (U+043E)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲃ (U+1C83)`}),(0,n.jsx)(r.td,{children:`С (U+0421)`}),(0,n.jsx)(r.td,{children:`с (U+0441)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲄ (U+1C84)`}),(0,n.jsx)(r.td,{children:`Т (U+0422)`}),(0,n.jsx)(r.td,{children:`т (U+0442)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲅ (U+1C85)`}),(0,n.jsx)(r.td,{children:`Т (U+0422)`}),(0,n.jsx)(r.td,{children:`т (U+0442)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲆ (U+1C86)`}),(0,n.jsx)(r.td,{children:`Ъ (U+042A)`}),(0,n.jsx)(r.td,{children:`ъ (U+044A)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲇ (U+1C87)`}),(0,n.jsx)(r.td,{children:`Ѣ (U+0462)`}),(0,n.jsx)(r.td,{children:`ѣ (U+0463)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᲈ (U+1C88)`}),(0,n.jsx)(r.td,{children:`Ꙋ (U+A64A)`}),(0,n.jsx)(r.td,{children:`ꙋ (U+A64B)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẛ (U+1E9B)`}),(0,n.jsx)(r.td,{children:`Ṡ (U+1E60)`}),(0,n.jsx)(r.td,{children:`ṡ (U+1E61)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ι (U+1FBE)`}),(0,n.jsx)(r.td,{children:`Ι (U+0399)`}),(0,n.jsx)(r.td,{children:`ι (U+03B9)`})]})]})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0100.pdf`,children:`Latin Extended-A`}),`, `,(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0180.pdf`,children:`Latin Extended-B`}),`, `,(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0370.pdf`,children:`Greek and Coptic`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0530.pdf`,children:`Armenian`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1E00.pdf`,children:`Latin Extended Additional`}),`, `,(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U1F00.pdf`,children:`Greek Extended`}),`, `,(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/UFB00.pdf`,children:`Alphabetic Presentation Forms`}),` (1+1+2+1+5+25+12=47 groups, 47 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`An extra alias for the lowercase form: A → B, B ↔ C. A is a lowercase letter, while B and C are multi-code-point strings.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ŉ (U+0149)`}),(0,n.jsx)(r.td,{children:`ʼN (U+02BC U+004E)`}),(0,n.jsx)(r.td,{children:`ʼn (U+02BC U+006E)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ǰ (U+01F0)`}),(0,n.jsx)(r.td,{children:`J̌ (U+004A U+030C)`}),(0,n.jsx)(r.td,{children:`ǰ (U+006A U+030C)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ΐ (U+0390)`}),(0,n.jsx)(r.td,{children:`Ϊ́ (U+0399 U+0308 U+0301)`}),(0,n.jsx)(r.td,{children:`ΐ (U+03B9 U+0308 U+0301)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ΰ (U+03B0)`}),(0,n.jsx)(r.td,{children:`Ϋ́ (U+03A5 U+0308 U+0301)`}),(0,n.jsx)(r.td,{children:`ΰ (U+03C5 U+0308 U+0301)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`և (U+0587)`}),(0,n.jsx)(r.td,{children:`ԵՒ (U+0535 U+0552)`}),(0,n.jsx)(r.td,{children:`եւ (U+0565 U+0582)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẖ (U+1E96)`}),(0,n.jsx)(r.td,{children:`H̱ (U+0048 U+0331)`}),(0,n.jsx)(r.td,{children:`ẖ (U+0068 U+0331)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẗ (U+1E97)`}),(0,n.jsx)(r.td,{children:`T̈ (U+0054 U+0308)`}),(0,n.jsx)(r.td,{children:`ẗ (U+0074 U+0308)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẘ (U+1E98)`}),(0,n.jsx)(r.td,{children:`W̊ (U+0057 U+030A)`}),(0,n.jsx)(r.td,{children:`ẘ (U+0077 U+030A)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẙ (U+1E99)`}),(0,n.jsx)(r.td,{children:`Y̊ (U+0059 U+030A)`}),(0,n.jsx)(r.td,{children:`ẙ (U+0079 U+030A)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẚ (U+1E9A)`}),(0,n.jsx)(r.td,{children:`Aʾ (U+0041 U+02BE)`}),(0,n.jsx)(r.td,{children:`aʾ (U+0061 U+02BE)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ὐ (U+1F50)`}),(0,n.jsx)(r.td,{children:`Υ̓ (U+03A5 U+0313)`}),(0,n.jsx)(r.td,{children:`ὐ (U+03C5 U+0313)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ὒ (U+1F52)`}),(0,n.jsx)(r.td,{children:`Υ̓̀ (U+03A5 U+0313 U+0300)`}),(0,n.jsx)(r.td,{children:`ὒ (U+03C5 U+0313 U+0300)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ὔ (U+1F54)`}),(0,n.jsx)(r.td,{children:`Υ̓́ (U+03A5 U+0313 U+0301)`}),(0,n.jsx)(r.td,{children:`ὔ (U+03C5 U+0313 U+0301)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ὖ (U+1F56)`}),(0,n.jsx)(r.td,{children:`Υ̓͂ (U+03A5 U+0313 U+0342)`}),(0,n.jsx)(r.td,{children:`ὖ (U+03C5 U+0313 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾲ (U+1FB2)`}),(0,n.jsx)(r.td,{children:`ᾺΙ (U+1FBA U+0399)`}),(0,n.jsx)(r.td,{children:`ὰι (U+1F70 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾴ (U+1FB4)`}),(0,n.jsx)(r.td,{children:`ΆΙ (U+0386 U+0399)`}),(0,n.jsx)(r.td,{children:`άι (U+03AC U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾶ (U+1FB6)`}),(0,n.jsx)(r.td,{children:`Α͂ (U+0391 U+0342)`}),(0,n.jsx)(r.td,{children:`ᾶ (U+03B1 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾷ (U+1FB7)`}),(0,n.jsx)(r.td,{children:`Α͂Ι (U+0391 U+0342 U+0399)`}),(0,n.jsx)(r.td,{children:`ᾶι (U+03B1 U+0342 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῂ (U+1FC2)`}),(0,n.jsx)(r.td,{children:`ῊΙ (U+1FCA U+0399)`}),(0,n.jsx)(r.td,{children:`ὴι (U+1F74 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῄ (U+1FC4)`}),(0,n.jsx)(r.td,{children:`ΉΙ (U+0389 U+0399)`}),(0,n.jsx)(r.td,{children:`ήι (U+03AE U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῆ (U+1FC6)`}),(0,n.jsx)(r.td,{children:`Η͂ (U+0397 U+0342)`}),(0,n.jsx)(r.td,{children:`ῆ (U+03B7 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῇ (U+1FC7)`}),(0,n.jsx)(r.td,{children:`Η͂Ι (U+0397 U+0342 U+0399)`}),(0,n.jsx)(r.td,{children:`ῆι (U+03B7 U+0342 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῒ (U+1FD2)`}),(0,n.jsx)(r.td,{children:`Ϊ̀ (U+0399 U+0308 U+0300)`}),(0,n.jsx)(r.td,{children:`ῒ (U+03B9 U+0308 U+0300)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ΐ (U+1FD3)`}),(0,n.jsx)(r.td,{children:`Ϊ́ (U+0399 U+0308 U+0301)`}),(0,n.jsx)(r.td,{children:`ΐ (U+03B9 U+0308 U+0301)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῖ (U+1FD6)`}),(0,n.jsx)(r.td,{children:`Ι͂ (U+0399 U+0342)`}),(0,n.jsx)(r.td,{children:`ῖ (U+03B9 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῗ (U+1FD7)`}),(0,n.jsx)(r.td,{children:`Ϊ͂ (U+0399 U+0308 U+0342)`}),(0,n.jsx)(r.td,{children:`ῗ (U+03B9 U+0308 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῢ (U+1FE2)`}),(0,n.jsx)(r.td,{children:`Ϋ̀ (U+03A5 U+0308 U+0300)`}),(0,n.jsx)(r.td,{children:`ῢ (U+03C5 U+0308 U+0300)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ΰ (U+1FE3)`}),(0,n.jsx)(r.td,{children:`Ϋ́ (U+03A5 U+0308 U+0301)`}),(0,n.jsx)(r.td,{children:`ΰ (U+03C5 U+0308 U+0301)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῤ (U+1FE4)`}),(0,n.jsx)(r.td,{children:`Ρ̓ (U+03A1 U+0313)`}),(0,n.jsx)(r.td,{children:`ῤ (U+03C1 U+0313)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῦ (U+1FE6)`}),(0,n.jsx)(r.td,{children:`Υ͂ (U+03A5 U+0342)`}),(0,n.jsx)(r.td,{children:`ῦ (U+03C5 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῧ (U+1FE7)`}),(0,n.jsx)(r.td,{children:`Ϋ͂ (U+03A5 U+0308 U+0342)`}),(0,n.jsx)(r.td,{children:`ῧ (U+03C5 U+0308 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῲ (U+1FF2)`}),(0,n.jsx)(r.td,{children:`ῺΙ (U+1FFA U+0399)`}),(0,n.jsx)(r.td,{children:`ὼι (U+1F7C U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῴ (U+1FF4)`}),(0,n.jsx)(r.td,{children:`ΏΙ (U+038F U+0399)`}),(0,n.jsx)(r.td,{children:`ώι (U+03CE U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῶ (U+1FF6)`}),(0,n.jsx)(r.td,{children:`Ω͂ (U+03A9 U+0342)`}),(0,n.jsx)(r.td,{children:`ῶ (U+03C9 U+0342)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῷ (U+1FF7)`}),(0,n.jsx)(r.td,{children:`Ω͂Ι (U+03A9 U+0342 U+0399)`}),(0,n.jsx)(r.td,{children:`ῶι (U+03C9 U+0342 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬀ (U+FB00)`}),(0,n.jsx)(r.td,{children:`FF (U+0046 U+0046)`}),(0,n.jsx)(r.td,{children:`ff (U+0066 U+0066)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬁ (U+FB01)`}),(0,n.jsx)(r.td,{children:`FI (U+0046 U+0049)`}),(0,n.jsx)(r.td,{children:`fi (U+0066 U+0069)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬂ (U+FB02)`}),(0,n.jsx)(r.td,{children:`FL (U+0046 U+004C)`}),(0,n.jsx)(r.td,{children:`fl (U+0066 U+006C)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬃ (U+FB03)`}),(0,n.jsx)(r.td,{children:`FFI (U+0046 U+0046 U+0049)`}),(0,n.jsx)(r.td,{children:`ffi (U+0066 U+0066 U+0069)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬄ (U+FB04)`}),(0,n.jsx)(r.td,{children:`FFL (U+0046 U+0046 U+004C)`}),(0,n.jsx)(r.td,{children:`ffl (U+0066 U+0066 U+006C)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬅ (U+FB05)`}),(0,n.jsx)(r.td,{children:`ST (U+0053 U+0054)`}),(0,n.jsx)(r.td,{children:`st (U+0073 U+0074)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬆ (U+FB06)`}),(0,n.jsx)(r.td,{children:`ST (U+0053 U+0054)`}),(0,n.jsx)(r.td,{children:`st (U+0073 U+0074)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬓ (U+FB13)`}),(0,n.jsx)(r.td,{children:`ՄՆ (U+0544 U+0546)`}),(0,n.jsx)(r.td,{children:`մն (U+0574 U+0576)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬔ (U+FB14)`}),(0,n.jsx)(r.td,{children:`ՄԵ (U+0544 U+0535)`}),(0,n.jsx)(r.td,{children:`մե (U+0574 U+0565)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬕ (U+FB15)`}),(0,n.jsx)(r.td,{children:`ՄԻ (U+0544 U+053B)`}),(0,n.jsx)(r.td,{children:`մի (U+0574 U+056B)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬖ (U+FB16)`}),(0,n.jsx)(r.td,{children:`ՎՆ (U+054E U+0546)`}),(0,n.jsx)(r.td,{children:`վն (U+057E U+0576)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ﬗ (U+FB17)`}),(0,n.jsx)(r.td,{children:`ՄԽ (U+0544 U+053D)`}),(0,n.jsx)(r.td,{children:`մխ (U+0574 U+056D)`})]})]})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0300.pdf`,children:`Combining Diacritical Marks`}),` (1 group, 1 non-pair extra node)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`An extra alias for the lowercase form: A → B, B ↔ C. A is uncased (combining ypogegrammeni), while B and C are an upper/lowercase letter pair.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`◌ͅ (U+0345)`}),(0,n.jsx)(r.td,{children:`Ι (U+0399)`}),(0,n.jsx)(r.td,{children:`ι (U+03B9)`})]})})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0370.pdf`,children:`Greek and Coptic`}),`, `,(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U2100.pdf`,children:`Letterlike characters`}),` (1+3=4 groups, 4 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`An extra alias for the uppercase form: A → C, B ↔ C. A is an uppercase letter, while B and C are an upper/lowercase letter pair.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ϴ (U+03F4)`}),(0,n.jsx)(r.td,{children:`Θ (U+0398)`}),(0,n.jsx)(r.td,{children:`θ (U+03B8)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ω (U+2126)`}),(0,n.jsx)(r.td,{children:`Ω (U+03A9)`}),(0,n.jsx)(r.td,{children:`ω (U+03C9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`K (U+212A)`}),(0,n.jsx)(r.td,{children:`K (U+004B)`}),(0,n.jsx)(r.td,{children:`k (U+006B)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Å (U+212B)`}),(0,n.jsx)(r.td,{children:`Å (U+00C5)`}),(0,n.jsx)(r.td,{children:`å (U+00E5)`})]})]})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0100.pdf`,children:`Latin Extended-A`}),` (1 group, 1 non-pair extra node)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`An extra alias for the uppercase form: A → C, B ↔ C. A is an uppercase letter, while B and C are multi-code-point strings.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`İ (U+0130)`}),(0,n.jsx)(r.td,{children:`İ (U+0049 U+0307)`}),(0,n.jsx)(r.td,{children:`i̇ (U+0069 U+0307)`})]})})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0180.pdf`,children:`Latin Extended-B`}),` (4 groups, 4 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`4 triangles of the form A → B, A → C, B ↔ C. A is uncased (contains a capital and a small letter in a ligature), while B and C are an upper/lowercase letter pair.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ǅ (U+01C5)`}),(0,n.jsx)(r.td,{children:`Ǆ (U+01C4)`}),(0,n.jsx)(r.td,{children:`ǆ (U+01C6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ǈ (U+01C8)`}),(0,n.jsx)(r.td,{children:`Ǉ (U+01C7)`}),(0,n.jsx)(r.td,{children:`ǉ (U+01C9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ǋ (U+01CB)`}),(0,n.jsx)(r.td,{children:`Ǌ (U+01CA)`}),(0,n.jsx)(r.td,{children:`ǌ (U+01CC)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ǲ (U+01F2)`}),(0,n.jsx)(r.td,{children:`Ǳ (U+01F1)`}),(0,n.jsx)(r.td,{children:`ǳ (U+01F3)`})]})]})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0080.pdf`,children:`Latin-1 Supplement`}),` and `,(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U1E00.pdf`,children:`Latin Extended Additional`}),` (1 group, 2 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`A path of the form A → B, B → C, C ↔ D. A is an uppercase letter, B is a lowercase letter, while C and D are both multi-code-point strings.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`}),(0,n.jsx)(r.th,{children:`D`})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ẞ (U+1E9E)`}),(0,n.jsx)(r.td,{children:`ß (U+00DF)`}),(0,n.jsx)(r.td,{children:`SS (U+0053 U+0053)`}),(0,n.jsx)(r.td,{children:`ss (U+0073 U+0073)`})]})})]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`This seems to be an unfortunate historical artifact: had ß been transformed by `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` into ẞ instead of SS, we would have two trivial pairs.`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U1F00.pdf`,children:`Greek Extended`}),` (27 groups, 54 non-pair extra nodes)`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[`4 pair-and-triangle groups of the form A → B, A → C, B → C, C ↔ D. A is uncased (contains a capital letter and a `,(0,n.jsx)(r.a,{href:`https://en.wikipedia.org/wiki/Iota_subscript`,children:`prosgegrammeni`}),`), B is a lowercase letter (contains a lowercase letter and a ypogegrammeni), while C and D are both multi-code-point strings, where the ypogegrammeni is replaced by a real iota.`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`A`}),(0,n.jsx)(r.th,{children:`B`}),(0,n.jsx)(r.th,{children:`C`}),(0,n.jsx)(r.th,{children:`D`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾈ (U+1F88)`}),(0,n.jsx)(r.td,{children:`ᾀ (U+1F80)`}),(0,n.jsx)(r.td,{children:`ἈΙ (U+1F08 U+0399)`}),(0,n.jsx)(r.td,{children:`ἀι (U+1F00 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾉ (U+1F89)`}),(0,n.jsx)(r.td,{children:`ᾁ (U+1F81)`}),(0,n.jsx)(r.td,{children:`ἉΙ (U+1F09 U+0399)`}),(0,n.jsx)(r.td,{children:`ἁι (U+1F01 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾊ (U+1F8A)`}),(0,n.jsx)(r.td,{children:`ᾂ (U+1F82)`}),(0,n.jsx)(r.td,{children:`ἊΙ (U+1F0A U+0399)`}),(0,n.jsx)(r.td,{children:`ἂι (U+1F02 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾋ (U+1F8B)`}),(0,n.jsx)(r.td,{children:`ᾃ (U+1F83)`}),(0,n.jsx)(r.td,{children:`ἋΙ (U+1F0B U+0399)`}),(0,n.jsx)(r.td,{children:`ἃι (U+1F03 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾌ (U+1F8C)`}),(0,n.jsx)(r.td,{children:`ᾄ (U+1F84)`}),(0,n.jsx)(r.td,{children:`ἌΙ (U+1F0C U+0399)`}),(0,n.jsx)(r.td,{children:`ἄι (U+1F04 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾍ (U+1F8D)`}),(0,n.jsx)(r.td,{children:`ᾅ (U+1F85)`}),(0,n.jsx)(r.td,{children:`ἍΙ (U+1F0D U+0399)`}),(0,n.jsx)(r.td,{children:`ἅι (U+1F05 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾎ (U+1F8E)`}),(0,n.jsx)(r.td,{children:`ᾆ (U+1F86)`}),(0,n.jsx)(r.td,{children:`ἎΙ (U+1F0E U+0399)`}),(0,n.jsx)(r.td,{children:`ἆι (U+1F06 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾏ (U+1F8F)`}),(0,n.jsx)(r.td,{children:`ᾇ (U+1F87)`}),(0,n.jsx)(r.td,{children:`ἏΙ (U+1F0F U+0399)`}),(0,n.jsx)(r.td,{children:`ἇι (U+1F07 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾘ (U+1F98)`}),(0,n.jsx)(r.td,{children:`ᾐ (U+1F90)`}),(0,n.jsx)(r.td,{children:`ἨΙ (U+1F28 U+0399)`}),(0,n.jsx)(r.td,{children:`ἠι (U+1F20 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾙ (U+1F99)`}),(0,n.jsx)(r.td,{children:`ᾑ (U+1F91)`}),(0,n.jsx)(r.td,{children:`ἩΙ (U+1F29 U+0399)`}),(0,n.jsx)(r.td,{children:`ἡι (U+1F21 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾚ (U+1F9A)`}),(0,n.jsx)(r.td,{children:`ᾒ (U+1F92)`}),(0,n.jsx)(r.td,{children:`ἪΙ (U+1F2A U+0399)`}),(0,n.jsx)(r.td,{children:`ἢι (U+1F22 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾛ (U+1F9B)`}),(0,n.jsx)(r.td,{children:`ᾓ (U+1F93)`}),(0,n.jsx)(r.td,{children:`ἫΙ (U+1F2B U+0399)`}),(0,n.jsx)(r.td,{children:`ἣι (U+1F23 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾜ (U+1F9C)`}),(0,n.jsx)(r.td,{children:`ᾔ (U+1F94)`}),(0,n.jsx)(r.td,{children:`ἬΙ (U+1F2C U+0399)`}),(0,n.jsx)(r.td,{children:`ἤι (U+1F24 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾝ (U+1F9D)`}),(0,n.jsx)(r.td,{children:`ᾕ (U+1F95)`}),(0,n.jsx)(r.td,{children:`ἭΙ (U+1F2D U+0399)`}),(0,n.jsx)(r.td,{children:`ἥι (U+1F25 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾞ (U+1F9E)`}),(0,n.jsx)(r.td,{children:`ᾖ (U+1F96)`}),(0,n.jsx)(r.td,{children:`ἮΙ (U+1F2E U+0399)`}),(0,n.jsx)(r.td,{children:`ἦι (U+1F26 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾟ (U+1F9F)`}),(0,n.jsx)(r.td,{children:`ᾗ (U+1F97)`}),(0,n.jsx)(r.td,{children:`ἯΙ (U+1F2F U+0399)`}),(0,n.jsx)(r.td,{children:`ἧι (U+1F27 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾨ (U+1FA8)`}),(0,n.jsx)(r.td,{children:`ᾠ (U+1FA0)`}),(0,n.jsx)(r.td,{children:`ὨΙ (U+1F68 U+0399)`}),(0,n.jsx)(r.td,{children:`ὠι (U+1F60 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾩ (U+1FA9)`}),(0,n.jsx)(r.td,{children:`ᾡ (U+1FA1)`}),(0,n.jsx)(r.td,{children:`ὩΙ (U+1F69 U+0399)`}),(0,n.jsx)(r.td,{children:`ὡι (U+1F61 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾪ (U+1FAA)`}),(0,n.jsx)(r.td,{children:`ᾢ (U+1FA2)`}),(0,n.jsx)(r.td,{children:`ὪΙ (U+1F6A U+0399)`}),(0,n.jsx)(r.td,{children:`ὢι (U+1F62 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾫ (U+1FAB)`}),(0,n.jsx)(r.td,{children:`ᾣ (U+1FA3)`}),(0,n.jsx)(r.td,{children:`ὫΙ (U+1F6B U+0399)`}),(0,n.jsx)(r.td,{children:`ὣι (U+1F63 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾬ (U+1FAC)`}),(0,n.jsx)(r.td,{children:`ᾤ (U+1FA4)`}),(0,n.jsx)(r.td,{children:`ὬΙ (U+1F6C U+0399)`}),(0,n.jsx)(r.td,{children:`ὤι (U+1F64 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾭ (U+1FAD)`}),(0,n.jsx)(r.td,{children:`ᾥ (U+1FA5)`}),(0,n.jsx)(r.td,{children:`ὭΙ (U+1F6D U+0399)`}),(0,n.jsx)(r.td,{children:`ὥι (U+1F65 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾮ (U+1FAE)`}),(0,n.jsx)(r.td,{children:`ᾦ (U+1FA6)`}),(0,n.jsx)(r.td,{children:`ὮΙ (U+1F6E U+0399)`}),(0,n.jsx)(r.td,{children:`ὦι (U+1F66 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾯ (U+1FAF)`}),(0,n.jsx)(r.td,{children:`ᾧ (U+1FA7)`}),(0,n.jsx)(r.td,{children:`ὯΙ (U+1F6F U+0399)`}),(0,n.jsx)(r.td,{children:`ὧι (U+1F67 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ᾼ (U+1FBC)`}),(0,n.jsx)(r.td,{children:`ᾳ (U+1FB3)`}),(0,n.jsx)(r.td,{children:`ΑΙ (U+0391 U+0399)`}),(0,n.jsx)(r.td,{children:`αι (U+03B1 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῌ (U+1FCC)`}),(0,n.jsx)(r.td,{children:`ῃ (U+1FC3)`}),(0,n.jsx)(r.td,{children:`ΗΙ (U+0397 U+0399)`}),(0,n.jsx)(r.td,{children:`ηι (U+03B7 U+03B9)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`ῼ (U+1FFC)`}),(0,n.jsx)(r.td,{children:`ῳ (U+1FF3)`}),(0,n.jsx)(r.td,{children:`ΩΙ (U+03A9 U+0399)`}),(0,n.jsx)(r.td,{children:`ωι (U+03C9 U+03B9)`})]})]})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Among these 107 groups, most pairs only participate in one group, except:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Θ (U+0398) and θ (U+03B8): has ϴ (U+03F4) as another uppercase and ϑ (U+03D1) as another lowercase.`}),`
`,(0,n.jsx)(r.li,{children:`Т (U+0422) and т (U+0442): has both ᲄ (U+1C84) and ᲅ (U+1C85) as alternative lowercase.`}),`
`,(0,n.jsx)(r.li,{children:`Ι (U+0399) and ι (U+03B9): has both ι (U+1FBE) and ◌ͅ (U+0345) as alternative lowercase.`}),`
`,(0,n.jsx)(r.li,{children:`ST (U+0053 U+0054) and st (U+0073 U+0074): has both ﬅ (U+FB05) and ﬆ (U+FB06) as alternative lowercase.`}),`
`,(0,n.jsx)(r.li,{children:`Ϊ́ (U+0399 U+0308 U+0301) and ΐ (U+03B9 U+0308 U+0301): has both ΐ (U+0390) and ΐ (U+1FD3) as alternative lowercase.`}),`
`,(0,n.jsx)(r.li,{children:`Ϋ́ (U+03A5 U+0308 U+0301) and ΰ (U+03C5 U+0308 U+0301): has both ΰ (U+03B0) and ΰ (U+1FE3) as alternative lowercase.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Therefore there are 101 unique pairs which host vestigial nodes; all other 1496－101=1395 pairs are trivial.`}),`
`,(0,n.jsx)(r.h3,{children:`Graph summary`}),`
`,(0,n.jsx)(r.p,{children:`To summarize, we have the following partition of the mapping graph:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`1651 isolated nodes:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`499 uppercase letters`}),`
`,(0,n.jsx)(r.li,{children:`805 lowercase letters`}),`
`,(0,n.jsx)(r.li,{children:`78 uppercase non-letters`}),`
`,(0,n.jsx)(r.li,{children:`269 lowercase non-letters`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`1395 trivial pairs (2790 nodes):`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`1353 pairs of uppercase and lowercase letters (2706 nodes)`}),`
`,(0,n.jsx)(r.li,{children:`42 pairs of uppercase and lowercase non-letters (84 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`59 pair-and-alias groups with a lowercase alias (177 nodes):`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`18 groups of upper/lowercase letter pairs with a lowercase letter alias (54 nodes)`}),`
`,(0,n.jsx)(r.li,{children:`41 groups of multi-code-point string pairs with a lowercase letter alias (123 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`4 pair-and-alias groups with an uppercase alias (12 nodes):`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`3 groups of upper/lowercase letter pairs with an uppercase letter alias (9 nodes)`}),`
`,(0,n.jsx)(r.li,{children:`1 group of multi-code-point string pairs with an uppercase letter alias (3 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`5 pair-and-alias groups with two lowercase aliases (20 nodes):`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`2 groups of upper/lowercase letter pairs with two lowercase letter aliases (16 nodes)`}),`
`,(0,n.jsx)(r.li,{children:`3 groups of multi-code-point string pairs with two lowercase letter aliases (4 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`1 pair-and-alias group with both an uppercase and lowercase alias (4 nodes):`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`1 group of upper/lowercase letter pairs with an uppercase letter alias and a lowercase letter alias (4 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`4 triangular groups where A → B, A → C, B ↔ C (12 nodes)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`4 groups where A is uncased, B and C are an upper/lowercase letter pair (12 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`1 pair-and-path group where A → B, B → C, C ↔ D (4 nodes)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`1 group where A is an uppercase letter, B is a lowercase letter, while C and D are both multi-code-point strings (4 nodes)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`27 pair-and-triangle groups where A → B, A → C, B → C, C ↔ D (108 nodes)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`27 groups where A is uncased, B is a lowercase letter, C and D are both multi-code-point strings`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Input/output of case mapping`}),`
`,(0,n.jsx)(r.p,{children:`Everything can be summarized by these two tables:`}),`
`,`
`,(0,n.jsxs)(`table`,{children:[(0,n.jsxs)(`caption`,{children:[`Input and output cases of `,(0,n.jsx)(r.code,{children:`toUpperCase`})]}),(0,n.jsx)(`thead`,{children:(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`Input \\ Output`}),(0,n.jsx)(`th`,{children:`Identity`}),(0,n.jsx)(`th`,{children:`lowercase letter`}),(0,n.jsx)(`th`,{children:`uppercase letter`}),(0,n.jsx)(`th`,{children:`lowercase non-letter`}),(0,n.jsx)(`th`,{children:`uppercase non-letter`}),(0,n.jsx)(`th`,{children:`uncased`}),(0,n.jsx)(`th`,{children:`multi-code-point`})]})}),(0,n.jsxs)(`tbody`,{children:[(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`lowercase letter`}),(0,n.jsx)(`td`,{children:`805`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`1403`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`75`})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uppercase letter`}),(0,n.jsx)(`td`,{children:`1886`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`lowercase non-letter`}),(0,n.jsx)(`td`,{children:`269`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`42`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uppercase non-letter`}),(0,n.jsx)(`td`,{children:`120`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uncased`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`4`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`27`})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`multi-code-point`}),(0,n.jsx)(`td`,{children:`73`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`73`})]})]})]}),`
`,`
`,(0,n.jsxs)(`table`,{children:[(0,n.jsxs)(`caption`,{children:[`Input and output cases of `,(0,n.jsx)(r.code,{children:`toLowerCase`})]}),(0,n.jsx)(`thead`,{children:(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`Input \\ Output`}),(0,n.jsx)(`th`,{children:`Identity`}),(0,n.jsx)(`th`,{children:`lowercase letter`}),(0,n.jsx)(`th`,{children:`uppercase letter`}),(0,n.jsx)(`th`,{children:`lowercase non-letter`}),(0,n.jsx)(`th`,{children:`uppercase non-letter`}),(0,n.jsx)(`th`,{children:`uncased`}),(0,n.jsx)(`th`,{children:`multi-code-point`})]})}),(0,n.jsxs)(`tbody`,{children:[(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`lowercase letter`}),(0,n.jsx)(`td`,{children:`2283`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uppercase letter`}),(0,n.jsx)(`td`,{children:`499`}),(0,n.jsx)(`td`,{children:`1386`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`1`})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`lowercase non-letter`}),(0,n.jsx)(`td`,{children:`312`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uppercase non-letter`}),(0,n.jsx)(`td`,{children:`78`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`42`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`uncased`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`31`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`th`,{children:`multi-code-point`}),(0,n.jsx)(`td`,{children:`73`}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{}),(0,n.jsx)(`td`,{children:`73`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`Does upper(lower) case imply upper(lower)case invariance?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Yes`}),`. Looking horizontally across the "uppercase letter" and "uppercase non-letter" rows in the first table and "lowercase letter" and "lowercase non-letter" rows in the second table, all characters are identity-mapped.`]}),`
`,(0,n.jsx)(r.p,{children:`As a corollary, given a character is cased, lower(upper)case variance implies upper(lower) case.`}),`
`,(0,n.jsx)(r.h3,{children:`Does upper(lower) case imply lower(upper)case variance?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),`. The isolated nodes are cased but case-invariant. Excluding them, the answer is yes (but is almost trivial).`]}),`
`,(0,n.jsx)(r.p,{children:`As a corollary, given a character is cased, upper(lower)case invariance does not imply upper(lower) case.`}),`
`,(0,n.jsx)(r.h3,{children:`Does case-mapping variance imply casedness?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),`. There are characters that are uncased, but are case-mapping variant. These are exactly the intermediate nodes in triangles:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`The 4 ligatures: ǅ (U+01C5), ǈ (U+01C8), ǋ (U+01CB), ǲ (U+01F2)`}),`
`,(0,n.jsx)(r.li,{children:`All the 27 uppercase greek letters with prosgegrammeni`}),`
`]}),`
`,(0,n.jsx)(r.h4,{children:`Are uppercase variance and lowercase variance mutually exclusive?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),`. There are characters that are both uppercase and lowercase variant. These are exactly the intermediate nodes in triangles:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`The 4 ligatures: ǅ (U+01C5), ǈ (U+01C8), ǋ (U+01CB), ǲ (U+01F2)`}),`
`,(0,n.jsx)(r.li,{children:`All the 27 uppercase greek letters with prosgegrammeni`}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const bothVariant = [];
for (const char of candidates) {
  if (char.toUpperCase() !== char && char.toLowerCase() !== char)
    bothVariant.push(char);
}
console.table(bothVariant.map(formatChar));
`})}),`
`,(0,n.jsx)(r.h3,{children:`Can a case-variant character change into a case-invariant character?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),`, never. In our mapping graph, the only sink nodes are the isolated nodes. You can never enter a node without being able to exit.`]}),`
`,(0,n.jsx)(r.h3,{children:`Can an uncased character change into a cased character, or vice versa?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Yes`}),`; specifically, the triangle intermediate nodes are uncased but can change into cased characters. But `,(0,n.jsx)(r.strong,{children:`no`}),`, a cased character can never change into an uncased character.`]}),`
`,(0,n.jsx)(r.h3,{children:`Can a single-code-point character change into a multi-code-point string, or vice versa?`}),`
`,(0,n.jsxs)(r.p,{children:[`The first question is obviously `,(0,n.jsx)(r.strong,{children:`yes`}),` (see the tables above). Namely, there are 75 lowercase letters (the 47 lowercase aliases of multi-code-point pairs, ß, and the Greek lowercase letters with ypogegrammeni) and 27 uncased characters (the Greek uppercase letters with prosgegrammeni) that become multi-code-point after uppercasing; on the other hand, only a single uppercase letter (İ) becomes multi-code-point after lowercasing.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Most of the times, as soon as you change from a single code point to multiple code points, you never go back (resulting in the pair-and-alias groups), so the second question is `,(0,n.jsx)(r.strong,{children:`no`}),` (in the tables, the "multi-code-point" row only maps to "identity" or "multi-code-point").`]}),`
`,(0,n.jsxs)(r.p,{children:[`However, the answer to the second question changes slightly if you perform `,(0,n.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize`,children:`NFC normalization`}),` after case mapping. Some of these sequences remain multi-code-point after normalization before case mapping, but become single-code-point after case mapping and normalization.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const lowerToSingle = [];
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
`})}),`
`,(0,n.jsxs)(r.p,{children:[`(Note that this isn't meant to be exhaustive, since the `,(0,n.jsx)(r.code,{children:`candidates`}),` list only includes character sequences that are derived from single code points by case mapping in the first place.)`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Sequence`}),(0,n.jsx)(r.th,{children:`Lowercase`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`J̌ (U+004A U+030C)`}),(0,n.jsx)(r.td,{children:`ǰ (U+01F0)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϊ́ (U+03AA U+0301)`}),(0,n.jsx)(r.td,{children:`ΐ (U+0390)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϋ́ (U+03AB U+0301)`}),(0,n.jsx)(r.td,{children:`ΰ (U+03B0)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`H̱ (U+0048 U+0331)`}),(0,n.jsx)(r.td,{children:`ẖ (U+1E96)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`T̈ (U+0054 U+0308)`}),(0,n.jsx)(r.td,{children:`ẗ (U+1E97)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`W̊ (U+0057 U+030A)`}),(0,n.jsx)(r.td,{children:`ẘ (U+1E98)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Y̊ (U+0059 U+030A)`}),(0,n.jsx)(r.td,{children:`ẙ (U+1E99)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Υ̓ (U+03A5 U+0313)`}),(0,n.jsx)(r.td,{children:`ὐ (U+1F50)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Υ̓̀ (U+03A5 U+0313 U+0300)`}),(0,n.jsx)(r.td,{children:`ὒ (U+1F52)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Υ̓́ (U+03A5 U+0313 U+0301)`}),(0,n.jsx)(r.td,{children:`ὔ (U+1F54)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Υ̓͂ (U+03A5 U+0313 U+0342)`}),(0,n.jsx)(r.td,{children:`ὖ (U+1F56)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Α͂ (U+0391 U+0342)`}),(0,n.jsx)(r.td,{children:`ᾶ (U+1FB6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Η͂ (U+0397 U+0342)`}),(0,n.jsx)(r.td,{children:`ῆ (U+1FC6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϊ̀ (U+03AA U+0300)`}),(0,n.jsx)(r.td,{children:`ῒ (U+1FD2)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ι͂ (U+0399 U+0342)`}),(0,n.jsx)(r.td,{children:`ῖ (U+1FD6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϊ͂ (U+03AA U+0342)`}),(0,n.jsx)(r.td,{children:`ῗ (U+1FD7)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϋ̀ (U+03AB U+0300)`}),(0,n.jsx)(r.td,{children:`ῢ (U+1FE2)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ρ̓ (U+03A1 U+0313)`}),(0,n.jsx)(r.td,{children:`ῤ (U+1FE4)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Υ͂ (U+03A5 U+0342)`}),(0,n.jsx)(r.td,{children:`ῦ (U+1FE6)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ϋ͂ (U+03AB U+0342)`}),(0,n.jsx)(r.td,{children:`ῧ (U+1FE7)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ω͂ (U+03A9 U+0342)`}),(0,n.jsx)(r.td,{children:`ῶ (U+1FF6)`})]})]})]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0180.pdf`,children:`Latin Extended-B`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`LATIN SMALL LETTER J WITH CARON (U+01F0)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U0370.pdf`,children:`Greek and Coptic`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS (U+0390)`}),`
`,(0,n.jsx)(r.li,{children:`GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS (U+03B0)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1E00.pdf`,children:`Latin Extended Additional`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`4 characters`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`http://www.unicode.org/charts/PDF/U1F00.pdf`,children:`Greek Extended`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`14 characters`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Sequence`}),(0,n.jsx)(r.th,{children:`Uppercase`})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`i̇ (U+0069 U+0307)`}),(0,n.jsx)(r.td,{children:`İ (U+0130)`})]})})]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`https://www.unicode.org/charts/PDF/U0100.pdf`,children:`Latin Extended-A`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`LATIN CAPITAL LETTER I WITH DOT ABOVE (U+0130)`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Are lower(upper)case characters always mapped to upper(lower)case characters by `,(0,n.jsx)(r.code,{children:`toUpper(Lower)Case`}),`?`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),` because of the existence of case-invariant characters. Also `,(0,n.jsx)(r.strong,{children:`no`}),` because of cases where a single-code-point character is mapped to a multi-code-point string. However, if the character is case-variant and the result is single-code-point, then `,(0,n.jsx)(r.strong,{children:`yes`}),`.`]}),`
`,(0,n.jsx)(r.h3,{children:`Can case-mapping convert a letter to a non-letter, or vice versa?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),` (if you ignore multi-code-point cases). Letters stay letters, and non-letters stay non-letters.`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Does `,(0,n.jsx)(r.code,{children:`toUpper(Lower)Case`}),` always produce upper(lower)case characters? Can it produce lower(upper)case characters?`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Yes`}),` (if you ignore invariant and multi-code-point cases) and `,(0,n.jsx)(r.strong,{children:`no`}),` (always).`]}),`
`,(0,n.jsx)(r.h2,{children:`Functional properties`}),`
`,(0,n.jsxs)(r.h3,{children:[`Can the same character be produced by both `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` (ignoring identity mapping)?`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`No`}),`. By idempotence: if A → C by `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and B → C by `,(0,n.jsx)(r.code,{children:`toLowerCase`}),`, then C is invariant under both operations, but invariant characters are never the result of case mapping from other characters.`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Can the same character be produced by `,(0,n.jsx)(r.code,{children:`toUpper(Lower)Case`}),` from two different characters (ignoring identity mapping)?`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Yes`}),`. By the existence of aliases, there are many cases where two characters map to the same one. Namely, the 18 groups with a lowercase letter alias, 3 groups with an uppercase letter alias, 2 groups with two lowercase letter aliases, 1 group with an uppercase letter alias and a lowercase letter alias`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Are `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` reverse operations?`]}),`
`,(0,n.jsxs)(r.p,{children:[`This is to ask, is it true that either `,(0,n.jsx)(r.code,{children:`x === x.toUpperCase().toLowerCase()`}),` or `,(0,n.jsx)(r.code,{children:`x === x.toLowerCase().toUpperCase()`}),` for all single-code-point `,(0,n.jsx)(r.code,{children:`x`}),`?`]}),`
`,(0,n.jsxs)(r.p,{children:[`The answer is `,(0,n.jsx)(r.strong,{children:`no`}),`. If `,(0,n.jsx)(r.code,{children:`x`}),` is not a part of an isolated node or a pair (the other 135 characters), then you always end up different from where you started. However these characters are actually quite rare, so for 97% of the time, the answer is yes.`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Do `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` become reverse operations after applying a `,(0,n.jsx)(r.code,{children:`toUpperCase`}),`? After applying a `,(0,n.jsx)(r.code,{children:`toLowerCase`}),`?`]}),`
`,(0,n.jsxs)(r.p,{children:[`This is to ask, is it true that either `,(0,n.jsx)(r.code,{children:`x.toUpperCase() === x.toUpperCase().toLowerCase().toUpperCase()`}),` or `,(0,n.jsx)(r.code,{children:`x.toLowerCase() === x.toLowerCase().toUpperCase().toLowerCase()`}),` for all single-code-point `,(0,n.jsx)(r.code,{children:`x`}),`?`]}),`
`,(0,n.jsxs)(r.p,{children:[`The answer is unfortunately still `,(0,n.jsx)(r.strong,{children:`no`}),`, because a single `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` or `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` is not sufficient to move into a steady state. Namely, if `,(0,n.jsx)(r.code,{children:`x`}),` is ẞ (the end of the path-and-pair group), you must apply `,(0,n.jsx)(r.code,{children:`x.toLowerCase().toUpperCase()`}),` to arrive at steady state "SS". For all other characters, the answer is yes.`]}),`
`,(0,n.jsxs)(r.h3,{children:[`What's the maximum number of strings one can reach by repeatedly applying `,(0,n.jsx)(r.code,{children:`toUpperCase`}),` and `,(0,n.jsx)(r.code,{children:`toLowerCase`}),` on a single character?`]}),`
`,(0,n.jsxs)(r.p,{children:[`The answer is 4, and is always in the order of `,(0,n.jsx)(r.code,{children:`x`}),`, `,(0,n.jsx)(r.code,{children:`x.toLowerCase()`}),`, `,(0,n.jsx)(r.code,{children:`x.toLowerCase().toUpperCase()`}),`, `,(0,n.jsx)(r.code,{children:`x.toLowerCase().toUpperCase().toLowerCase()`}),`. `,(0,n.jsx)(r.code,{children:`x`}),` is either ẞ (ẞ → ß → SS → ss) or one of the 27 uppercase Greek letters with prosgegrammeni (e.g. ᾈ → ᾀ → ἈΙ → ἀι).`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}i.meta={description:`Properties of the default Unicode case conversion algorithm: interaction between uppercase/lowercase and case mapping variance, structure of the mapping graph, and functional properties.`,title:`Unicode case mapping study`};export{i as default};