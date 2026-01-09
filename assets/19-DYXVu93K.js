import{u as r,j as e}from"./index-tdPHbA8R.js";import{F as o,a}from"./_components-CqTbvCTQ.js";const i={description:"Advent of Code 2020 - Day 19: Monster Messages. Written in Python.",tags:["BFS/DFS"],year:2020,day:19,title:"AoC 2020 D19: Monster Messages"};function s(t){const n={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2020 D19: Monster Messages"}),`
`,`
`,e.jsx(o,{frontMatter:i}),`
`,e.jsxs(n.p,{children:["If a rule matches the message at ",e.jsx(n.code,{children:"i..j"}),", that means there exists an alternative ",e.jsx(n.code,{children:"rule1 rule2"})," such that ",e.jsx(n.code,{children:"i..k"})," matches ",e.jsx(n.code,{children:"rule1"})," and ",e.jsx(n.code,{children:"k..j"})," matches ",e.jsx(n.code,{children:"rule2"})," for some ",e.jsx(n.code,{children:"k"})," between ",e.jsx(n.code,{children:"i"})," and ",e.jsx(n.code,{children:"j"}),"."]}),`
`,e.jsxs(n.p,{children:["Technically, it's possible that multiple alternatives could match at index ",e.jsx(n.code,{children:"i"})," and have different ending indices ",e.jsx(n.code,{children:"j"}),", and we don't know which one to pick until we try to match the rest of the message. So we have to return ",e.jsx(n.em,{children:"all"})," possible ending indices for a given starting index and rule. Then, as long as ",e.jsx(n.em,{children:"one"})," of the matches for rule ",e.jsx(n.code,{children:"0"})," is ",e.jsx(n.code,{children:"0..len(message)"}),", the message is valid."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def matches_rule(
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
`,e.jsx(n.p,{children:"It turns out that for part 1, a greedy solution that always picks the first matching alternative works, but this is more general and works for both parts."}),`
`,e.jsx(n.p,{children:"I thought I needed to memoize this function or have some heuristic to avoid deep recursion in part 2, but the input is small enough that this brute-force approach finishes in a reasonable time."}),`
`,e.jsx(a,{frontMatter:i})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default,i as frontMatter};
