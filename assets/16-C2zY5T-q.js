import{u as i,j as e}from"./index-TXYOrs-s.js";import{P as o,a as r}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Constraint satisfaction"],title:"Advent of Code 2020 - Day 16: Ticket Translation",description:"Advent of Code 2020 - Day 16: Ticket Translation, a problem that involves Constraint satisfaction. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:16};function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 16",e.jsx(n.span,{className:"subtitle",children:"Ticket Translation"})]}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Part 1 is straightforward: collect a list of ranges, then for each number in each nearby ticket, check if it falls into any of the ranges."}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"We have a list of sets of values, and we want to find an assignment of the fields such that each set only contains values from the field's range. The first step is to check which fields are possible for each set. For each set, we iterate through all fields and check if all values in the set fall into the range."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`candidate_fields = {i: set(rules.keys()) for i in range(len(valid_tickets[0]))}
for ticket in valid_tickets:
    for i, value in enumerate(ticket):
        impossible_fields = set(
            field
            for field in candidate_fields[i]
            if all(
                value < min_val or value > max_val
                for min_val, max_val in rules[field]
            )
        )
        candidate_fields[i] -= impossible_fields
`})}),`
`,e.jsx(n.p,{children:"Like in any constraint satisfaction problem, once we have the initial candidates, we can propagate constraints. We start with the narrowest constraints, satisfy them, and remove that possibility from all other sets. We repeat this until all sets are satisfied."}),`
`,e.jsxs(n.p,{children:["If we print ",e.jsx(n.code,{children:"candidate_fields"}),", it looks like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-py",children:`{
    14: {'type'},
    12: {'type', 'class'},
    15: {'type', 'arrival location', 'class'},
    0: {'type', 'zone', 'arrival location', 'class'},
    11: {'arrival station', 'type', 'zone', 'arrival location', 'class'},
    ...
}
`})}),`
`,e.jsx(n.p,{children:"It turns out that this problem is very nice: it doesn't even need backtracking. Each step is always deterministic because there's always a constraint with only one possibility. So the field assignments can be found with a simple loop, by sorting the candidate sets by size and removing already-assigned fields from subsequent sets."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`figured_out = set[str]()
for i, s in sorted(candidate_fields.items(), key=lambda x: len(x[1])):
    s.difference_update(figured_out)
    assert len(s) == 1
    figured_out = s.union(figured_out)
fields: list[str] = []
for s in candidate_fields.values():
    fields.append(s.pop())
`})}),`
`,e.jsx(r,{frontMatter:s})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{h as default,s as frontMatter};
