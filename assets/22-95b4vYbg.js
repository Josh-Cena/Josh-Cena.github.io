import{u as l,j as e}from"./index-VHEsq7sr.js";import{P as s,a as d}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Data structures","Recursion"],title:"Advent of Code 2020 - Day 22: Crab Combat",description:"Advent of Code 2020 - Day 22: Crab Combat, a problem that involves Data structures and Recursion. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:22};function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 22",e.jsx(n.span,{className:"subtitle",children:"Crab Combat"})]}),`
`,`
`,e.jsx(s,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["This feels back to day 10: literally play the game as asked. The only optimization is to use a ",e.jsx(n.code,{children:"deque"})," instead of a list for the players' decks, since we need efficient popping from the front and appending to the back. But since there are only 50 cards in total, even using lists would be fine."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`player1, player2 = [
    deque(map(int, x.split("\\n")[1:])) for x in "\\n".join(data).split("\\n\\n")
]
while len(player1) > 0 and len(player2) > 0:
    card1, card2 = player1.popleft(), player2.popleft()
    assert card1 != card2
    if card1 > card2:
        player1.extend([card1, card2])
    else:
        player2.extend([card2, card1])
winner = player1 if len(player1) > 0 else player2
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"Might be surprising that there's really no trick than just faithfully implementing the rules as described. Every single line corresponds to something in the problem statement, so no further explanation is needed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def play_game(player1: deque[int], player2: deque[int]):
    seen = {(tuple(player1), tuple(player2))}
    while len(player1) > 0 and len(player2) > 0:
        card1, card2 = player1.popleft(), player2.popleft()
        assert card1 != card2
        if card1 > len(player1) or card2 > len(player2):
            winner = 1 if card1 > card2 else 2
        else:
            subplayer1, subplayer2 = list(player1)[:card1], list(player2)[:card2]
            winner = play_game(deque(subplayer1), deque(subplayer2))
        if winner == 1:
            player1.extend([card1, card2])
        else:
            player2.extend([card2, card1])
        if (tuple(player1), tuple(player2)) in seen:
            return 1
        seen.add((tuple(player1), tuple(player2)))
    if len(player1) == 0:
        return 2
    else:
        return 1
`})}),`
`,e.jsx(d,{frontMatter:a})]})}function c(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{c as default,a as frontMatter};
