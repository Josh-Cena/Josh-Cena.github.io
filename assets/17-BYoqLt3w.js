import{u as a,j as e}from"./index-BnEAZLVO.js";import{P as o,a as r}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["VM","Manual inspection","Bitwise operations","Puzzle"],title:"Advent of Code 2024 - Day 17: Chronospatial Computer",description:"Advent of Code 2024 - Day 17: Chronospatial Computer, a problem that involves VM, Manual inspection, Bitwise operations, and Puzzle. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:17};function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2024 - Day 17",e.jsx(t.span,{className:"subtitle",children:"Chronospatial Computer"})]}),`
`,`
`,e.jsx(o,{frontMatter:i}),`
`,`
`,e.jsx(t.p,{children:"This problem pays tribute to 2018 day 6 (unimplemented)."}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["Not much to say. After ",e.jsx(t.a,{href:"/notes/aoc/2019/9/",children:"IntCode"}),", this is just another assembly language to parse and execute."]}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["This problem reminds me of ",e.jsx(t.a,{href:"/notes/aoc/2021/24/",children:"2021 day 24"}),", where we also have to stare at assembly and figure out some pattern, so here it is."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`bst %a    # B = A & 0b111
bxl $X    # B = B ^ X
cdv %b    # C = A >> B
bxl $Y    # B = B ^ Y
bxc $4    # B = B ^ C
out %b    # output B & 0b111
adv $3    # A = A >> 3
jnz $0    # If A != 0, loop
`})}),`
`,e.jsxs(t.p,{children:["I'm redacting ",e.jsx(t.code,{children:"X"})," and ",e.jsx(t.code,{children:"Y"})," because they are personalized. Anyway, this code is just the following in C (because OCaml is terrible at describing bitwise operations):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-c",children:`do {
    int b = a & 0b111;
    int c = a >> (b ^ x);
    b = b ^ x ^ y ^ c;
    printf("%d,", b & 0b111);
    a = a >> 3;
} while (a != 0);
`})}),`
`,e.jsx(t.p,{children:"Even simpler:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-c",children:`do {
    int ao = a & 0b111; // Last 3 bits of a
    printf("%d,", ((a >> (ao ^ x)) ^ a ^ x ^ y) & 0b111);
    a = a >> 3;
} while (a != 0);
`})}),`
`,e.jsxs(t.p,{children:["Let's assume ",e.jsx(t.code,{children:"x = 1"}),", ",e.jsx(t.code,{children:"y = 2"})," (they aren't for my input). Denote the bits of ",e.jsx(t.code,{children:"a"})," from lowest to highest (at this particular iteration) as ",e.jsx(t.code,{children:"[a0]"}),", ",e.jsx(t.code,{children:"[a1]"}),", etc. The output is then:"]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.code,{children:"ao"})}),e.jsx(t.th,{children:e.jsx(t.code,{children:"(a >> (ao ^ x)) ^ ao ^ x ^ y"})})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"000"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[a3]11"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"001"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"011"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"010"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[a5][a4][~a3]"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"011"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[a4][a3]0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"100"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[~a7][~a6][~a5]"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"101"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[~a6][~a5][a4]"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"110"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[~a9][a8][~a7]"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"111"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[~a8][a7][a6]"})})]})]})]}),`
`,e.jsx(t.p,{children:"The expected output is:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`2,4,1,X,7,5,1,Y,4,4,5,5,0,3,3,0
`})}),`
`,e.jsxs(t.p,{children:["Since I want to find the smallest ",e.jsx(t.code,{children:"a"}),", I should start with the most significant bits and work our way down. The last output is ",e.jsx(t.code,{children:"0"}),", and I can pick all rows in the table that don't contain any 1 bits. Since higher bits than the MSB are necessarily ",e.jsx(t.code,{children:"0"}),", the only solution is ",e.jsx(t.code,{children:"ao = 011"}),". That's the highest octet of ",e.jsx(t.code,{children:"a"}),". Now I can pick the next octet equipped with this knowledge, and so on. Sometimes I may have multiple choices, and I use a DFS to figure out the first valid solution."]}),`
`,e.jsxs(t.p,{children:["In my code, I literally built up this table by precomputing ",e.jsx(t.code,{children:"(a >> (ao ^ x)) ^ ao ^ x ^ y"})," for every value of ",e.jsx(t.code,{children:"ao"}),", using a ",e.jsx(t.code,{children:"bit_info"})," data structure:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ocaml",children:`(* For a given octet in a, what is the corresponding output? *)
type bit_info =
  (* A bit higher than this octet. The int is the offset from the last known bit
  (we determine a from the highest bit); true = not inverted.  *)
  (* Ex: (true, 2) => the output bit corresponds to the 3rd lowest known bit *)
  | Symbol of bool * int
  | Bit of int (* 1 or 0 *)

let info =
  [ 0; 1; 2; 3; 4; 5; 6; 7 ]
  |> List.map (fun i ->
      let a0, a1, a2 = split_bits i in
      shift_by (i lxor x) (a0, a1, a2)
      |> xor_bits [ Bit a2; Bit a1; Bit a0 ]
      |> xor_bits [ Bit x2; Bit x1; Bit x0 ]
      |> xor_bits [ Bit y2; Bit y1; Bit y0 ])
  |> List.mapi (fun i l -> (i, l))
`})}),`
`,e.jsxs(t.p,{children:["Then, for each output number, I find all possibilities of ",e.jsx(t.code,{children:"ao"})," that's compatible with the current ",e.jsx(t.code,{children:"a"})," value, and try each one. The ",e.jsx(t.code,{children:"tentative_a"})," is the bits of ",e.jsx(t.code,{children:"a"})," that we have already determined (starting from the least significant determined bit, up to the most significant determined bit which is also the MSB of the whole ",e.jsx(t.code,{children:"a"}),")."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ocaml",children:`let rec search_a tentative_a info prog =
  match prog with
  | [] -> Some tentative_a
  | out :: rest ->
      let out0, out1, out2 = split_bits out in
      info
      |> List.filter (fun (_, inf) ->
          List.for_all2 (is_bit_compatible tentative_a) [ out2; out1; out0 ] inf)
      |> List.map fst
      |> List.find_map (fun ao ->
          let ao0, ao1, ao2 = split_bits ao in
          let tentative_a' =
            Array.append (Array.of_list [ ao0; ao1; ao2 ]) tentative_a
          in
          search_a tentative_a' info rest)
`})}),`
`,e.jsx(t.p,{children:"The last step is just to go through hoops to convert this bit array into an integer."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ocaml",children:`search_a (Array.make 0 0) info (List.rev (Array.to_list prog))
|> Option.get |> Array.to_list |> List.rev
|> List.fold_left (fun acc bit -> (acc lsl 1) + bit) 0
|> Printf.printf "%d\\n"
`})}),`
`,e.jsx(r,{frontMatter:i})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default,i as frontMatter};
