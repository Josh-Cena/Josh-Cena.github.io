import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Data structures`,`Recursion`],title:`Advent of Code 2020 - Day 22: Crab Combat`,description:`Advent of Code 2020 - Day 22: Crab Combat, a problem that involves Data structures and Recursion. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:22};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 22`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Crab Combat`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`This feels back to day 10: literally play the game as asked. The only optimization is to use a `,(0,i.jsx)(o.code,{children:`deque`}),` instead of a list for the players' decks, since we need efficient popping from the front and appending to the back. But since there are only 50 cards in total, even using lists would be fine.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`player1, player2 = [
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Might be surprising that there's really no trick than just faithfully implementing the rules as described. Every single line corresponds to something in the problem statement, so no further explanation is needed.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`def play_game(player1: deque[int], player2: deque[int]):
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};