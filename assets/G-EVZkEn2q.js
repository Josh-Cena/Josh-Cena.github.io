import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-DuFX2F1K.js";import{i as n,r}from"./_components-DtU0Oezi.js";var i=e();function a(e){let a={code:`code`,em:`em`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2022 - Problem G`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Out of Order`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`G1: it's like playing scrabble :) The answer is "FORTY FIVE".`}),`
`,(0,i.jsx)(a.p,{children:`In G2, take the letters and sort them by the index. Since we are doing it post hoc, I have this little script.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-js`,children:`function getResult(input) {
  return input
    .split(", ")
    .map((x) => {
      const parts = x.split(":");
      return { index: parseInt(parts[1]), letter: parts[0] };
    })
    .sort((a, b) => a.index - b.index)
    .map((x) => x.letter)
    .join("");
}
`})}),`
`,(0,i.jsx)(a.p,{children:`And the result is: "IVE MADE MY POSITION CLEAR".`}),`
`,(0,i.jsx)(a.p,{children:`In G3, looks like it just has the index and the letter swapped.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-js`,children:`function getResult(input) {
  return input
    .split(", ")
    .map((x) => {
      const parts = x.split(":");
      return { index: parseInt(parts[0]), letter: parts[1] };
    })
    .sort((a, b) => a.index - b.index)
    .map((x) => x.letter)
    .join("");
}
`})}),`
`,(0,i.jsx)(a.p,{children:`The result is "NALPPUKCAB", which doesn't make sense. But if we reverse it, we get "BACKUP PLAN", which is the answer.`}),`
`,(0,i.jsx)(a.p,{children:`In G4, the idea is that "E:RRRL" means you start from the right, go right, right, right, left, and end up at the letter "E". Again this is okay to do manually, but I wrote a script for convenience.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-js`,children:`function getResult(input) {
  const directions = input.split(", ").map((x) => {
    const parts = x.split(":");
    return { letter: parts[0], moves: parts[1] };
  });
  const tree = {};
  for (const { letter, moves } of directions) {
    let node = tree;
    for (const move of moves) {
      if (move === "R") {
        node.right ??= {};
        node = node.right;
      } else {
        node.left ??= {};
        node = node.left;
      }
    }
    node.letter = letter;
  }
  const result = [];
  function dfs(node) {
    if (!node) return;
    if (node.letter) result.push(node.letter);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(tree);
  return result.join("");
}
`})}),`
`,(0,i.jsx)(a.p,{children:`And the answer is: "BRANCHING OUT".`}),`
`,(0,i.jsxs)(a.p,{children:[`In G5, each letter is marked by its two neighbors, so we just start with the start (which has context #_) and keep finding the next letter until we reach the end (which has context _#). For example, here we start with P:#_A. The next one should be A:P_[something], for which we see A:P`,(0,i.jsx)(a.em,{children:`Y, so the next letter is Y. Then we look for Y:A`}),`[something], and we find Y:A_A, etc. Sometimes we may find multiple ways to proceed—for example, we have both T:N_O and T:N_I, so if we know that the current word ends with "NT", the next letter can be either "O" or "I". For a human, you can probably tell based on the part you already decoded. I've again written a script for this, so I'm just exhausting all possibilities. However, I want each item in the list to be used exactly once, so I need to not recurse with the same choice twice, and I should not consider a result that did not use all items as valid.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-js`,children:`function getResult(input) {
  const neighbors = {};
  let lastTwo = null;
  for (const x of input.split(", ")) {
    const parts = x.split(":");
    const letter = parts[0];
    const left = parts[1][0];
    const right = parts[1][2];
    neighbors[left + letter] ??= [];
    neighbors[left + letter].push(right);
    if (left === "#") {
      if (lastTwo) throw new Error("Multiple start letters");
      lastTwo = left + letter;
    }
  }
  if (!lastTwo) throw new Error("No start letter");

  const results = [];
  function dfs(bigram, built) {
    const options = neighbors[bigram];
    if (!options || options.length === 0) return;
    for (let i = 0; i < options.length; i++) {
      const next = options[i];
      if (next === null) continue;
      options[i] = null;
      if (next === "#") {
        const allUsed = Object.values(neighbors).every((options) =>
          options.every((x) => x === null),
        );
        if (allUsed) results.push(built);
      } else {
        dfs(bigram[1] + next, built + next);
      }
      options[i] = next;
    }
  }
  dfs(lastTwo, lastTwo[1]);
  return results;
}
`})}),`
`,(0,i.jsx)(a.p,{children:`The only valid answer is "PAY ATTENTION TO YOUR SURROUNDINGS".`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Computational`,`Puzzle`],title:`NACLO 2022 - Problem G: Out of Order`,description:`NACLO 2022 - Problem G: Out of Order, a problem that involves Computational and Puzzle. Detailed solution and walkthrough.`,year:2022,prob:`G`};export{o as default};