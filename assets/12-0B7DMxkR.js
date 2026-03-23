import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Puzzle`,`Period finding`,`Physics`],title:`Advent of Code 2019 - Day 12: The N-Body Problem`,description:`Advent of Code 2019 - Day 12: The N-Body Problem, a problem that involves Puzzle, Period finding, and Physics. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:12};function o(e){let o={annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,math:`math`,mn:`mn`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 12`,(0,i.jsx)(o.span,{className:`subtitle`,children:`The N-Body Problem`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I had a bit of fun with this one. It could be done in a more boring way, but I used some OOP by making each `,(0,i.jsx)(o.code,{children:`Moon`}),` an object with position and velocity members, and methods to apply gravity from another moon, update its position, and compute its energy. Then, I just pairwise apply gravity, and then update each one's position:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`for (int t = 0; t < 1000; t++) {
    for (auto &moon1 : moons) {
        for (const auto &moon2 : moons) {
            if (&moon1 != &moon2) {
                moon1.apply_gravity(moon2);
            }
        }
    }
    for (auto &moon : moons) {
        moon.apply_velocity();
    }
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`I thought I could just let the simulation run for a while, but it turns out that the cycle is over `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`10`}),(0,i.jsx)(o.mn,{children:`14`})]})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`10^{14}`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`1`}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`0`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`14`})})})]})})})})})]})]})})]}),` steps. (Ballpark: anything over `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`10`}),(0,i.jsx)(o.mn,{children:`9`})]})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`10^9`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`1`}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`0`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`9`})})]})})})})})]})]})})]}),` is too big to brute force in a reasonable time.) However, note that updates in each dimension are independent of the others. So I can just find the cycle length for each dimension separately, then take the least common multiple (LCM) of the three cycle lengths. The cycle finding code looks like this:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`std::set<std::vector<int>> seen_x, seen_y, seen_z;

for (int t = 0; x_cycle == -1 || y_cycle == -1 || z_cycle == -1; t++) {
    // Update moons as before
    if (x_cycle == -1) {
        if (seen_x.count(state_x)) {
            x_cycle = t;
        } else {
            seen_x.insert(state_x);
        }
    }
    // Similarly for y_cycle and z_cycle
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Note that because the update is bijective, if we see a state again, it must be the initial state; otherwise, we would have two distinct previous states that map to the same cycle-start state, which is impossible. So `,(0,i.jsx)(o.code,{children:`x_cycle`}),` is just `,(0,i.jsx)(o.code,{children:`t`}),` and we don't need to store the time we saw each state.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};