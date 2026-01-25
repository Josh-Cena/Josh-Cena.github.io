import{u as i,j as e}from"./index-VHEsq7sr.js";import{P as l,a as r}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n={tags:["Graph theory"],title:"Advent of Code 2024 - Day 23: LAN Party",description:"Advent of Code 2024 - Day 23: LAN Party, a problem that involves Graph theory. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:23};function t(a){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["Advent of Code 2024 - Day 23",e.jsx(s.span,{className:"subtitle",children:"LAN Party"})]}),`
`,`
`,e.jsx(l,{frontMatter:n}),`
`,e.jsx(s.p,{children:"This problem pays tribute to 2016 day 9 (unimplemented)."}),`
`,e.jsxs(s.p,{children:["First we can conceptually understand what the two parts are asking for. The first part enumerates the triangles (cliques of size 3) in the graph, looking for ones that contain one node starting with ",e.jsx(s.code,{children:"t"}),"; the second part finds the maximum clique (largest maximal clique). This is extremely trivial if OCaml has a library as powerful as ",e.jsx(s.code,{children:"networkx"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-python",children:`import networkx as nx

G = nx.Graph()
for line in data:
    u, v = line.split("-")
    G.add_edge(u, v)

total = 0
for t in nx.all_triangles(G):
    if t[0].startswith("t") or t[1].startswith("t") or t[2].startswith("t"):
        total += 1
print(total)

print(",".join(sorted(nx.max_weight_clique(G, None)[0])))
`})}),`
`,e.jsx(s.p,{children:'But since there is not (I often talk about "reward of a good language choice is you can cheat"; maybe this is "punishment of a bad language choice"? :)), we have to implement these algorithms ourselves.'}),`
`,e.jsx(s.h2,{children:"Part 1"}),`
`,e.jsx(s.p,{children:"I build the graph as a normal adjacency list with bidirectional edges."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`module NodeSet = Set.Make (String)

let parse_graph data =
  let adj = Hashtbl.create 100 in
  List.iter
    (fun line ->
      let parts = String.split_on_char '-' line in
      let u = List.nth parts 0 in
      let v = List.nth parts 1 in
      let neighbors_u =
        match Hashtbl.find_opt adj u with Some s -> s | None -> NodeSet.empty
      in
      let neighbors_v =
        match Hashtbl.find_opt adj v with Some s -> s | None -> NodeSet.empty
      in
      Hashtbl.replace adj u (NodeSet.add v neighbors_u);
      Hashtbl.replace adj v (NodeSet.add u neighbors_v))
    data;
  adj
`})}),`
`,e.jsxs(s.p,{children:["A triangle is defined by one node plus an edge between two of its neighbors. So we can iterate over all (node, edge) pairs, and check if the edge's endpoints are neighbors of the node. This is ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{mathvariant:"script",children:"O"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"V"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mo,{children:"⋅"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"E"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mo,{stretchy:"false",children:")"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(|V| \\cdot |E|)"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e.jsx(s.span,{className:"mbin",children:"⋅"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mclose",children:")"})]})]})]}),", which is better than the naïve ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{mathvariant:"script",children:"O"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"V"}),e.jsxs(s.msup,{children:[e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mn,{children:"3"})]}),e.jsx(s.mo,{stretchy:"false",children:")"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(|V|^3)"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"msupsub",children:e.jsx(s.span,{className:"vlist-t",children:e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mtight",children:"3"})})]})})})})})]}),e.jsx(s.span,{className:"mclose",children:")"})]})})]}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let triangles = ref 0 in
Hashtbl.iter
  (fun u neighbors_u ->
    NodeSet.iter
      (fun v ->
        Hashtbl.iter
          (fun w neighbors_w ->
            if
              List.exists (String.starts_with ~prefix:"t") [ u; v; w ]
              && NodeSet.mem u neighbors_w && NodeSet.mem v neighbors_w
            then incr triangles)
          adj)
      neighbors_u)
  adj;
`})}),`
`,e.jsxs(s.p,{children:["Each triangle is counted 6 times, once for each corner, and twice for each edge in both directions, so the answer is ",e.jsx(s.code,{children:"!triangles / 6"}),"."]}),`
`,e.jsx(s.h2,{children:"Part 2"}),`
`,e.jsxs(s.p,{children:["I drew the graph with ",e.jsx(s.code,{children:"networkx"})," and it looks like this:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://github.com/Josh-Cena/aoc2024/blob/master/bin/day23.png?raw=true",alt:"Graph"})}),`
`,e.jsx(s.p,{children:"While not immediately clear, I guess it gives some sense of the problem structure and scale? :)"}),`
`,e.jsxs(s.p,{children:["Here's comes the real challenge: finding the maximum clique. I chose ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Bron%E2%80%93Kerbosch_algorithm",children:"Bron–Kerbosch"})," with pivoting. I'm not going to explain exactly how it works, since it's all on Wikipedia. I just aim to implement the following pseudocode:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`algorithm BronKerbosch2(R, P, X) is
    if P and X are both empty then
        report R as a maximal clique
    choose a pivot vertex u in P ⋃ X
    for each vertex v in P \\ N(u) do
        BronKerbosch2(R ⋃ {v}, P ⋂ N(v), X ⋂ N(v))
        P := P \\ {v}
        X := X ⋃ {v}
`})}),`
`,e.jsxs(s.p,{children:['As for choosing the pivot, Wikipedia says "chosen to minimize the number of recursive calls made by the algorithm". The heuristic is to choose the pivot such that ',e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{children:"P"}),e.jsx(s.mo,{children:"∖"}),e.jsx(s.mi,{children:"N"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{children:"u"}),e.jsx(s.mo,{stretchy:"false",children:")"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"P\\setminus N(u)"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e.jsx(s.span,{className:"mbin",children:"∖"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord mathnormal",children:"u"}),e.jsx(s.span,{className:"mclose",children:")"})]})]})]})," is as small as possible—i.e., choose ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsx(s.mrow,{children:e.jsx(s.mi,{children:"u"})}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.4306em"}}),e.jsx(s.span,{className:"mord mathnormal",children:"u"})]})})]})," that maximizes ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"P"}),e.jsx(s.mo,{children:"∩"}),e.jsx(s.mi,{children:"N"}),e.jsx(s.mo,{stretchy:"false",children:"("}),e.jsx(s.mi,{children:"u"}),e.jsx(s.mo,{stretchy:"false",children:")"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"|P \\cap N(u)|"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e.jsx(s.span,{className:"mbin",children:"∩"}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e.jsx(s.span,{className:"mopen",children:"("}),e.jsx(s.span,{className:"mord mathnormal",children:"u"}),e.jsx(s.span,{className:"mclose",children:")"}),e.jsx(s.span,{className:"mord",children:"∣"})]})]})]}),"."]}),`
`,e.jsxs(s.p,{children:["Because I'm not interested in ",e.jsx(s.em,{children:"all"})," maximal cliques, just the largest one, each time I find a maximal clique, I check if it's larger than the best one found so far. I also implemented a pruning condition: if the size of the current clique ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"R"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"|R|"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),e.jsx(s.span,{className:"mord",children:"∣"})]})})]})," plus the number of remaining candidates ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsx(s.mi,{mathvariant:"normal",children:"∣"}),e.jsx(s.mi,{children:"P"}),e.jsx(s.mi,{mathvariant:"normal",children:"∣"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"|P|"})]})})}),e.jsx(s.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e.jsx(s.span,{className:"mord",children:"∣"}),e.jsx(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),e.jsx(s.span,{className:"mord",children:"∣"})]})})]})," can never beat the current best, I stop searching that branch. The following is a faithful implementation of the above algorithm."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let max_clique adj =
  (* Choose a pivot u in (P ∪ X) maximizing |P ∩ N(u)| *)
  let choose_pivot p x =
    let candidates = NodeSet.union p x in
    NodeSet.fold
      (fun u (best_u, best_deg) ->
        let deg = Hashtbl.find adj u |> NodeSet.inter p |> NodeSet.cardinal in
        if Option.is_none best_u || deg > best_deg then (Some u, deg)
        else (best_u, best_deg))
      candidates (None, -1)
    |> fst |> Option.get
  in

  let rec search_max r p x best =
    let best_size = NodeSet.cardinal best in
    if NodeSet.cardinal r + NodeSet.cardinal p <= best_size then
      (* Can't beat the best *)
      best
    else if NodeSet.is_empty p && NodeSet.is_empty x then
      (* if P and X are both empty then *)
      (* Report R as a maximal clique; update best if R is larger *)
      if NodeSet.cardinal r > best_size then r else best
    else
      (* choose a pivot vertex u in P ⋃ X *)
      let u = choose_pivot p x in
      let nu = Hashtbl.find adj u in
      (* for each vertex v in P \\ N(u) do *)
      let _, _, best =
        NodeSet.fold
          (fun v (p, x, best) ->
            let nv = Hashtbl.find adj v in
            (* BronKerbosch2(R ⋃ {v}, P ⋂ N(v), X ⋂ N(v)) *)
            let best' =
              search_max (NodeSet.add v r) (NodeSet.inter p nv)
                (NodeSet.inter x nv) best
            in
            (* P := P \\ {v}; X := X ⋃ {v} *)
            (NodeSet.remove v p, NodeSet.add v x, best'))
          (NodeSet.diff p nu) (p, x, best)
      in
      best
  in

  let nodes =
    Hashtbl.fold (fun k _ acc -> NodeSet.add k acc) adj NodeSet.empty
  in
  search_max NodeSet.empty nodes NodeSet.empty NodeSet.empty
`})}),`
`,e.jsx(r,{frontMatter:n})]})}function o(a={}){const{wrapper:s}={...i(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(t,{...a})}):t(a)}export{o as default,n as frontMatter};
