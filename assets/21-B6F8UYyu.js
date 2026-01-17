import{u as l,j as e}from"./index-L6ckUcGi.js";import{F as i,a as c}from"./_components-DB3Df8DK.js";const a={tags:["Puzzle","Memoization"],description:"Advent of Code 2024 - Day 21: Keypad Conundrum, a problem that involves Puzzle and Memoization. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:21,title:"Advent of Code 2024 - Day 21: Keypad Conundrum"};function t(n){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["Advent of Code 2024 - Day 21",e.jsx(s.span,{className:"subtitle",children:"Keypad Conundrum"})]}),`
`,`
`,e.jsx(i,{frontMatter:a}),`
`,e.jsxs(s.p,{children:["This problem pays tribute to ",e.jsx(s.a,{href:"/notes/aoc/2019/25/",children:"2019 day 25"}),"."]}),`
`,e.jsx(s.p,{children:"Yeah it's hard. Yeah it may not even be comprehensible. Let's understand what's going on."}),`
`,e.jsxs(s.p,{children:["Let's call the directional keypad you type ",e.jsx(s.code,{children:"0"})," and each directional keypad next as ",e.jsx(s.code,{children:"1"})," and ",e.jsx(s.code,{children:"2"})," (or ",e.jsx(s.code,{children:"3"}),", ",e.jsx(s.code,{children:"4"}),", etc. for part 2). Finally the numpad is ",e.jsx(s.code,{children:"3"})," (or ",e.jsx(s.code,{children:"26"})," for part 2). A sequence of keys on ",e.jsx(s.code,{children:"0"})," can be translated to a sequence of keys on each successive keypad, and vice versa:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`0 |  <vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A
1 |    v <<   A >>  ^ A   <   A > A  v  A   <  ^ AA > A   < v  AAA >  ^ A
2 |           <       A       ^   A     >        ^^   A        vvv      A
3 |                   0           2                   9                 A
`})}),`
`,e.jsxs(s.p,{children:["For each keypad, note that its sequence of keys can be seen as a list of segments, each one beginning with ",e.jsx(s.code,{children:"A"})," and ending with ",e.jsx(s.code,{children:"A"})," (including the numpad one; you can prepend an ",e.jsx(s.code,{children:"A"})," to each sequence to see this more clearly, since robots start at the ",e.jsx(s.code,{children:"A"})," position anyway). Each ",e.jsx(s.code,{children:"A...A"})," segment corresponds to a single key on the next keypad—more precisely, a single key, plus an updated robot position. Conversely, given a single key to type out on keypad ",e.jsx(s.code,{children:"n"})," and robot ",e.jsx(s.code,{children:"n"}),"'s current position, we can find the corresponding ",e.jsx(s.code,{children:"A...A"})," segment on keypad ",e.jsx(s.code,{children:"n-1"}),". This means that when typing a single key on keypad ",e.jsx(s.code,{children:"n"}),", robot ",e.jsx(s.code,{children:"n"}),"'s position only affects the key sequence for robot ",e.jsx(s.code,{children:"n-1"}),", but no robots before that, because robot ",e.jsx(s.code,{children:"n-1"}),"'s key sequence always starts and ends with ",e.jsx(s.code,{children:"A"}),", so it resets its position."]}),`
`,e.jsxs(s.p,{children:["This means that our approach is that given a sequence ",e.jsx(s.code,{children:"A...A"})," on keypad ",e.jsx(s.code,{children:"n"}),", we can find the corresponding optimal ",e.jsx(s.code,{children:"A...A"})," sequence on keypad ",e.jsx(s.code,{children:"n-1"}),", all the way until ",e.jsx(s.code,{children:"0"}),". The question is how we should do the mapping. Let's consider a movement from key X to key Y on ",e.jsx(s.code,{children:"n"}),"."]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["If X and Y are on the same row or column, we should always move in a straight line, because any detour would just involve net extra key presses on ",e.jsx(s.code,{children:"n-1"}),", which doesn't really lead to a better path on any previous keypads."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X   Y
n-1 |  A > A

  n |  X       Y
n-1 |  A ^ > v A
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["If X and Y are on different rows and columns, say Y is to the upper right of X, then we can either move up then right, or right then up. However, we should always move in one direction before changing to the other, because if you alternate between ",e.jsx(s.code,{children:">"})," and ",e.jsx(s.code,{children:"^"}),", then on the ",e.jsx(s.code,{children:"n-2"}),"-th keypad, it would take extra presses to move the ",e.jsx(s.code,{children:"n-1"})," robot back and forth between the two buttons, as opposed to just pressing ",e.jsx(s.code,{children:"A"})," repeatedly on ",e.jsx(s.code,{children:"n-2"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X       Y
n-1 |  A >>  ^ A
n-2 |  AvAA<^A>A

  n |  X         Y
n-1 |  A >  ^  > A
n-2 |  AvA<^Av>A^A
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Rule 2 doesn't tell us whether we should move up then right, or right then up. We don't always have a choice. For example, on the directional pad, when moving from ",e.jsx(s.code,{children:"A"})," to ",e.jsx(s.code,{children:"<"}),", we have to go down then left, because the other way would move into the gap."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["If rule 3 still doesn't give an unambiguous path, we now need to consider the next keypad, ",e.jsx(s.code,{children:"n-3"}),", because the number of presses on ",e.jsx(s.code,{children:"n-2"})," is the same. Consider ",e.jsx(s.code,{children:"^<"})," vs. ",e.jsx(s.code,{children:"<^"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X                        Y
n-1 |  A       ^        <       A
n-2 |  A   <   A   < v  A >>  ^ A
n-3 |  Av<<A>>^Av<<A>A^>AvAA<^A>A

  n |  X                    Y
n-1 |  A         <      ^   A
n-2 |  A  v <<   A ^  > A > A
n-3 |  A<vA<AA>>^A<Av>A>AvA^A
`})}),`
`,e.jsxs(s.p,{children:["So there ",e.jsx(s.em,{children:"is"})," a difference on ",e.jsx(s.code,{children:"n-3"}),", and ",e.jsx(s.code,{children:"<^"})," is better than ",e.jsx(s.code,{children:"^<"}),"! The reason is because ",e.jsx(s.code,{children:"<^"})," collocates the two expensive ",e.jsx(s.code,{children:"<"})," presses together, while ",e.jsx(s.code,{children:"^<"})," has to move left in two cycles: ",e.jsx(s.code,{children:"A<A"})," and ",e.jsx(s.code,{children:"A<vA"}),", each one incurring a full left-left-right-right cycle on the ",e.jsx(s.code,{children:"n-3"}),"-th keypad."]}),`
`,e.jsxs(s.p,{children:["Similarly, ",e.jsx(s.code,{children:"<v"})," is better than ",e.jsx(s.code,{children:"v<"})," because it also presses ",e.jsx(s.code,{children:"<"})," first:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X                        Y
n-1 |  A        v       <       A
n-2 |  A   < v  A   <   A >>  ^ A
n-3 |  Av<<A>A^>Av<<A>>^AvAA<^A>A

  n |  X                    Y
n-1 |  A         <   v      A
n-2 |  A  v <<   A > A ^  > A
n-3 |  A<vA<AA>>^AvA^A<Av>A^A
`})}),`
`,e.jsxs(s.p,{children:['In the same spirit that "keys to the left should be pressed first", ',e.jsx(s.code,{children:"v>"})," is better than ",e.jsx(s.code,{children:">v"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X                Y
n-1 |  A        v   >   A
n-2 |  A   < v  A > A ^ A
n-3 |  Av<<A>A^>AvA^A<A>A

  n |  X                    Y
n-1 |  A     >       v      A
n-2 |  A  v  A   <   A ^  > A
n-3 |  A<vA^>Av<<A>>^A<Av>A^A
`})}),`
`,e.jsxs(s.p,{children:["Finally, ",e.jsx(s.code,{children:"^>"})," is better than ",e.jsx(s.code,{children:">^"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`  n |  X              Y
n-1 |  A   ^      >   A
n-2 |  A < A  v > A ^ A
n-3 |  A<A>A<vA>A^A<A>A

  n |  X                  Y
n-1 |  A     >        ^   A
n-2 |  A  v  A   <  ^ A > A
n-3 |  A<vA^>Av<<A^>A>AvA^A
`})}),`
`,e.jsxs(s.p,{children:["So the conclusion is that the priority of moves is: ",e.jsx(s.code,{children:"<"})," > ",e.jsx(s.code,{children:"v"})," > ",e.jsx(s.code,{children:"^"})," > ",e.jsx(s.code,{children:">"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:["Now let's code this up. The ",e.jsx(s.code,{children:"move_seq"})," function generates a list of to move ",e.jsx(s.code,{children:"dx"})," or ",e.jsx(s.code,{children:"dy"})," steps in either the x or y direction (but not both):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let move_seq dx dy =
  match (compare dx 0, compare dy 0) with
  | 0, 0 -> []
  | 0, 1 -> List.init dy (fun _ -> '^')
  | 0, -1 -> List.init (-dy) (fun _ -> 'v')
  | 1, 0 -> List.init dx (fun _ -> '>')
  | -1, 0 -> List.init (-dx) (fun _ -> '<')
  | _ -> failwith "Invalid move"
`})}),`
`,e.jsxs(s.p,{children:["Now we implement the above 4 rules. For the third rule, we define our coordinate system such that the gap is always at ",e.jsx(s.code,{children:"(-2, 0)"})," for both kinds of keypads (which, incidentally, also puts ",e.jsx(s.code,{children:"A"})," at ",e.jsx(s.code,{children:"(0, 0)"})," for both keypads)."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let optimal_path (from_x, from_y) (to_x, to_y) =
  let dx, dy = (to_x - from_x, to_y - from_y) in
  if dx = 0 || dy = 0 then move_seq dx dy @ [ 'A' ]
  else
    let interm1, interm2 = ((from_x + dx, from_y), (from_x, from_y + dy)) in
    if interm1 = (-2, 0) then move_seq 0 dy @ move_seq dx 0 @ [ 'A' ]
    else if interm2 = (-2, 0) then move_seq dx 0 @ move_seq 0 dy @ [ 'A' ]
    else if dx < 0 then
      (* <v, <^ *)
      move_seq dx 0 @ move_seq 0 dy @ [ 'A' ]
    else
      (* >v, ^> *)
      move_seq 0 dy @ move_seq dx 0 @ [ 'A' ]
`})}),`
`,e.jsxs(s.p,{children:["Now we just need to recursively apply this function to unroll the key sequence from the last keypad to the first. The path will become very long so we can't physically hold it as a string, but we just need the mapping from ",e.jsx(s.code,{children:"(from, to, depth)"})," to the length of the key presses on keypad 0. This can be recursively defined as ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mtext,{children:"cost"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{children:"f"}),e.jsx(s.mo,{separator:"true",children:","}),e.jsx(s.mi,{children:"t"}),e.jsx(s.mo,{separator:"true",children:","}),e.jsx(s.mi,{children:"d"}),e.jsx(s.mo,{stretchy:"false",children:")"}),e.jsx(s.mo,{children:"="}),e.jsxs(s.msub,{children:[e.jsx(s.mo,{children:"∑"}),e.jsx(s.mi,{children:"i"})]}),e.jsx(s.mtext,{children:"cost"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsxs(s.msub,{children:[e.jsx(s.mi,{children:"a"}),e.jsx(s.mi,{children:"i"})]}),e.jsx(s.mo,{separator:"true",children:","}),e.jsxs(s.msub,{children:[e.jsx(s.mi,{children:"a"}),e.jsxs(s.mrow,{children:[e.jsx(s.mi,{children:"i"}),e.jsx(s.mo,{children:"+"}),e.jsx(s.mn,{children:"1"})]})]}),e.jsx(s.mo,{separator:"true",children:","}),e.jsx(s.mi,{children:"d"}),e.jsx(s.mo,{children:"−"}),e.jsx(s.mn,{children:"1"}),e.jsx(s.mo,{stretchy:"false",children:")"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"\\text{cost}(f, t, d) = \\sum_{i}\\text{cost}(a_i, a_{i+1}, d-1)"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord text",children:e.jsx(s.span,{className:"mord",children:"cost"})}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),e.jsx(s.span,{className:"mpunct",children:","}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"t"}),e.jsx(s.span,{className:"mpunct",children:","}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"d"}),e.jsx(s.span,{className:"mclose",children:")"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e.jsx(s.span,{className:"mrel",children:"="}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1.0497em",verticalAlign:"-0.2997em"}}),e.jsxs(s.span,{className:"mop",children:[e.jsx(s.span,{className:"mop op-symbol small-op",style:{position:"relative",top:"0em"},children:"∑"}),e.jsx(s.span,{className:"msupsub",children:e.jsxs(s.span,{className:"vlist-t vlist-t2",children:[e.jsxs(s.span,{className:"vlist-r",children:[e.jsx(s.span,{className:"vlist",style:{height:"0.162em"},children:e.jsxs(s.span,{style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mtight",children:e.jsx(s.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),e.jsx(s.span,{className:"vlist-s",children:"​"})]}),e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.2997em"},children:e.jsx(s.span,{})})})]})})]}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(s.span,{className:"mord text",children:e.jsx(s.span,{className:"mord",children:"cost"})}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord mathnormal",children:"a"}),e.jsx(s.span,{className:"msupsub",children:e.jsxs(s.span,{className:"vlist-t vlist-t2",children:[e.jsxs(s.span,{className:"vlist-r",children:[e.jsx(s.span,{className:"vlist",style:{height:"0.3117em"},children:e.jsxs(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mathnormal mtight",children:"i"})})]})}),e.jsx(s.span,{className:"vlist-s",children:"​"})]}),e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.15em"},children:e.jsx(s.span,{})})})]})})]}),e.jsx(s.span,{className:"mpunct",children:","}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord mathnormal",children:"a"}),e.jsx(s.span,{className:"msupsub",children:e.jsxs(s.span,{className:"vlist-t vlist-t2",children:[e.jsxs(s.span,{className:"vlist-r",children:[e.jsx(s.span,{className:"vlist",style:{height:"0.3117em"},children:e.jsxs(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsxs(s.span,{className:"mord mtight",children:[e.jsx(s.span,{className:"mord mathnormal mtight",children:"i"}),e.jsx(s.span,{className:"mbin mtight",children:"+"}),e.jsx(s.span,{className:"mord mtight",children:"1"})]})})]})}),e.jsx(s.span,{className:"vlist-s",children:"​"})]}),e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.2083em"},children:e.jsx(s.span,{})})})]})})]}),e.jsx(s.span,{className:"mpunct",children:","}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"d"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e.jsx(s.span,{className:"mbin",children:"−"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord",children:"1"}),e.jsx(s.span,{className:"mclose",children:")"})]})]})]})," where ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{children:"a"}),e.jsx(s.mo,{children:"="}),e.jsx(s.mtext,{children:"optimal_path"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{children:"f"}),e.jsx(s.mo,{separator:"true",children:","}),e.jsx(s.mi,{children:"t"}),e.jsx(s.mo,{stretchy:"false",children:")"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"a = \\text{optimal\\_path}(f, t)"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.4306em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"a"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e.jsx(s.span,{className:"mrel",children:"="}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),e.jsx(s.span,{className:"mord text",children:e.jsx(s.span,{className:"mord",children:"optimal_path"})}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),e.jsx(s.span,{className:"mpunct",children:","}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"t"}),e.jsx(s.span,{className:"mclose",children:")"})]})]})]}),". Since there are relatively few ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsx(s.mrow,{children:e.jsx(s.mi,{children:"f"})}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"f"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," and ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsx(s.mrow,{children:e.jsx(s.mi,{children:"t"})}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"t"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.6151em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"t"})]})})]})," combinations but a lot of repeated calls on smaller depths, we can memoize the results in a hash table."]}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let rec optimal_path_cost from_pos to_pos depth memo =
  if Hashtbl.mem memo (from_pos, to_pos, depth) then
    Hashtbl.find memo (from_pos, to_pos, depth)
  else
    let path = optimal_path from_pos to_pos in
    let total_cost =
      if depth = 1 then List.length path
      else
        optimal_total_path_cost
          (List.map (Hashtbl.find dirpad) ('A' :: path))
          (depth - 1) memo
    in
    Hashtbl.add memo (from_pos, to_pos, depth) total_cost;
    total_cost

and optimal_total_path_cost poses depth memo =
  let rec aux acc = function
    | [] | [ _ ] -> acc
    | step1 :: step2 :: rest ->
        let step_cost = optimal_path_cost step1 step2 depth memo in
        aux (acc + step_cost) (step2 :: rest)
  in
  aux 0 poses
`})}),`
`,e.jsxs(s.p,{children:["Now implementing a sequence of presses on the numpad just requires calling ",e.jsx(s.code,{children:"optimal_total_path_cost"})," with the sequence of coordinates."]}),`
`,e.jsx(c,{frontMatter:a})]})}function h(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{h as default,a as frontMatter};
