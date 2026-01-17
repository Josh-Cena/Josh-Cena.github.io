import{u as i,j as e}from"./index-L6ckUcGi.js";import{F as r,a}from"./_components-DB3Df8DK.js";const o={tags:["Recursion","Binary search"],description:"Advent of Code 2019 - Day 14: Space Stoichiometry, a problem that involves Recursion and Binary search. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:14,title:"Advent of Code 2019 - Day 14: Space Stoichiometry"};function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2019 - Day 14",e.jsx(n.span,{className:"subtitle",children:"Space Stoichiometry"})]}),`
`,`
`,e.jsx(r,{frontMatter:o}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:['Initially I simplified each recipe to "how much ORE is needed to produce 1 unit of X", but I realized that each reaction must be run in whole, so I need to account for leftovers. That is, if I have ',e.jsx(n.code,{children:"10 ORE => 10 A"})," and I need 7 A, I have to run the reaction once and have 3 A left, instead of using 7 ORE directly. This also makes memoization a bit tricky, because the number of ORE not just depends on the target chemical and amount, but also the current leftovers. In the end I forewent memoization and just did a straightforward recursive implementation:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`long long num_ores(
    const std::map<std::string, Recipe> &recipes,
    const std::string &name,
    long long quantity,
    std::map<std::string, long long> &leftovers
);
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:['This problem just screams "binary search", since the relationship between FUEL produced and ORE consumed is monotonic, and the search space is huge. We just bisect the range ',e.jsx(n.code,{children:"[0, 1000000000000LL]"})," (1 fuel requires more than 1 trillion ORES to 1 fuel only requires 1 ORE), each time taking the left half if the midpoint is not feasible with ",e.jsx(n.code,{children:"1000000000000LL"})," ores, and the right half otherwise. Technically we can shrink the range slightly, because we know that at least ",e.jsx(n.code,{children:"1000000000000LL / ores_for_1_fuel"})," fuel can be produced, but it doesn't really matter, since 1 trillion is just 40 iterations of bisections."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`// [0..left] is feasible, [right..ore_cap] is not
long long left = 1;
long long right = ore_cap;
while (left <= right) {
    long long mid = (left + right) / 2;
    std::map<std::string, long long> leftovers;
    long long ores = num_ores(recipes, "FUEL", mid, leftovers);
    if (ores <= ore_cap) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
`})}),`
`,e.jsx(a,{frontMatter:o})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default,o as frontMatter};
