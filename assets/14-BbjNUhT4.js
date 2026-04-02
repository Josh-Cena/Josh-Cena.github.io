import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Recursion`,`Binary search`],title:`Advent of Code 2019 - Day 14: Space Stoichiometry`,description:`Advent of Code 2019 - Day 14: Space Stoichiometry, a problem that involves Recursion and Binary search. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:14};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 14`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Space Stoichiometry`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`Initially I simplified each recipe to "how much ORE is needed to produce 1 unit of X", but I realized that each reaction must be run in whole, so I need to account for leftovers. That is, if I have `,(0,i.jsx)(o.code,{children:`10 ORE => 10 A`}),` and I need 7 A, I have to run the reaction once and have 3 A left, instead of using 7 ORE directly. This also makes memoization a bit tricky, because the number of ORE not just depends on the target chemical and amount, but also the current leftovers. In the end I forewent memoization and just did a straightforward recursive implementation:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`long long num_ores(
    const std::map<std::string, Recipe> &recipes,
    const std::string &name,
    long long quantity,
    std::map<std::string, long long> &leftovers
);
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`This problem just screams "binary search", since the relationship between FUEL produced and ORE consumed is monotonic, and the search space is huge. We just bisect the range `,(0,i.jsx)(o.code,{children:`[0, 1000000000000LL]`}),` (1 fuel requires more than 1 trillion ORES to 1 fuel only requires 1 ORE), each time taking the left half if the midpoint is not feasible with `,(0,i.jsx)(o.code,{children:`1000000000000LL`}),` ores, and the right half otherwise. Technically we can shrink the range slightly, because we know that at least `,(0,i.jsx)(o.code,{children:`1000000000000LL / ores_for_1_fuel`}),` fuel can be produced, but it doesn't really matter, since 1 trillion is just 40 iterations of bisections.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`// [0..left] is feasible, [right..ore_cap] is not
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};