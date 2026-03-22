import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Dynamic programming`],title:`Advent of Code 2021 - Day 21: Dirac Dice`,description:`Advent of Code 2021 - Day 21: Dirac Dice, a problem that involves Dynamic programming. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:21};function o(e){let o={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 21`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Dirac Dice`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`For part 1, I had a bit of fun and overengineered the solution with classes and generator functions. None of this turned out to be useful for part 2.`}),`
`,(0,i.jsxs)(o.p,{children:[`Here's a die. Iterating it yields the next value. Closing it returns the total number of rolls. (When was the last time you used a `,(0,i.jsx)(o.code,{children:`finally`}),` block or a `,(0,i.jsx)(o.code,{children:`return`}),` in a generator function or... them combined? This feels like an abomination in every way. Heck, `,(0,i.jsx)(o.a,{href:`https://eslint.org/docs/latest/rules/no-unsafe-finally`,children:`ESLint would even be unhappy about it`}),`.)`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function* makeDie() {
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
`,(0,i.jsx)(o.p,{children:`And here's a player.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`class Player {
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
`,(0,i.jsx)(o.p,{children:`The game itself is straightforward.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const die = makeDie();

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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Part 2 required a different approach entirely. It is somewhat like `,(0,i.jsx)(o.a,{href:`/notes/aoc/2021/6/`,children:`day 6`}),` and `,(0,i.jsx)(o.a,{href:`/notes/aoc/2021/14/`,children:`day 14`}),` in that we have many copies of the identical state which propagate the same way, so we just need to put them into bins and count how many are in each bin. The state here is the positions and scores of both players, as a 4D array:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let states = Array.from({ length: 11 }, () =>
  Array.from({ length: 11 }, () =>
    Array.from({ length: 22 }, () => Array.from({ length: 22 }, () => 0)),
  ),
);
`})}),`
`,(0,i.jsx)(o.p,{children:`Initially, there is one universe with both players at their starting positions and zero score:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`states[player1][player2][0][0] = 1;
`})}),`
`,(0,i.jsx)(o.p,{children:`Then, we simulate the game turn by turn, alternating between players. Because each time, the current player's score increases by at least 1, the game ends in at most 42 turns for both players combined.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let player1Wins = 0;
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
`,(0,i.jsx)(o.p,{children:`The states are propagated by enumerating all possible combinations of the current state:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`for (let p1Pos = 1; p1Pos <= 10; p1Pos++) {
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
`,(0,i.jsx)(o.p,{children:`Now, for each state, we enumerate all possible rolls of the three dice. The number of worlds for each roll sum is as follows:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const rolls = [
  [3, 1],
  [4, 3],
  [5, 6],
  [6, 7],
  [7, 6],
  [8, 3],
  [9, 1],
];
`})}),`
`,(0,i.jsx)(o.p,{children:`For each roll, we update the new state accordingly. If a player's score reaches 21, we increment their win count instead.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`for (const [roll, freq] of rolls) {
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
`,(0,i.jsxs)(o.p,{children:[`Note that we have to encode the state as a `,(0,i.jsx)(o.em,{children:`joint`}),` state of both players. If we track states for each player separately, then a dice roll of player 1 would not multiply the number of universes for each state of player 2, leading to a lower count.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};