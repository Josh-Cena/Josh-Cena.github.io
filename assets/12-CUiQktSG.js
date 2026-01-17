import{u as i,j as e}from"./index-BVdbyz0p.js";import{F as o,a as l}from"./_components-ozm2G8yB.js";const t={tags:["Puzzle","Period finding","Physics"],description:"Advent of Code 2019 - Day 12: The N-Body Problem, a problem that involves Puzzle, Period finding, and Physics. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:12,title:"Advent of Code 2019 - Day 12: The N-Body Problem"};function a(n){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["Advent of Code 2019 - Day 12",e.jsx(s.span,{className:"subtitle",children:"The N-Body Problem"})]}),`
`,`
`,e.jsx(o,{frontMatter:t}),`
`,e.jsx(s.h2,{children:"Part 1"}),`
`,e.jsxs(s.p,{children:["I had a bit of fun with this one. It could be done in a more boring way, but I used some OOP by making each ",e.jsx(s.code,{children:"Moon"})," an object with position and velocity members, and methods to apply gravity from another moon, update its position, and compute its energy. Then, I just pairwise apply gravity, and then update each one's position:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-cpp",children:`for (int t = 0; t < 1000; t++) {
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
`,e.jsx(s.h2,{children:"Part 2"}),`
`,e.jsxs(s.p,{children:["I thought I could just let the simulation run for a while, but it turns out that the cycle is over ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsx(s.mrow,{children:e.jsxs(s.msup,{children:[e.jsx(s.mn,{children:"10"}),e.jsx(s.mn,{children:"14"})]})}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"10^{14}"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.8141em"}}),e.jsx(s.span,{className:"mord",children:"1"}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord",children:"0"}),e.jsx(s.span,{className:"msupsub",children:e.jsx(s.span,{className:"vlist-t",children:e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mtight",children:e.jsx(s.span,{className:"mord mtight",children:"14"})})})]})})})})})]})]})})]})," steps. (Ballpark: anything over ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsx(s.mrow,{children:e.jsxs(s.msup,{children:[e.jsx(s.mn,{children:"10"}),e.jsx(s.mn,{children:"9"})]})}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"10^9"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.8141em"}}),e.jsx(s.span,{className:"mord",children:"1"}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord",children:"0"}),e.jsx(s.span,{className:"msupsub",children:e.jsx(s.span,{className:"vlist-t",children:e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})})]})," is too big to brute force in a reasonable time.) However, note that updates in each dimension are independent of the others. So I can just find the cycle length for each dimension separately, then take the least common multiple (LCM) of the three cycle lengths. The cycle finding code looks like this:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-cpp",children:`std::set<std::vector<int>> seen_x, seen_y, seen_z;

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
`,e.jsxs(s.p,{children:["Note that because the update is bijective, if we see a state again, it must be the initial state; otherwise, we would have two distinct previous states that map to the same cycle-start state, which is impossible. So ",e.jsx(s.code,{children:"x_cycle"})," is just ",e.jsx(s.code,{children:"t"})," and we don't need to store the time we saw each state."]}),`
`,e.jsx(l,{frontMatter:t})]})}function h(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{h as default,t as frontMatter};
