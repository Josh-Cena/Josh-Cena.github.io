import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2025 - Day 11`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Reactor`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`Since this is a DAG, counting the number of paths between two nodes can be done by dynamic programming: `,(0,i.jsx)(a.code,{children:`num_paths[node] = sum(num_paths[prev_node] for prev_node in graph[node])`}),`. How do we make sure that we compute `,(0,i.jsx)(a.code,{children:`num_paths[node]`}),` only after all `,(0,i.jsx)(a.code,{children:`num_paths[prev_node]`}),` are computed? We can do a topological sort of the graph, and compute the number of paths in that order.`]}),`
`,(0,i.jsxs)(a.p,{children:[`I use `,(0,i.jsx)(a.a,{href:`https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm`,children:`Kahn's algorithm`}),` for topo sorting, which basically a BFS that only adds nodes with in-degree 0 to the queue. First compute the in-degree of each node:`]}),`
`,`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`let mut num_paths: HashMap<String, i64> = HashMap::new();
let mut indeg: HashMap<String, i32> = HashMap::new();
for (u, neighbors) in graph {
    indeg.entry(u.clone()).or_insert(0);
    num_paths.insert(u.clone(), 0);
    for v in neighbors {
        *indeg.entry(v.clone()).or_insert(0) += 1;
    }
}
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Initially the queue only contains root nodes. The `,(0,i.jsx)(a.code,{children:`num_paths`}),` of the root nodes is 1, since there is one path from the root to itself.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`*num_paths.get_mut(start).unwrap() = 1;

let mut queue = VecDeque::from_iter(
    indeg
        .iter()
        .filter_map(|(v, &d)| if d == 0 { Some(v.clone()) } else { None }),
);
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Now we do BFS as normal. Each time a node is visited, its successors' `,(0,i.jsx)(a.code,{children:`num_paths`}),` are updated, and their in-degrees are decreased (as if the node is removed). New nodes with in-degree 0 are added to the queue.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`while let Some(u) = queue.pop_front() {
    let count_u = num_paths[&u];
    for v in graph.get(&u).unwrap_or(&Vec::new()) {
        if avoid.contains(&v.as_str()) {
            continue;
        }
        if let Some(d) = indeg.get_mut(v) {
            *num_paths.entry(v.clone()).or_insert(0) += count_u;
            *d -= 1;
            if *d == 0 {
                queue.push_back(v.clone());
            }
        }
    }
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Now we want paths that visit the `,(0,i.jsx)(a.code,{children:`dac`}),` and `,(0,i.jsx)(a.code,{children:`fft`}),` nodes. One way to do it is to keep track of whether these nodes have been visited in the state, which multiplies the number of states by 4, which `,(0,i.jsx)(a.em,{children:`isn't too bad`}),`. But I already have a working `,(0,i.jsx)(a.code,{children:`count_paths`}),` function and I don't want to change it.`]}),`
`,(0,i.jsxs)(a.p,{children:[`My first approach was a failure. I thought that I could compute `,(0,i.jsx)(a.code,{children:`count_paths(start, dac) * count_paths(dac, fft) * count_paths(fft, end)`}),` (and with `,(0,i.jsx)(a.code,{children:`dac`}),` and `,(0,i.jsx)(a.code,{children:`fft`}),` swapped), but this doesn't work because not all paths from `,(0,i.jsx)(a.code,{children:`start`}),` to `,(0,i.jsx)(a.code,{children:`dac`}),` can be combined with all paths from `,(0,i.jsx)(a.code,{children:`dac`}),` to `,(0,i.jsx)(a.code,{children:`fft`}),`, etc., because some paths from `,(0,i.jsx)(a.code,{children:`start`}),` to `,(0,i.jsx)(a.code,{children:`dac`}),` might not be able to go back to `,(0,i.jsx)(a.code,{children:`fft`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`My second approach is to use inclusion-exclusion. The number of paths that visit `,(0,i.jsx)(a.code,{children:`dac`}),` and `,(0,i.jsx)(a.code,{children:`fft`}),` is equal to the total number of paths, minus the number of paths that don't visit `,(0,i.jsx)(a.code,{children:`dac`}),`, minus the number of paths that don't visit `,(0,i.jsx)(a.code,{children:`fft`}),`. This subtracts the paths that don't visit either `,(0,i.jsx)(a.code,{children:`dac`}),` or `,(0,i.jsx)(a.code,{children:`fft`}),` twice, so we need to add it back once. While it's hard to keep track of which paths `,(0,i.jsx)(a.em,{children:`do`}),` visit a node, it turns out that making a path `,(0,i.jsx)(a.em,{children:`not`}),` visit a node is easy: we can just remove that node from the graph and recompute the number of paths. I make my `,(0,i.jsx)(a.code,{children:`count_paths`}),` function take an `,(0,i.jsx)(a.code,{children:`avoid`}),` list, which are essentially removed from the graph. Now the number of paths is:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`let total = count_paths(&graph, "svr", "out", &[])
    - count_paths(&graph, "svr", "out", &["dac"])
    - count_paths(&graph, "svr", "out", &["fft"])
    + count_paths(&graph, "svr", "out", &["dac", "fft"]);
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Graph theory`],title:`Advent of Code 2025 - Day 11: Reactor`,description:`Advent of Code 2025 - Day 11: Reactor, a problem that involves Graph theory. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:11};export{o as default};