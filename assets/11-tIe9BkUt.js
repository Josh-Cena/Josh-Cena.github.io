import{u as a,j as n}from"./index-Plw_Q2wT.js";import{P as i,a as r}from"./_components-CyBHRtnE.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Dynamic programming"],title:"Advent of Code 2024 - Day 11: Plutonian Pebbles",description:"Advent of Code 2024 - Day 11: Plutonian Pebbles, a problem that involves Dynamic programming. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:11};function o(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2024 - Day 11",n.jsx(e.span,{className:"subtitle",children:"Plutonian Pebbles"})]}),`
`,`
`,n.jsx(i,{frontMatter:s}),`
`,n.jsxs(e.p,{children:["This problem pays tribute to ",n.jsx(e.a,{href:"/notes/aoc/2019/20/",children:"2019 day 20"}),"."]}),`
`,n.jsxs(e.p,{children:["This is yet another ",n.jsx(e.a,{href:"/notes/aoc/2021/6/",children:"lanternfish problem"}),". Each time, the objects can morph into other objects, but objects in the same state are indistinguishable. Therefore we can keep track of how many objects are in each state."]}),`
`,n.jsx(e.p,{children:"First we can count the existing states."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`module IntMap = Map.Make (Int)

let counts lst =
  List.fold_left
    (fun acc x ->
      IntMap.update x (function None -> Some 1 | Some n -> Some (n + 1)) acc)
    IntMap.empty lst
`})}),`
`,n.jsxs(e.p,{children:["Each time, we evolve the counts by applying the rules. All ",n.jsx(e.code,{children:"0"}),"'s become ",n.jsx(e.code,{children:"1"}),"'s; numbers with even digits are split; the rest are ",n.jsx(e.code,{children:"* 2024"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let evolve nums =
  IntMap.fold
    (fun x count acc ->
      let sx = string_of_int x in
      let new_x =
        if x = 0 then [ 1 ]
        else if String.length sx mod 2 = 0 then
          [
            int_of_string (String.sub sx 0 (String.length sx / 2));
            int_of_string
              (String.sub sx (String.length sx / 2) (String.length sx / 2));
          ]
        else [ x * 2024 ]
      in
      List.fold_left
        (fun acc' nx ->
          IntMap.update nx
            (function None -> Some count | Some c -> Some (c + count))
            acc')
        acc new_x)
    nums IntMap.empty
`})}),`
`,n.jsxs(e.p,{children:["Parts 1 and 2 just apply ",n.jsx(e.code,{children:"evolve"})," 25 and 75 times, respectively."]}),`
`,n.jsx(r,{frontMatter:s})]})}function h(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default,s as frontMatter};
