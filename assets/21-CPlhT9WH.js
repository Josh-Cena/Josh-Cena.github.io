import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Puzzle`,`Memoization`],title:`Advent of Code 2024 - Day 21: Keypad Conundrum`,description:`Advent of Code 2024 - Day 21: Keypad Conundrum, a problem that involves Puzzle and Memoization. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:21};function o(e){let o={a:`a`,annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,li:`li`,math:`math`,mi:`mi`,mn:`mn`,mo:`mo`,mrow:`mrow`,msub:`msub`,mtext:`mtext`,ol:`ol`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 21`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Keypad Conundrum`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/25/`,children:`2019 day 25`}),`.`]}),`
`,(0,i.jsx)(o.p,{children:`Yeah it's hard. Yeah it may not even be comprehensible. Let's understand what's going on.`}),`
`,(0,i.jsxs)(o.p,{children:[`Let's call the directional keypad you type `,(0,i.jsx)(o.code,{children:`0`}),` and each directional keypad next as `,(0,i.jsx)(o.code,{children:`1`}),` and `,(0,i.jsx)(o.code,{children:`2`}),` (or `,(0,i.jsx)(o.code,{children:`3`}),`, `,(0,i.jsx)(o.code,{children:`4`}),`, etc. for part 2). Finally the numpad is `,(0,i.jsx)(o.code,{children:`3`}),` (or `,(0,i.jsx)(o.code,{children:`26`}),` for part 2). A sequence of keys on `,(0,i.jsx)(o.code,{children:`0`}),` can be translated to a sequence of keys on each successive keypad, and vice versa:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`0 |  <vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A
1 |    v <<   A >>  ^ A   <   A > A  v  A   <  ^ AA > A   < v  AAA >  ^ A
2 |           <       A       ^   A     >        ^^   A        vvv      A
3 |                   0           2                   9                 A
`})}),`
`,(0,i.jsxs)(o.p,{children:[`For each keypad, note that its sequence of keys can be seen as a list of segments, each one beginning with `,(0,i.jsx)(o.code,{children:`A`}),` and ending with `,(0,i.jsx)(o.code,{children:`A`}),` (including the numpad one; you can prepend an `,(0,i.jsx)(o.code,{children:`A`}),` to each sequence to see this more clearly, since robots start at the `,(0,i.jsx)(o.code,{children:`A`}),` position anyway). Each `,(0,i.jsx)(o.code,{children:`A...A`}),` segment corresponds to a single key on the next keypad—more precisely, a single key, plus an updated robot position. Conversely, given a single key to type out on keypad `,(0,i.jsx)(o.code,{children:`n`}),` and robot `,(0,i.jsx)(o.code,{children:`n`}),`'s current position, we can find the corresponding `,(0,i.jsx)(o.code,{children:`A...A`}),` segment on keypad `,(0,i.jsx)(o.code,{children:`n-1`}),`. This means that when typing a single key on keypad `,(0,i.jsx)(o.code,{children:`n`}),`, robot `,(0,i.jsx)(o.code,{children:`n`}),`'s position only affects the key sequence for robot `,(0,i.jsx)(o.code,{children:`n-1`}),`, but no robots before that, because robot `,(0,i.jsx)(o.code,{children:`n-1`}),`'s key sequence always starts and ends with `,(0,i.jsx)(o.code,{children:`A`}),`, so it resets its position.`]}),`
`,(0,i.jsxs)(o.p,{children:[`This means that our approach is that given a sequence `,(0,i.jsx)(o.code,{children:`A...A`}),` on keypad `,(0,i.jsx)(o.code,{children:`n`}),`, we can find the corresponding optimal `,(0,i.jsx)(o.code,{children:`A...A`}),` sequence on keypad `,(0,i.jsx)(o.code,{children:`n-1`}),`, all the way until `,(0,i.jsx)(o.code,{children:`0`}),`. The question is how we should do the mapping. Let's consider a movement from key X to key Y on `,(0,i.jsx)(o.code,{children:`n`}),`.`]}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`If X and Y are on the same row or column, we should always move in a straight line, because any detour would just involve net extra key presses on `,(0,i.jsx)(o.code,{children:`n-1`}),`, which doesn't really lead to a better path on any previous keypads.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X   Y
n-1 |  A > A

  n |  X       Y
n-1 |  A ^ > v A
`})}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`If X and Y are on different rows and columns, say Y is to the upper right of X, then we can either move up then right, or right then up. However, we should always move in one direction before changing to the other, because if you alternate between `,(0,i.jsx)(o.code,{children:`>`}),` and `,(0,i.jsx)(o.code,{children:`^`}),`, then on the `,(0,i.jsx)(o.code,{children:`n-2`}),`-th keypad, it would take extra presses to move the `,(0,i.jsx)(o.code,{children:`n-1`}),` robot back and forth between the two buttons, as opposed to just pressing `,(0,i.jsx)(o.code,{children:`A`}),` repeatedly on `,(0,i.jsx)(o.code,{children:`n-2`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X       Y
n-1 |  A >>  ^ A
n-2 |  AvAA<^A>A

  n |  X         Y
n-1 |  A >  ^  > A
n-2 |  AvA<^Av>A^A
`})}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`Rule 2 doesn't tell us whether we should move up then right, or right then up. We don't always have a choice. For example, on the directional pad, when moving from `,(0,i.jsx)(o.code,{children:`A`}),` to `,(0,i.jsx)(o.code,{children:`<`}),`, we have to go down then left, because the other way would move into the gap.`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`If rule 3 still doesn't give an unambiguous path, we now need to consider the next keypad, `,(0,i.jsx)(o.code,{children:`n-3`}),`, because the number of presses on `,(0,i.jsx)(o.code,{children:`n-2`}),` is the same. Consider `,(0,i.jsx)(o.code,{children:`^<`}),` vs. `,(0,i.jsx)(o.code,{children:`<^`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X                        Y
n-1 |  A       ^        <       A
n-2 |  A   <   A   < v  A >>  ^ A
n-3 |  Av<<A>>^Av<<A>A^>AvAA<^A>A

  n |  X                    Y
n-1 |  A         <      ^   A
n-2 |  A  v <<   A ^  > A > A
n-3 |  A<vA<AA>>^A<Av>A>AvA^A
`})}),`
`,(0,i.jsxs)(o.p,{children:[`So there `,(0,i.jsx)(o.em,{children:`is`}),` a difference on `,(0,i.jsx)(o.code,{children:`n-3`}),`, and `,(0,i.jsx)(o.code,{children:`<^`}),` is better than `,(0,i.jsx)(o.code,{children:`^<`}),`! The reason is because `,(0,i.jsx)(o.code,{children:`<^`}),` collocates the two expensive `,(0,i.jsx)(o.code,{children:`<`}),` presses together, while `,(0,i.jsx)(o.code,{children:`^<`}),` has to move left in two cycles: `,(0,i.jsx)(o.code,{children:`A<A`}),` and `,(0,i.jsx)(o.code,{children:`A<vA`}),`, each one incurring a full left-left-right-right cycle on the `,(0,i.jsx)(o.code,{children:`n-3`}),`-th keypad.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Similarly, `,(0,i.jsx)(o.code,{children:`<v`}),` is better than `,(0,i.jsx)(o.code,{children:`v<`}),` because it also presses `,(0,i.jsx)(o.code,{children:`<`}),` first:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X                        Y
n-1 |  A        v       <       A
n-2 |  A   < v  A   <   A >>  ^ A
n-3 |  Av<<A>A^>Av<<A>>^AvAA<^A>A

  n |  X                    Y
n-1 |  A         <   v      A
n-2 |  A  v <<   A > A ^  > A
n-3 |  A<vA<AA>>^AvA^A<Av>A^A
`})}),`
`,(0,i.jsxs)(o.p,{children:[`In the same spirit that "keys to the left should be pressed first", `,(0,i.jsx)(o.code,{children:`v>`}),` is better than `,(0,i.jsx)(o.code,{children:`>v`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X                Y
n-1 |  A        v   >   A
n-2 |  A   < v  A > A ^ A
n-3 |  Av<<A>A^>AvA^A<A>A

  n |  X                    Y
n-1 |  A     >       v      A
n-2 |  A  v  A   <   A ^  > A
n-3 |  A<vA^>Av<<A>>^A<Av>A^A
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Finally, `,(0,i.jsx)(o.code,{children:`^>`}),` is better than `,(0,i.jsx)(o.code,{children:`>^`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`  n |  X              Y
n-1 |  A   ^      >   A
n-2 |  A < A  v > A ^ A
n-3 |  A<A>A<vA>A^A<A>A

  n |  X                  Y
n-1 |  A     >        ^   A
n-2 |  A  v  A   <  ^ A > A
n-3 |  A<vA^>Av<<A^>A>AvA^A
`})}),`
`,(0,i.jsxs)(o.p,{children:[`So the conclusion is that the priority of moves is: `,(0,i.jsx)(o.code,{children:`<`}),` > `,(0,i.jsx)(o.code,{children:`v`}),` > `,(0,i.jsx)(o.code,{children:`^`}),` > `,(0,i.jsx)(o.code,{children:`>`}),`.`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`Now let's code this up. The `,(0,i.jsx)(o.code,{children:`move_seq`}),` function generates a list of to move `,(0,i.jsx)(o.code,{children:`dx`}),` or `,(0,i.jsx)(o.code,{children:`dy`}),` steps in either the x or y direction (but not both):`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let move_seq dx dy =
  match (compare dx 0, compare dy 0) with
  | 0, 0 -> []
  | 0, 1 -> List.init dy (fun _ -> '^')
  | 0, -1 -> List.init (-dy) (fun _ -> 'v')
  | 1, 0 -> List.init dx (fun _ -> '>')
  | -1, 0 -> List.init (-dx) (fun _ -> '<')
  | _ -> failwith "Invalid move"
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Now we implement the above 4 rules. For the third rule, we define our coordinate system such that the gap is always at `,(0,i.jsx)(o.code,{children:`(-2, 0)`}),` for both kinds of keypads (which, incidentally, also puts `,(0,i.jsx)(o.code,{children:`A`}),` at `,(0,i.jsx)(o.code,{children:`(0, 0)`}),` for both keypads).`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let optimal_path (from_x, from_y) (to_x, to_y) =
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
`,(0,i.jsxs)(o.p,{children:[`Now we just need to recursively apply this function to unroll the key sequence from the last keypad to the first. The path will become very long so we can't physically hold it as a string, but we just need the mapping from `,(0,i.jsx)(o.code,{children:`(from, to, depth)`}),` to the length of the key presses on keypad 0. This can be recursively defined as `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mtext,{children:`cost`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`(`}),(0,i.jsx)(o.mi,{children:`f`}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsx)(o.mi,{children:`t`}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsx)(o.mi,{children:`d`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`)`}),(0,i.jsx)(o.mo,{children:`=`}),(0,i.jsxs)(o.msub,{children:[(0,i.jsx)(o.mo,{children:`∑`}),(0,i.jsx)(o.mi,{children:`i`})]}),(0,i.jsx)(o.mtext,{children:`cost`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`(`}),(0,i.jsxs)(o.msub,{children:[(0,i.jsx)(o.mi,{children:`a`}),(0,i.jsx)(o.mi,{children:`i`})]}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsxs)(o.msub,{children:[(0,i.jsx)(o.mi,{children:`a`}),(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mi,{children:`i`}),(0,i.jsx)(o.mo,{children:`+`}),(0,i.jsx)(o.mn,{children:`1`})]})]}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsx)(o.mi,{children:`d`}),(0,i.jsx)(o.mo,{children:`−`}),(0,i.jsx)(o.mn,{children:`1`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`\\text{cost}(f, t, d) = \\sum_{i}\\text{cost}(a_i, a_{i+1}, d-1)`})]})})}),(0,i.jsxs)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mord text`,children:(0,i.jsx)(o.span,{className:`mord`,children:`cost`})}),(0,i.jsx)(o.span,{className:`mopen`,children:`(`}),(0,i.jsx)(o.span,{className:`mord mathnormal`,style:{marginRight:`0.10764em`},children:`f`}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`t`}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`d`}),(0,i.jsx)(o.span,{className:`mclose`,children:`)`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}}),(0,i.jsx)(o.span,{className:`mrel`,children:`=`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}})]}),(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1.0497em`,verticalAlign:`-0.2997em`}}),(0,i.jsxs)(o.span,{className:`mop`,children:[(0,i.jsx)(o.span,{className:`mop op-symbol small-op`,style:{position:`relative`,top:`0em`},children:`∑`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsxs)(o.span,{className:`vlist-t vlist-t2`,children:[(0,i.jsxs)(o.span,{className:`vlist-r`,children:[(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.162em`},children:(0,i.jsxs)(o.span,{style:{top:`-2.4003em`,marginLeft:`0em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:(0,i.jsx)(o.span,{className:`mord mathnormal mtight`,children:`i`})})})]})}),(0,i.jsx)(o.span,{className:`vlist-s`,children:`​`})]}),(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.2997em`},children:(0,i.jsx)(o.span,{})})})]})})]}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord text`,children:(0,i.jsx)(o.span,{className:`mord`,children:`cost`})}),(0,i.jsx)(o.span,{className:`mopen`,children:`(`}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`a`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsxs)(o.span,{className:`vlist-t vlist-t2`,children:[(0,i.jsxs)(o.span,{className:`vlist-r`,children:[(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.3117em`},children:(0,i.jsxs)(o.span,{style:{top:`-2.55em`,marginLeft:`0em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mathnormal mtight`,children:`i`})})]})}),(0,i.jsx)(o.span,{className:`vlist-s`,children:`​`})]}),(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.15em`},children:(0,i.jsx)(o.span,{})})})]})})]}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`a`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsxs)(o.span,{className:`vlist-t vlist-t2`,children:[(0,i.jsxs)(o.span,{className:`vlist-r`,children:[(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.3117em`},children:(0,i.jsxs)(o.span,{style:{top:`-2.55em`,marginLeft:`0em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsxs)(o.span,{className:`mord mtight`,children:[(0,i.jsx)(o.span,{className:`mord mathnormal mtight`,children:`i`}),(0,i.jsx)(o.span,{className:`mbin mtight`,children:`+`}),(0,i.jsx)(o.span,{className:`mord mtight`,children:`1`})]})})]})}),(0,i.jsx)(o.span,{className:`vlist-s`,children:`​`})]}),(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.2083em`},children:(0,i.jsx)(o.span,{})})})]})})]}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`d`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,i.jsx)(o.span,{className:`mbin`,children:`−`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2222em`}})]}),(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`1`}),(0,i.jsx)(o.span,{className:`mclose`,children:`)`})]})]})]}),` where `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mi,{children:`a`}),(0,i.jsx)(o.mo,{children:`=`}),(0,i.jsx)(o.mtext,{children:`optimal_path`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`(`}),(0,i.jsx)(o.mi,{children:`f`}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsx)(o.mi,{children:`t`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`a = \\text{optimal\\_path}(f, t)`})]})})}),(0,i.jsxs)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.4306em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`a`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}}),(0,i.jsx)(o.span,{className:`mrel`,children:`=`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}})]}),(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1.06em`,verticalAlign:`-0.31em`}}),(0,i.jsx)(o.span,{className:`mord text`,children:(0,i.jsx)(o.span,{className:`mord`,children:`optimal_path`})}),(0,i.jsx)(o.span,{className:`mopen`,children:`(`}),(0,i.jsx)(o.span,{className:`mord mathnormal`,style:{marginRight:`0.10764em`},children:`f`}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`t`}),(0,i.jsx)(o.span,{className:`mclose`,children:`)`})]})]})]}),`. Since there are relatively few `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsx)(o.mi,{children:`f`})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`f`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8889em`,verticalAlign:`-0.1944em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,style:{marginRight:`0.10764em`},children:`f`})]})})]}),` and `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsx)(o.mi,{children:`t`})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`t`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.6151em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`t`})]})})]}),` combinations but a lot of repeated calls on smaller depths, we can memoize the results in a hash table.`]}),`
`,`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let rec optimal_path_cost from_pos to_pos depth memo =
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
`,(0,i.jsxs)(o.p,{children:[`Now implementing a sequence of presses on the numpad just requires calling `,(0,i.jsx)(o.code,{children:`optimal_total_path_cost`}),` with the sequence of coordinates.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};