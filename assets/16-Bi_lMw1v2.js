import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2021 - Day 16`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Packet Decoder`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`I represent the packet tree as follows:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`type Packet =
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
`,(0,i.jsx)(a.p,{children:`I parse the input into a binary string, then use a recursive descent parser to build the tree. The parser takes the input string and a starting index, and returns the parsed packet and the new index.`}),`
`,(0,i.jsx)(a.p,{children:`First we read the version and type ID:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const version = parseInt(input.slice(index, index + 3), 2);
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
`,(0,i.jsx)(a.p,{children:`If the type ID is 4, we read the literal value by repeatedly reading 5-bit groups until we find one that starts with a 0:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`let valueBits = "";
while (true) {
  const group = input.slice(currentIndex, currentIndex + 5);
  valueBits += group.slice(1);
  currentIndex += 5;
  if (group[0] === "0") break;
}
const value = parseInt(valueBits, 2);
return { packet: { version, typeId, value }, newIndex: currentIndex };
`})}),`
`,(0,i.jsx)(a.p,{children:`Otherwise, we first read the length type ID:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const lengthTypeId = input[currentIndex];
currentIndex += 1;
const subPackets: Packet[] = [];
`})}),`
`,(0,i.jsx)(a.p,{children:`If the length type ID is 0, we read the next 15 bits for the bit length, and then continuously parse sub-packets until we've read that many bits:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const totalLength = parseInt(input.slice(currentIndex, currentIndex + 15), 2);
currentIndex += 15;
const end = currentIndex + totalLength;
while (currentIndex < end) {
  const result = parsePacket(input, currentIndex);
  subPackets.push(result.packet);
  currentIndex = result.newIndex;
}
`})}),`
`,(0,i.jsx)(a.p,{children:`Otherwise, if the length type ID is 1, we read the next 11 bits for the number of sub-packets, and then parse that many sub-packets:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const subPacketsNum = parseInt(input.slice(currentIndex, currentIndex + 11), 2);
currentIndex += 11;
for (let i = 0; i < subPacketsNum; i++) {
  const result = parsePacket(input, currentIndex);
  subPackets.push(result.packet);
  currentIndex = result.newIndex;
}
`})}),`
`,(0,i.jsx)(a.p,{children:`In part 1, we visit this tree to sum all version numbers:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`function sumVersions(packet: Packet): number {
  let sum = packet.version;
  if (packet.typeId !== 4) {
    for (const subPacket of packet.subPackets) {
      sum += sumVersions(subPacket);
    }
  }
  return sum;
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`In part 2, we again visit the tree, this time evaluating the packets based on their type IDs:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`function evaluate(packet: Packet): number {
  if (packet.typeId === 4) {
    return packet.value;
  } else {
    const values = packet.subPackets.map(evaluate);
    return ops[packet.typeId](values);
  }
}
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Where `,(0,i.jsx)(a.code,{children:`ops`}),` is defined as:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const ops = [
  (values: number[]) => values.reduce((a, b) => a + b, 0),
  (values: number[]) => values.reduce((a, b) => a * b, 1),
  (values: number[]) => Math.min(...values),
  (values: number[]) => Math.max(...values),
  (values: number[]) => values[0],
  (values: number[]) => (values[0] > values[1] ? 1 : 0),
  (values: number[]) => (values[0] < values[1] ? 1 : 0),
  (values: number[]) => (values[0] === values[1] ? 1 : 0),
];
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Parsing`],title:`Advent of Code 2021 - Day 16: Packet Decoder`,description:`Advent of Code 2021 - Day 16: Packet Decoder, a problem that involves Parsing. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:16};export{o as default};