import{u as a,j as e}from"./index-Dbnp75iT.js";import{F as c,a as u}from"./_components-CrZycPda.js";const s={tags:["Parsing"],description:"Advent of Code 2021 - Day 16: Packet Decoder, a problem that involves Parsing. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:16,title:"Advent of Code 2021 - Day 16: Packet Decoder"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2021 - Day 16",e.jsx(n.span,{className:"subtitle",children:"Packet Decoder"})]}),`
`,`
`,e.jsx(c,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"I represent the packet tree as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Packet =
  | {
      version: number;
      typeId: 4;
      value: number;
    }
  | {
      version: number;
      typeId: 0 | 1 | 2 | 3 | 5 | 6 | 7;
      subPackets: Packet[];
    };
`})}),`
`,e.jsx(n.p,{children:"I parse the input into a binary string, then use a recursive descent parser to build the tree. The parser takes the input string and a starting index, and returns the parsed packet and the new index."}),`
`,e.jsx(n.p,{children:"First we read the version and type ID:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const version = parseInt(input.slice(index, index + 3), 2);
const typeId = parseInt(input.slice(index + 3, index + 6), 2) as
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
let currentIndex = index + 6;
`})}),`
`,e.jsx(n.p,{children:"If the type ID is 4, we read the literal value by repeatedly reading 5-bit groups until we find one that starts with a 0:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let valueBits = "";
while (true) {
  const group = input.slice(currentIndex, currentIndex + 5);
  valueBits += group.slice(1);
  currentIndex += 5;
  if (group[0] === "0") break;
}
const value = parseInt(valueBits, 2);
return { packet: { version, typeId, value }, newIndex: currentIndex };
`})}),`
`,e.jsx(n.p,{children:"Otherwise, we first read the length type ID:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const lengthTypeId = input[currentIndex];
currentIndex += 1;
const subPackets: Packet[] = [];
`})}),`
`,e.jsx(n.p,{children:"If the length type ID is 0, we read the next 15 bits for the bit length, and then continuously parse sub-packets until we've read that many bits:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const totalLength = parseInt(input.slice(currentIndex, currentIndex + 15), 2);
currentIndex += 15;
const end = currentIndex + totalLength;
while (currentIndex < end) {
  const result = parsePacket(input, currentIndex);
  subPackets.push(result.packet);
  currentIndex = result.newIndex;
}
`})}),`
`,e.jsx(n.p,{children:"Otherwise, if the length type ID is 1, we read the next 11 bits for the number of sub-packets, and then parse that many sub-packets:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const subPacketsNum = parseInt(input.slice(currentIndex, currentIndex + 11), 2);
currentIndex += 11;
for (let i = 0; i < subPacketsNum; i++) {
  const result = parsePacket(input, currentIndex);
  subPackets.push(result.packet);
  currentIndex = result.newIndex;
}
`})}),`
`,e.jsx(n.p,{children:"In part 1, we visit this tree to sum all version numbers:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function sumVersions(packet: Packet): number {
  let sum = packet.version;
  if (packet.typeId !== 4) {
    for (const subPacket of packet.subPackets) {
      sum += sumVersions(subPacket);
    }
  }
  return sum;
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"In part 2, we again visit the tree, this time evaluating the packets based on their type IDs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function evaluate(packet: Packet): number {
  if (packet.typeId === 4) {
    return packet.value;
  } else {
    const values = packet.subPackets.map(evaluate);
    return ops[packet.typeId](values);
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"ops"})," is defined as:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const ops = [
  (values: number[]) => values.reduce((a, b) => a + b, 0),
  (values: number[]) => values.reduce((a, b) => a * b, 1),
  (values: number[]) => Math.min(...values),
  (values: number[]) => Math.max(...values),
  (values: number[]) => values[0],
  (values: number[]) => (values[0] > values[1] ? 1 : 0),
  (values: number[]) => (values[0] < values[1] ? 1 : 0),
  (values: number[]) => (values[0] === values[1] ? 1 : 0),
];
`})}),`
`,e.jsx(u,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,s as frontMatter};
