import{u as s,j as e}from"./index-DMPu5IjH.js";import{P as r,a as h}from"./_components-Cf-Fn7vF.js";const o={tags:["Graph theory"],description:"Advent of Code 2025 - Day 11: Reactor, a problem that involves Graph theory. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:11,title:"Advent of Code 2025 - Day 11: Reactor"};function a(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2025 - Day 11",e.jsx(t.span,{className:"subtitle",children:"Reactor"})]}),`
`,`
`,e.jsx(r,{frontMatter:o}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["Since this is a DAG, counting the number of paths between two nodes can be done by dynamic programming: ",e.jsx(t.code,{children:"num_paths[node] = sum(num_paths[prev_node] for prev_node in graph[node])"}),". How do we make sure that we compute ",e.jsx(t.code,{children:"num_paths[node]"})," only after all ",e.jsx(t.code,{children:"num_paths[prev_node]"})," are computed? We can do a topological sort of the graph, and compute the number of paths in that order."]}),`
`,e.jsxs(t.p,{children:["I use ",e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm",children:"Kahn's algorithm"})," for topo sorting, which basically a BFS that only adds nodes with in-degree 0 to the queue. First compute the in-degree of each node:"]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`let mut num_paths: HashMap<String, i64> = HashMap::new();
let mut indeg: HashMap<String, i32> = HashMap::new();
for (u, neighbors) in graph {
    indeg.entry(u.clone()).or_insert(0);
    num_paths.insert(u.clone(), 0);
    for v in neighbors {
        *indeg.entry(v.clone()).or_insert(0) += 1;
    }
}
`})}),`
`,e.jsxs(t.p,{children:["Initially the queue only contains root nodes. The ",e.jsx(t.code,{children:"num_paths"})," of the root nodes is 1, since there is one path from the root to itself."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`*num_paths.get_mut(start).unwrap() = 1;

let mut queue = VecDeque::from_iter(
    indeg
        .iter()
        .filter_map(|(v, &d)| if d == 0 { Some(v.clone()) } else { None }),
);
`})}),`
`,e.jsxs(t.p,{children:["Now we do BFS as normal. Each time a node is visited, its successors' ",e.jsx(t.code,{children:"num_paths"})," are updated, and their in-degrees are decreased (as if the node is removed). New nodes with in-degree 0 are added to the queue."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`while let Some(u) = queue.pop_front() {
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
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Now we want paths that visit the ",e.jsx(t.code,{children:"dac"})," and ",e.jsx(t.code,{children:"fft"})," nodes. One way to do it is to keep track of whether these nodes have been visited in the state, which multiplies the number of states by 4, which ",e.jsx(t.em,{children:"isn't too bad"}),". But I already have a working ",e.jsx(t.code,{children:"count_paths"})," function and I don't want to change it."]}),`
`,e.jsxs(t.p,{children:["My first approach was a failure. I thought that I could compute ",e.jsx(t.code,{children:"count_paths(start, dac) * count_paths(dac, fft) * count_paths(fft, end)"})," (and with ",e.jsx(t.code,{children:"dac"})," and ",e.jsx(t.code,{children:"fft"})," swapped), but this doesn't work because not all paths from ",e.jsx(t.code,{children:"start"})," to ",e.jsx(t.code,{children:"dac"})," can be combined with all paths from ",e.jsx(t.code,{children:"dac"})," to ",e.jsx(t.code,{children:"fft"}),", etc., because some paths from ",e.jsx(t.code,{children:"start"})," to ",e.jsx(t.code,{children:"dac"})," might not be able to go back to ",e.jsx(t.code,{children:"fft"}),"."]}),`
`,e.jsxs(t.p,{children:["My second approach is to use inclusion-exclusion. The number of paths that visit ",e.jsx(t.code,{children:"dac"})," and ",e.jsx(t.code,{children:"fft"})," is equal to the total number of paths, minus the number of paths that don't visit ",e.jsx(t.code,{children:"dac"}),", minus the number of paths that don't visit ",e.jsx(t.code,{children:"fft"}),". This subtracts the paths that don't visit either ",e.jsx(t.code,{children:"dac"})," or ",e.jsx(t.code,{children:"fft"})," twice, so we need to add it back once. While it's hard to keep track of which paths ",e.jsx(t.em,{children:"do"})," visit a node, it turns out that making a path ",e.jsx(t.em,{children:"not"})," visit a node is easy: we can just remove that node from the graph and recompute the number of paths. I make my ",e.jsx(t.code,{children:"count_paths"})," function take an ",e.jsx(t.code,{children:"avoid"})," list, which are essentially removed from the graph. Now the number of paths is:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`let total = count_paths(&graph, "svr", "out", &[])
    - count_paths(&graph, "svr", "out", &["dac"])
    - count_paths(&graph, "svr", "out", &["fft"])
    + count_paths(&graph, "svr", "out", &["dac", "fft"]);
`})}),`
`,e.jsx(h,{frontMatter:o})]})}function c(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,o as frontMatter};
