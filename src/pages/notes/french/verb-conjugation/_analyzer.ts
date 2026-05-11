import FS from "node:fs/promises";

// CSpell:disable

type Cell = undefined | string | [string, string];
type Row = [string, ...Cell[]];

const data = (
  await FS.readFile(
    `${process.cwd()}/../french-inflections/french-verb-conjugation.csv`,
    "utf-8",
  )
).trim();
const names = data.split("\n")[0]!.split(",");
const compoundVerbCol = names.indexOf("compound verb");
const inflectionsRaw = data
  .split("\n")
  .slice(1)
  .map((line) => {
    const n = line.split(",");
    n.splice(compoundVerbCol, 1);
    return n;
  });
names.splice(compoundVerbCol, 1);

let inflections: Row[] = inflectionsRaw.map(
  (row) =>
    row.map((cell) => {
      if (!cell) return undefined;
      if (cell.includes(";")) {
        const parts = cell.split(";");
        if (parts.length !== 2)
          throw new Error(`Unexpected number of parts in cell: ${cell}`);
        if (!parts[0] || !parts[1])
          throw new Error(`Unexpected empty part in cell: ${cell}`);
        return [parts[0], parts[1]] as [string, string];
      }
      return cell;
    }) as Row,
);

function dedupeInfinitive(infinitive: string) {
  const rows = inflections.filter((x) => x[0] === infinitive);
  if (rows.length !== 2) throw new Error(`Expected two ${infinitive}`);
  for (let i = 0; i < rows[0]!.length; i++) {
    rows[0]![i] = cellMap(rows[0]![i], (word) => `1${word}`);
    rows[1]![i] = cellMap(rows[1]![i], (word) => `2${word}`);
  }
}
dedupeInfinitive("faillir");
dedupeInfinitive("départir");
dedupeInfinitive("ressortir");

function mapPreserveProps<E, E2>(arr: E[], fn: (e: E) => E2): E2[] {
  const arr2 = arr.map(fn);
  // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/no-for-in-array
  for (const prop in arr)
    // @ts-expect-error: copy extra properties
    if (Number.isNaN(Number(prop))) arr2[prop] = arr[prop];
  return arr2;
}

function conjugation(row: Row, form: string) {
  const index = names.indexOf(form);
  if (index === -1) throw new Error(`Form "${form}" not found`);
  return row[index];
}

function cellSatisfies(cell: Cell, predicate: (word: string) => boolean) {
  if (typeof cell === "undefined") return true;
  if (typeof cell === "string") return predicate(cell);
  return cell.every(predicate);
}

function cellMap<T>(
  cell: Cell,
  fn: (word: string) => T,
): undefined | T | [T, T] {
  if (typeof cell === "undefined") return undefined;
  if (typeof cell === "string") return fn(cell);
  return [fn(cell[0]), fn(cell[1])] as [T, T];
}

function cellEq(a: Cell, b: Cell) {
  if (typeof a !== typeof b) return false;
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b) && a[0] === b[0] && a[1] === b[1])
    return true;
  return false;
}

function serializeCell(cell: Exclude<Cell, undefined>): string;
function serializeCell(cell: Cell): string | undefined;
function serializeCell(cell: Cell) {
  if (typeof cell === "undefined") return undefined;
  if (typeof cell === "string") return cell;
  return cell.join(";");
}

function extractCommonPrefix(strs: string[], keepAtLeast: number) {
  strs = strs.filter((s) => s.length >= keepAtLeast && s.length > 0);
  if (strs.length === 0) return "";
  let prefix = "";
  const maxPrefixLen = Math.min(...strs.map((s) => s.length)) - keepAtLeast;
  for (let i = 0; i < maxPrefixLen; i++) {
    const char = strs[0]![i]!;
    if (strs.every((s) => s[i] === char)) prefix += char;
    else break;
  }
  return prefix;
}

type Conjugation = { roots: Cell[]; label: string };

type CharTreeBase = { name: string; conjugation?: Conjugation; size: number };

type CharTree = CharTreeBase & {
  children: { [char: string]: CharTree };
  terminal?: Required<CharTreeBase>;
};

function conjugationEqual(a: Conjugation, b: Conjugation) {
  if (a.label !== b.label) return false;
  if (a.roots.length !== b.roots.length)
    throw new Error(`Unexpected roots length mismatch`);
  for (let j = 0; j < a.roots.length; j++) {
    const r1 = a.roots[j];
    const r2 = b.roots[j];
    if (typeof r1 === "undefined" || typeof r2 === "undefined") continue;
    if (typeof r1 === "string" && typeof r2 === "string") {
      if (r1 !== r2) return false;
    } else if (Array.isArray(r1) && Array.isArray(r2)) {
      if (r1[0] !== r2[0] || r1[1] !== r2[1]) return false;
    } else {
      return false;
    }
  }
  return true;
}

function mergeConjugations(a: Conjugation, b: Conjugation): Conjugation {
  return { roots: a.roots.map((x, i) => x ?? b.roots[i]), label: a.label };
}

function label(table: Cell[][], labels: string[]) {
  const noBase = table.filter((r) => typeof r[0] === "undefined");
  if (noBase.length > 0) {
    console.table(noBase);
    throw new Error("Unexpected baseless rows");
  }
  const labeled = table.map((row): Cell[] => {
    const matchingLabel = labels.find((ending) => {
      const endings = ending.split("/");
      if (endings.length !== row.length) {
        throw new Error(
          `Row length doesn't match ending's length: ${ending} ${row}`,
        );
      }
      return endings.every((e, i) => {
        if (e.endsWith("!")) {
          if (!row[i]) return false;
          e = e.slice(0, -1);
        }
        return cellSatisfies(row[i], (word) => word.endsWith(e));
      });
    });
    if (!matchingLabel) {
      const commonPrefix = extractCommonPrefix(
        row.filter((cell) => cell !== undefined).flat(),
        0,
      );
      return [
        row[0] as string,
        "Other",
        ...row.map((x) =>
          cellMap(x, (word) => word.slice(commonPrefix.length)),
        ),
      ];
    }
    const endings = matchingLabel.split("/");
    const commonPrefix = extractCommonPrefix(
      row.filter((cell) => cell !== undefined).flat(),
      // Hack to ensure that neigeons - neigeait doesn't get a common prefix
      // of "neige" which would be different from other -geons just because
      // it lacks -ions and -iez forms
      row.includes(undefined)
        ? cellSatisfies(row[0], (word) => word.endsWith("eons"))
          ? 4
          : cellSatisfies(row[0], (word) => word.endsWith("ger"))
            ? 2
            : Math.min(...endings.map((x) => x.length))
        : Math.min(...endings.map((x) => x.length)),
    );
    return [
      row[0],
      matchingLabel,
      ...row.map((x, i) => {
        let e = endings[i]!;
        if (e.endsWith("!")) e = e.slice(0, -1);
        return cellMap(x, (word) =>
          word.slice(0, -e.length || Infinity).slice(commonPrefix.length),
        );
      }),
    ];
  });
  return [
    labeled.filter((row) => typeof row[0] !== "string"),
    labeled.filter((row) => typeof row[0] === "string") as Row[],
  ] as const;
}

function coalesceConjugations(table: Row[]) {
  const tree: CharTree = { name: "", children: {}, size: 0 };
  for (const row of table) {
    // eslint-disable-next-line prefer-destructuring
    const base = row[0];
    const label = row[1] as string;
    const roots = row.slice(2);
    let node = tree;
    for (const char of base.split("").reverse()) {
      node.children[char] ??= { name: char + node.name, children: {}, size: 0 };
      node.size++;
      node = node.children[char];
    }
    if (node.terminal) {
      if (!conjugationEqual(node.terminal.conjugation, { roots, label })) {
        console.dir(node.terminal.conjugation, { depth: null });
        console.dir({ roots, label }, { depth: null });
        throw new Error(`Unexpected terminal conflict for base "${base}"`);
      }
      continue;
    }
    node.size++;
    node.terminal = { name: base, conjugation: { roots, label }, size: 1 };
  }

  function rewriteName(node: CharTree) {
    if (!node.terminal && Object.keys(node.children).length === 1) {
      let cur = Object.values(node.children)[0]!;
      const path = [node];
      while (!cur.terminal && Object.keys(cur.children).length === 1) {
        path.push(cur);
        cur = Object.values(cur.children)[0]!;
      }
      const endName = cur.name;
      for (let i = 1; i <= path.length; i++) {
        const n = path.at(-i)!;
        n.name = `${n.size > 1 ? "-" : ""}(${endName.slice(0, i)})${endName.slice(i)}`;
      }
      rewriteName(cur);
      return;
    }
    for (const c of Object.values(node.children)) rewriteName(c);
    if (node.size > 1) node.name = `-${node.name}`;
  }
  rewriteName(tree);

  function propagateConjugation(node: CharTree) {
    for (const child of Object.values(node.children))
      propagateConjugation(child);
    if (Object.values(node.children).some((x) => !x.conjugation)) return;
    const subtreeConjugations: CharTreeBase[] = Object.values(node.children);
    if (node.terminal) subtreeConjugations.push(node.terminal);
    if (subtreeConjugations.length === 0) return;
    const categories: CharTreeBase[][] = [];
    for (const con of subtreeConjugations) {
      const cat = categories.find((x) =>
        x.every((y) => conjugationEqual(con.conjugation!, y.conjugation!)),
      );
      if (!cat) categories.push([con]);
      else cat.push(con);
    }
    if (categories.length === 1) {
      node.conjugation = categories[0]!
        .map((x) => x.conjugation!)
        .reduce(mergeConjugations);
      for (const child of Object.values(node.children))
        delete child.conjugation;
    }
  }
  propagateConjugation(tree);

  function sortChildren(node: CharTree) {
    const sortedChildren: { [char: string]: CharTree } = {};
    for (const char of Object.keys(node.children).sort((a, b) =>
      a.localeCompare(b),
    ))
      sortedChildren[char] = node.children[char]!;
    node.children = sortedChildren;
    for (const child of Object.values(node.children)) sortChildren(child);
  }
  sortChildren(tree);
  return tree;
}

function retrieveConjugations(
  root: CharTree,
  recodeRoots?: (
    group: string,
    roots: (string | undefined)[],
  ) => (string | undefined)[],
): unknown[][] {
  const alternations: {
    [suffix: string]: [string, (string | undefined)[], number];
  } = {};
  function traverse(node: CharTree) {
    if (node.conjugation) {
      alternations[node.name] = [
        node.conjugation.label,
        node.conjugation.roots.map(serializeCell),
        node.size,
      ];
      if (recodeRoots) {
        alternations[node.name]![1] = recodeRoots(
          node.conjugation.label,
          alternations[node.name]![1],
        );
      }
      return;
    } else if (node.terminal) {
      alternations[node.terminal.name] = [
        node.terminal.conjugation.label,
        node.terminal.conjugation.roots.map(serializeCell),
        1,
      ];
      if (recodeRoots) {
        alternations[node.terminal.name]![1] = recodeRoots(
          node.terminal.conjugation.label,
          alternations[node.terminal.name]![1],
        );
      }
    }
    for (const child of Object.values(node.children)) traverse(child);
  }
  traverse(root);
  const reverseMap: [[string, Cell[]], [string, number][]][] = [];
  for (const [suffix, [label, roots, count]] of Object.entries(alternations)) {
    const row = reverseMap.find(
      (r) => r[0][0] === label && r[0][1].every((x, i) => cellEq(x, roots[i])),
    );
    if (!row) reverseMap.push([[label, roots], [[suffix, count]]]);
    else row[1].push([suffix, count]);
  }
  return reverseMap.map((r) => [
    r[1].map((x) => x[0]).join(", "),
    r[0][0],
    ...r[0][1],
    r[1].length === 1 ? r[1][0]![1] : r[1].map((x) => x[1]),
  ]);
}

function inferConjugation(row: Row, form: string) {
  const existing = conjugation(row, form);
  if (existing) return existing;
  // eslint-disable-next-line prefer-destructuring
  const inf = row[0];
  let base = undefined as string | undefined;
  let suffix = undefined as string | undefined;
  if (inf.endsWith("er")) {
    base = inf.slice(0, -2);
    suffix = {
      "present 1sg": "e",
      "present 2sg": "es",
      "present 3sg": "e",
      "present 1pl": inf.endsWith("ger") ? "eons" : "ons",
      "present 2pl": "ez",
      "present 3pl": "ent",
    }[form as never];
  } else if (inf.endsWith("vre")) {
    base = inf.slice(0, -3);
    suffix = {
      "present 1sg": "s",
      "present 2sg": "s",
      "present 3sg": "t",
      "present 1pl": "vons",
      "present 2pl": "vez",
      "present 3pl": "vent",
    }[form as never];
  } else if (inf.endsWith("choir")) {
    base = inf.slice(0, -3);
    suffix = {
      "present 1sg": "ois",
      "present 2sg": "ois",
      "present 3sg": "oit",
      "present 1pl": "oyons",
      "present 2pl": "oyez",
      "present 3pl": "oient",
    }[form as never];
  } else if (inf.endsWith("voir")) {
    base = inf.slice(0, -4);
    suffix = {
      "present 1sg": "s",
      "present 2sg": "s",
      "present 3sg": "t",
      "present 1pl": "vons",
      "present 2pl": "vez",
      "present 3pl": "vent",
    }[form as never];
  } else if (inf === "falloir") {
    base = "";
    suffix = {
      "present 1sg": "faux",
      "present 2sg": "faux",
      "present 3sg": "faut",
      "present 1pl": "fallons",
      "present 2pl": "fallez",
      "present 3pl": "fallent",
    }[form as never];
  } else if (inf.endsWith("rire")) {
    base = inf.slice(0, -2);
    suffix = {
      "present 1sg": "s",
      "present 2sg": "s",
      "present 3sg": "t",
      "present 1pl": "ons",
      "present 2pl": "ez",
      "present 3pl": "ent",
    }[form as never];
  } else if (inf.endsWith("saillir")) {
    base = inf.slice(0, -2);
    suffix = {
      "present 1sg": "e",
      "present 2sg": "es",
      "present 3sg": "e",
      "present 1pl": "ons",
      "present 2pl": "ez",
      "present 3pl": "ent",
    }[form as never];
  }
  if (suffix === undefined || base === undefined)
    throw new Error(`Can't infer conjugation for ${inf} ${form}`);
  return `${base}${suffix}`;
}

const obsoleteWords = new Set([
  "copier-coller",
  "ruisseller",
  "estre",
  "brusler",
  "esloigner",
  "esposer",
  "resver",
  "oevrer",
]);
inflections = inflections.filter((row) => !obsoleteWords.has(row[0]));

console.log("initial", inflections.length);
console.log("-er", inflections.filter((x) => x[0].endsWith("er")).length);
console.log(
  "-ir",
  inflections.filter((x) => x[0].endsWith("ir") && !x[0].endsWith("oir"))
    .length,
);
console.log("-oir", inflections.filter((x) => x[0].endsWith("oir")).length);
console.log("-re", inflections.filter((x) => x[0].endsWith("re")).length);
console.log("-ïr", inflections.filter((x) => x[0].endsWith("ïr")).length);

// eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
switch (process.argv[2]) {
  case "present": {
    const present = inflections.map((row) => [
      row[0],
      ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
        conjugation(row, `present ${p}`),
      ),
    ]);
    const endings = [
      "er/e/es/e/ons/ez/ent",
      "ir/e/es/e/ons/ez/ent",
      "r/s/s/t/ssons!/ssez/ssent",
      "tre/s/s/t/ssons!/ssez/ssent",
      "re/s/s/t/ssons!/ssez/ssent",
      "re/s/s//ons/ez/ent",
      "oir/s/s//ons/ez/ent",
      "ir/s/s//ons/ez/ent",
    ];
    const [, presentLabeled] = label(present, endings);
    const table = retrieveConjugations(
      coalesceConjugations(presentLabeled),
      (group, roots) => {
        if (group === "er/e/es/e/ons/ez/ent") {
          const m1 = /^é(?<x>[^aeiou]{1,2}|gu|qu)$/u.exec(roots[0]!);
          if (m1) {
            if (
              [roots[1], roots[2], roots[3], roots[6]].every(
                (x) => x === `è${m1.groups!.x!}`,
              ) &&
              [roots[4], roots[5]].every((x) => x === `é${m1.groups!.x!}`)
            )
              return ["éX", "èX", "èX", "èX", "éX", "éX", "èX"];
          }
          const m2 = /^e(?<x>[^aeiou]{1,2}|gu|qu)$/u.exec(roots[0]!);
          if (m2 && !["t", "l"].includes(m2.groups!.x!)) {
            if (
              [roots[1], roots[2], roots[3], roots[6]].every(
                (x) => x === `è${m2.groups!.x!}`,
              ) &&
              [roots[4], roots[5]].every((x) => x === `e${m2.groups!.x!}`)
            )
              return ["eX", "èX", "èX", "èX", "eX", "eX", "èX"];
          }
        } else if (group === "ir/s/s//ons/ez/ent") {
          if (
            roots[0]!.length === 1 &&
            [roots[4], roots[5], roots[6]].every((x) => x === roots[0]) &&
            roots[1] === "" &&
            roots[2] === "" &&
            roots[3] === "t"
          )
            return ["X", "", "", "t", "X", "X", "X"];
        }
        return roots;
      },
    );
    const infBySuffix = Object.fromEntries(
      Object.entries(
        Object.groupBy(
          table,
          (row) => (row[1] as string).split("/").slice(1).join("/") || "Other",
        ),
      ).map(([k, rows]) => {
        const counts = { er: 0, ir: 0, oir: 0, re: 0, ïr: 0 };
        for (const row of rows!) {
          const endings = (row[0] as string).split(", ");
          const nums = row.at(-1);
          const count =
            typeof nums === "number"
              ? nums
              : (nums as number[]).reduce((a, b) => a + b);
          if (endings.every((x) => x.endsWith("oir"))) counts.oir += count;
          else if (endings.every((x) => x.endsWith("ir"))) counts.ir += count;
          else if (endings.every((x) => x.endsWith("er"))) counts.er += count;
          else if (endings.every((x) => x.endsWith("re"))) counts.re += count;
          else if (endings.every((x) => x.endsWith("ïr"))) counts.ïr += count;
          else throw new Error(`Unexpected mixed group: ${row[0]}`);
        }
        return [k, counts];
      }),
    );

    const knownGroups = {
      "« -er (Group 1) »": {
        1: "er/e/es/e/ons/ez/ent",
        ...Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i + 2, ""])),
      },
      "« -ir (Group 1) »": { 1: "ir/e/es/e/ons/ez/ent" },
      "« -ir (Group 2) »": {
        1: "r/s/s/t/ssons!/ssez/ssent",
        ...Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i + 2, ""])),
      },
      "« -eler (optional double) »": { 1: "er/e/es/e/ons/ez/ent", 3: "èl;ell" },
      "« -eter (optional double) »": { 1: "er/e/es/e/ons/ez/ent", 3: "èt;ett" },
      "« -eler (never double) »": { 1: "er/e/es/e/ons/ez/ent", 3: "èl" },
      "« -eter (never double) »": { 1: "er/e/es/e/ons/ez/ent", 3: "èt" },
      "« -éXer »": { 1: "er/e/es/e/ons/ez/ent", 2: "éX" },
      "« -eXer »": { 1: "er/e/es/e/ons/ez/ent", 2: "eX" },
      "« -cer »": { 1: "er/e/es/e/ons/ez/ent", 6: "ç" },
      "« -ger »": { 1: "er/e/es/e/ons/ez/ent", 6: "e" },
      "« -Xir »": { 1: "ir/s/s//ons/ez/ent", 2: "X" },
      "« -ire (Regular) »": {
        1: "re/s/s//ons/ez/ent",
        ...Object.fromEntries(
          ["", "", "", "t", "s", "s", "s"].map((v, i) => [i + 2, v]),
        ),
      },
      "« -dre (Regular) »": {
        1: "re/s/s//ons/ez/ent",
        ...Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i + 2, ""])),
      },
    };

    const groupEndings: { [group: string]: string } = {};

    for (const [groupName, groupInfo] of Object.entries(knownGroups)) {
      const row = table.find((r) =>
        Object.entries(groupInfo).every(([i, ending]) =>
          cellEq(r[Number(i)] as Cell, ending),
        ),
      )!;
      const endings = row[0] as string;
      row[0] = groupName;
      row[9] = (row[9] as number[]).reduce((a, b) => a + b);
      groupEndings[groupName] = endings;
    }

    table.sort(
      (a, b) =>
        endings.indexOf(a[1] as string) - endings.indexOf(b[1] as string),
    );

    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    for (const [groupName, endings] of Object.entries(groupEndings))
      console.log(`${groupName} = ${endings}`);
    console.table(infBySuffix);
    break;
  }
  case "imperfect": {
    const imperfect = inflections.map((row) => [
      inferConjugation(row, "present 1pl"),
      ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
        conjugation(row, `imperfect ${p}`),
      ),
    ]);

    const [imperfectMultiBase, imperfectLabeled] = label(imperfect, [
      "ons/ais/ais/ait/ions/iez/aient",
      "ons/ois/ois/oit/ions/iez/oient",
    ]);

    const table1 = retrieveConjugations(coalesceConjugations(imperfectLabeled));
    const regular = table1.find(
      (r) =>
        r[1] === "ons/ais/ais/ait/ions/iez/aient" &&
        r.slice(2, 9).every((x) => x === ""),
    )!;
    regular[0] = "Regular";
    regular[9] = (regular[9] as number[]).reduce((a, b) => a + b);

    console.table(table1.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.table(
      imperfectMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    break;
  }
  case "future": {
    const future = inflections.map((row) => [
      row[0],
      ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
        conjugation(row, `future ${p}`),
      ),
      ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
        conjugation(row, `conditional ${p}`),
      ),
    ]);

    const [, futureLabeled] = label(future, [
      "/ai/as/a/ons/ez/ont/ais/ais/ait/ions/iez/aient",
    ]);
    const table = retrieveConjugations(
      coalesceConjugations(futureLabeled),
      (group, roots) => {
        const m1 = /^é(?<x>[^aeiou]{1,2}|gu|qu)er$/u.exec(roots[0]!);
        if (m1) {
          if (
            roots
              .slice(1, 7)
              .every((x) => x === `è${m1.groups!.x!}er;é${m1.groups!.x!}er`)
          )
            return ["éXer", ...Array<string>(12).fill("èXer;éXer")];
        }
        const m2 = /^e(?<x>[^aeiou]{1,2}|gu|qu)er$/u.exec(roots[0]!);
        if (m2 && !["t", "l"].includes(m2.groups!.x!)) {
          if (roots.slice(1, 7).every((x) => x === `è${m2.groups!.x!}er`))
            return ["eXer", ...Array<string>(12).fill("èXer")];
        }
        return roots;
      },
    );

    const knownGroups = {
      "« Regular »": {
        ...Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i + 2, ""])),
      },
      "« -re (Regular) »": {
        2: "e",
        ...Object.fromEntries(Array.from({ length: 6 }, (_, i) => [i + 3, ""])),
      },
      "« -eler (optional double) »": { 3: "èler;eller" },
      "« -eter (optional double) »": { 3: "èter;etter" },
      "« -eler (never double) »": { 3: "èler" },
      "« -eter (never double) »": { 3: "èter" },
      "« -éXer »": { 2: "éXer" },
      "« -eXer »": { 2: "eXer" },
      "« -oyer, -uyer »": { 2: "yer", 3: "ier" },
    };

    const groupEndings: { [group: string]: string } = {};

    for (const [groupName, groupInfo] of Object.entries(knownGroups)) {
      const row = table.find((r) =>
        Object.entries(groupInfo).every(([i, ending]) =>
          cellEq(r[Number(i)] as Cell, ending),
        ),
      )!;
      const endings = row[0] as string;
      row[0] = groupName;
      if (Array.isArray(row[15]))
        row[15] = (row[15] as number[]).reduce((a, b) => a + b);
      groupEndings[groupName] = endings;
    }

    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    for (const [groupName, endings] of Object.entries(groupEndings))
      console.log(`${groupName} = ${endings}`);
    break;
  }
  case "subjunctive": {
    const subjunctive1 = inflections.map((row) => [
      inferConjugation(row, "present 3pl"),
      ...["1sg", "2sg", "3sg", "3pl"].map((p) =>
        conjugation(row, `subjunctive present ${p}`),
      ),
    ]);

    const subjunctive2 = inflections.map((row) => [
      inferConjugation(row, "present 1pl"),
      ...["1pl", "2pl"].map((p) =>
        conjugation(row, `subjunctive present ${p}`),
      ),
    ]);

    const [subjunctive1MultiBase, subjunctive1Labeled] = label(subjunctive1, [
      "ent/e/es/e/ent",
    ]);
    const [subjunctive2MultiBase, subjunctive2Labeled] = label(subjunctive2, [
      "ons/ions/iez",
    ]);

    const table1 = retrieveConjugations(
      coalesceConjugations(subjunctive1Labeled),
    );
    const regular = table1.find(
      (r) => r[1] === "ent/e/es/e/ent" && r.slice(2, 6).every((x) => x === ""),
    )!;
    const regularEndings = regular[0] as string;
    regular[0] = "« Regular »";
    regular[7] = (regular[7] as number[]).reduce((a, b) => a + b);

    const table2 = retrieveConjugations(
      coalesceConjugations(subjunctive2Labeled),
    );
    const regular2 = table2.find(
      (r) => r[1] === "ons/ions/iez" && r.slice(2, 5).every((x) => x === ""),
    )!;
    const regular2Endings = regular2[0] as string;
    regular2[0] = "« Regular »";
    regular2[5] = (regular2[5] as number[]).reduce((a, b) => a + b);

    console.table(table1.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${regularEndings}`);
    console.table(table2.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${regular2Endings}`);
    console.table(
      subjunctive1MultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    console.table(
      subjunctive2MultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    break;
  }
  case "imperative": {
    const imp2sg = inflections.map((row) => [
      inferConjugation(row, "present 2sg"),
      conjugation(row, "imperative 2sg"),
    ]);
    const imp1pl = inflections.map((row) => [
      inferConjugation(row, "present 1pl"),
      conjugation(row, "imperative 1pl"),
    ]);
    const imp2pl = inflections.map((row) => [
      inferConjugation(row, "present 2pl"),
      conjugation(row, "imperative 2pl"),
    ]);

    const [imp2sgMultiBase, imp2sgLabeled] = label(imp2sg, ["es/e", "/"]);
    const [imp1plMultiBase, imp1plLabeled] = label(imp1pl, ["/"]);
    const [imp2plMultiBase, imp2plLabeled] = label(imp2pl, ["/"]);

    const table1 = retrieveConjugations(coalesceConjugations(imp2sgLabeled));
    const table2 = retrieveConjugations(coalesceConjugations(imp1plLabeled));
    const table3 = retrieveConjugations(coalesceConjugations(imp2plLabeled));
    for (const table of [table1, table2, table3]) {
      for (const row of table) {
        if (Array.isArray(row[4]))
          row[4] = (row[4] as number[]).reduce((a, b) => a + b);
      }
    }
    const table1EsReg = table1.find(
      (r) => r[1] === "es/e" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const table1EsRegEndings = table1EsReg[0] as string;
    table1EsReg[0] = "« -es (Regular) »";
    const table1Reg = table1.find(
      (r) => r[1] === "/" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const table1RegEndings = table1Reg[0] as string;
    table1Reg[0] = "« Regular »";
    const table2Reg = table2.find(
      (r) => r[1] === "/" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const table2RegEndings = table2Reg[0] as string;
    table2Reg[0] = "« Regular »";
    const table3Reg = table3.find(
      (r) => r[1] === "/" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const table3RegEndings = table3Reg[0] as string;
    table3Reg[0] = "« Regular »";
    console.table(table1.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${table1RegEndings}`);
    console.log(`« -es (Regular) » = ${table1EsRegEndings}`);
    console.table(table2.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${table2RegEndings}`);
    console.table(table3.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${table3RegEndings}`);
    console.table(
      imp2sgMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    console.table(
      imp1plMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    console.table(
      imp2plMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")),
    );
    break;
  }
  case "present-participle": {
    const presentParticiple = inflections.map((row) => [
      inferConjugation(row, "present 1pl"),
      conjugation(row, "present participle"),
    ]);
    const [ppMultiBase, ppLabeled] = label(presentParticiple, ["ons/ant"]);
    const table = retrieveConjugations(coalesceConjugations(ppLabeled));
    const regular = table.find(
      (r) => r[1] === "ons/ant" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const regularEndings = regular[0] as string;
    regular[0] = "« Regular »";
    regular[4] = (regular[4] as number[]).reduce((a, b) => a + b);
    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« Regular » = ${regularEndings}`);
    console.table(ppMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    break;
  }
  case "past-participle": {
    const pastParticiple = inflections.map((row) => [
      row[0],
      conjugation(row, "past participle"),
    ]);
    const endings = [
      "er/é",
      "oir/u",
      "oir/û",
      "ir/i",
      "ïr/ï",
      "ir/u",
      "re/u",
      "re/û",
    ];
    const [, ppLabeled] = label(pastParticiple, endings);
    const table = retrieveConjugations(coalesceConjugations(ppLabeled));
    const regularIr = table.find(
      (r) => r[1] === "ir/i" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const regularIrEndings = regularIr[0] as string;
    regularIr[0] = "« -ir (Regular) »";
    regularIr[4] = (regularIr[4] as number[]).reduce((a, b) => a + b);
    const regularRe = table.find(
      (r) => r[1] === "re/u" && r.slice(2, 4).every((x) => x === ""),
    )!;
    const regularReEndings = regularRe[0] as string;
    regularRe[0] = "« -re (Regular) »";
    table.sort(
      (a, b) =>
        endings.indexOf(a[1] as string) - endings.indexOf(b[1] as string),
    );
    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« -ir (Regular) » = ${regularIrEndings}`);
    console.log(`« -re (Regular) » = ${regularReEndings}`);
    break;
  }
  case "past-historic": {
    const pastHistoric = inflections
      // Defective word with identical PP as something else:
      // plaire (plu) and pouvoir (pu)
      .filter((row) => row[0] !== "pleuvoir" && row[0] !== "paître")
      .map((row) => [
        conjugation(row, "past participle") ?? row[0],
        ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
          conjugation(row, `past historic ${p}`),
        ),
      ]);

    const endings = [
      "é/ai/as/a/âmes/âtes/èrent",
      "i/is/is/it/îmes/îtes/irent",
      "is/is/is/it/îmes/îtes/irent",
      "it/is/is/it/îmes/îtes/irent",
      "int/is/is/it/îmes/îtes/irent",
      "ï/ïs/ïs/ït/ïmes/ïtes/ïrent",
      "u/us/us/ut/ûmes/ûtes/urent",
      "us/us/us/ut/ûmes/ûtes/urent",
      "û/us/us/ut/ûmes/ûtes/urent",
      "û/ûs/ûs/ût/ûmes/ûtes/urent",
      "û/ûs/ûs/ût/ûmes/ûtes/ûrent",
      "u/is/is/it/îmes/îtes/irent",
      "u/ins/ins/int/înmes/întes/inrent",
    ];

    const [phMultiBase, phLabeled] = label(pastHistoric, endings);
    const table = retrieveConjugations(coalesceConjugations(phLabeled));
    const regularÉ = table.find(
      (r) =>
        r[1] === "é/ai/as/a/âmes/âtes/èrent" &&
        r.slice(2, 9).every((x) => x === ""),
    )!;
    const regularÉEndings = regularÉ[0] as string;
    regularÉ[0] = "« -é (Regular) »";
    regularÉ[9] = (regularÉ[9] as number[]).reduce((a, b) => a + b);

    const regularI = table.find(
      (r) =>
        r[1] === "i/is/is/it/îmes/îtes/irent" &&
        r.slice(2, 9).every((x) => x === ""),
    )!;
    const regularIEndings = regularI[0] as string;
    regularI[0] = "« -i (Regular) »";
    regularI[9] = (regularI[9] as number[]).reduce((a, b) => a + b);

    const regularU = table.find(
      (r) =>
        r[1] === "u/us/us/ut/ûmes/ûtes/urent" &&
        r.slice(2, 9).every((x) => x === ""),
    )!;
    const regularUEndings = regularU[0] as string;
    regularU[0] = "« -u (Regular) »";
    regularU[9] = (regularU[9] as number[]).reduce((a, b) => a + b);

    table.sort(
      (a, b) =>
        endings.indexOf(a[1] as string) - endings.indexOf(b[1] as string),
    );

    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« -é (Regular) » = ${regularÉEndings}`);
    console.log(`« -i (Regular) » = ${regularIEndings}`);
    console.log(`« -u (Regular) » = ${regularUEndings}`);
    console.table(phMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    break;
  }
  case "subjunctive-imperfect": {
    const subjunctiveImperfect = inflections.map((row) => [
      conjugation(row, "past historic 3sg") ?? row[0],
      ...["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"].map((p) =>
        conjugation(row, `subjunctive imperfect ${p}`),
      ),
    ]);

    const endings = [
      "a/asse/asses/ât/assions/assiez/assent",
      "it/isse/isses/ît/issions/issiez/issent",
      "ït/ïsse/ïsses/ït/ïssions/ïssiez/ïssent",
      "int/insse/insses/înt/inssions/inssiez/inssent",
      "ut/usse/usses/ût/ussions/ussiez/ussent",
      "ût/ûsse/ûsses/ût/ussions/ussiez/ussent",
    ];

    const [siMultiBase, siLabeled] = label(subjunctiveImperfect, endings);
    const table = retrieveConjugations(coalesceConjugations(siLabeled));
    const regularIt = table.find(
      (r) =>
        r[1] === "it/isse/isses/ît/issions/issiez/issent" &&
        r.slice(2, 9).every((x) => x === ""),
    )!;
    const regularItEndings = regularIt[0] as string;
    regularIt[0] = "« -it (Regular) »";
    regularIt[9] = (regularIt[9] as number[]).reduce((a, b) => a + b);

    table.sort(
      (a, b) =>
        endings.indexOf(a[1] as string) - endings.indexOf(b[1] as string),
    );

    console.table(table.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    console.log(`« -it (Regular) » = ${regularItEndings}`);

    console.table(siMultiBase.map((r) => mapPreserveProps(r, (x) => x ?? "/")));
    break;
  }
  default: {
    throw new Error(`Unexpected argument: ${process.argv[2]}`);
  }
}
