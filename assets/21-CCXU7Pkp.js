import{u as o,j as e}from"./index-DEJgW3cN.js";import{F as a,a as l}from"./_components-C_Mh6GSJ.js";const r={description:"Advent of Code 2021 - Day 21: Dirac Dice. Written in TypeScript.",tags:["Dynamic programming"],year:2021,day:21,title:"AoC 2021 D21: Dirac Dice"};function s(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D21: Dirac Dice"}),`
`,`
`,e.jsx(a,{frontMatter:r}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"For part 1, I had a bit of fun and overengineered the solution with classes and generator functions. None of this turned out to be useful for part 2."}),`
`,e.jsxs(n.p,{children:["Here's a die. Iterating it yields the next value. Closing it returns the total number of rolls. (When was the last time you used a ",e.jsx(n.code,{children:"finally"})," block or a ",e.jsx(n.code,{children:"return"})," in a generator function or... them combined? This feels like an abomination in every way. Heck, ",e.jsx(n.a,{href:"https://eslint.org/docs/latest/rules/no-unsafe-finally",children:"ESLint would even be unhappy about it"}),".)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function* makeDie() {
  let count = 1;
  try {
    let value = 1;
    while (true) {
      yield value;
      value = (value % 100) + 1;
      count++;
    }
  } finally {
    return count;
  }
}
`})}),`
`,e.jsx(n.p,{children:"And here's a player."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`class Player {
  position: number;
  score: number;

  constructor(startPosition: number) {
    this.position = startPosition;
    this.score = 0;
  }

  move(steps: number) {
    this.position = ((this.position + steps - 1) % 10) + 1;
    this.score += this.position;
  }

  playTurn(die: Generator<number, number, unknown>) {
    let move = 0;
    for (let i = 0; i < 3; i++) {
      move += die.next().value;
    }
    this.move(move);
  }
}
`})}),`
`,e.jsx(n.p,{children:"The game itself is straightforward."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const die = makeDie();

while (player1.score < 1000 && player2.score < 1000) {
  player1.playTurn(die);
  if (player1.score >= 1000) {
    break;
  }
  player2.playTurn(die);
}

const losingScore = Math.min(player1.score, player2.score);
const totalRolls = die.return(-1).value;
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Part 2 required a different approach entirely. It is somewhat like ",e.jsx(n.a,{href:"/notes/aoc/2021/6",children:"day 6"})," and ",e.jsx(n.a,{href:"/notes/aoc/2021/14",children:"day 14"})," in that we have many copies of the identical state which propagate the same way, so we just need to put them into bins and count how many are in each bin. The state here is the positions and scores of both players, as a 4D array:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let states = Array.from({ length: 11 }, () =>
  Array.from({ length: 11 }, () =>
    Array.from({ length: 22 }, () => Array.from({ length: 22 }, () => 0)),
  ),
);
`})}),`
`,e.jsx(n.p,{children:"Initially, there is one universe with both players at their starting positions and zero score:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`states[player1][player2][0][0] = 1;
`})}),`
`,e.jsx(n.p,{children:"Then, we simulate the game turn by turn, alternating between players. Because each time, the current player's score increases by at least 1, the game ends in at most 42 turns for both players combined."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let player1Wins = 0;
let player2Wins = 0;
for (let turn = 0; turn < 42; turn++) {
  const newStates = Array.from({ length: 11 }, () =>
    Array.from({ length: 11 }, () =>
      Array.from({ length: 22 }, () => Array.from({ length: 22 }, () => 0)),
    ),
  );
  // Propagate state...

  states = newStates;
}
`})}),`
`,e.jsx(n.p,{children:"The states are propagated by enumerating all possible combinations of the current state:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`for (let p1Pos = 1; p1Pos <= 10; p1Pos++) {
  for (let p1Score = 0; p1Score < 21; p1Score++) {
    for (let p2Pos = 1; p2Pos <= 10; p2Pos++) {
      for (let p2Score = 0; p2Score < 21; p2Score++) {
        const count = states[p1Pos][p2Pos][p1Score][p2Score];
        if (count === 0) continue;
        // ...
      }
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:"Now, for each state, we enumerate all possible rolls of the three dice. The number of worlds for each roll sum is as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const rolls = [
  [3, 1],
  [4, 3],
  [5, 6],
  [6, 7],
  [7, 6],
  [8, 3],
  [9, 1],
];
`})}),`
`,e.jsx(n.p,{children:"For each roll, we update the new state accordingly. If a player's score reaches 21, we increment their win count instead."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`for (const [roll, freq] of rolls) {
  if (turn % 2 === 0) {
    const newP1Pos = ((p1Pos + roll - 1) % 10) + 1;
    const newP1Score = p1Score + newP1Pos;
    if (newP1Score >= 21) {
      player1Wins += count * freq;
    } else {
      newStates[newP1Pos][p2Pos][newP1Score][p2Score] += count * freq;
    }
  } else {
    const newP2Pos = ((p2Pos + roll - 1) % 10) + 1;
    const newP2Score = p2Score + newP2Pos;
    if (newP2Score >= 21) {
      player2Wins += count * freq;
    } else {
      newStates[p1Pos][newP2Pos][p1Score][newP2Score] += count * freq;
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Note that we have to encode the state as a ",e.jsx(n.em,{children:"joint"})," state of both players. If we track states for each player separately, then a dice roll of player 1 would not multiply the number of universes for each state of player 2, leading to a lower count."]}),`
`,e.jsx(l,{frontMatter:r})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default,r as frontMatter};
