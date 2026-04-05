import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,em:`em`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 19`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Monster Messages`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`If a rule matches the message at `,(0,i.jsx)(a.code,{children:`i..j`}),`, that means there exists an alternative `,(0,i.jsx)(a.code,{children:`rule1 rule2`}),` such that `,(0,i.jsx)(a.code,{children:`i..k`}),` matches `,(0,i.jsx)(a.code,{children:`rule1`}),` and `,(0,i.jsx)(a.code,{children:`k..j`}),` matches `,(0,i.jsx)(a.code,{children:`rule2`}),` for some `,(0,i.jsx)(a.code,{children:`k`}),` between `,(0,i.jsx)(a.code,{children:`i`}),` and `,(0,i.jsx)(a.code,{children:`j`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Technically, it's possible that multiple alternatives could match at index `,(0,i.jsx)(a.code,{children:`i`}),` and have different ending indices `,(0,i.jsx)(a.code,{children:`j`}),`, and we don't know which one to pick until we try to match the rest of the message. So we have to return `,(0,i.jsx)(a.em,{children:`all`}),` possible ending indices for a given starting index and rule. Then, as long as `,(0,i.jsx)(a.em,{children:`one`}),` of the matches for rule `,(0,i.jsx)(a.code,{children:`0`}),` is `,(0,i.jsx)(a.code,{children:`0..len(message)`}),`, the message is valid.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`def matches_rule(
    inp: str,
    ind: int,
    id: int,
    rules: dict[int, Union[list[list[int]], Literal['"a"', '"b"']]],
) -> list[int]:
    if ind >= len(inp):
        return []
    rule = rules[id]
    if rule == '"a"':
        return [ind + 1] if inp[ind] == "a" else []
    if rule == '"b"':
        return [ind + 1] if inp[ind] == "b" else []
    end_inds: list[int] = []
    for alternative in rule:
        possible_inds = [ind]
        for part in alternative:
            possible_inds = list(
                itertools.chain.from_iterable(
                    matches_rule(inp, i, part, rules) for i in possible_inds
                )
            )
        end_inds.extend(possible_inds)
    return end_inds
`})}),`
`,(0,i.jsx)(a.p,{children:`It turns out that for part 1, a greedy solution that always picks the first matching alternative works, but this is more general and works for both parts.`}),`
`,(0,i.jsx)(a.p,{children:`I thought I needed to memoize this function or have some heuristic to avoid deep recursion in part 2, but the input is small enough that this brute-force approach finishes in a reasonable time.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`BFS/DFS`],title:`Advent of Code 2020 - Day 19: Monster Messages`,description:`Advent of Code 2020 - Day 19: Monster Messages, a problem that involves BFS/DFS. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:19};export{o as default};