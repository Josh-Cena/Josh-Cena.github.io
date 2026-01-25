import{u as a,j as n}from"./index-VHEsq7sr.js";import{P as o,a as c}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r={tags:["String manipulation"],title:"Advent of Code 2025 - Day 6: Trash Compactor",description:"Advent of Code 2025 - Day 6: Trash Compactor, a problem that involves String manipulation. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:6};function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2025 - Day 6",n.jsx(e.span,{className:"subtitle",children:"Trash Compactor"})]}),`
`,`
`,n.jsx(o,{frontMatter:r}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["If we have a list of operators and a matrix of numbers, then for each operator, its result is just the ",n.jsx(e.code,{children:"sum()"}),"/",n.jsx(e.code,{children:"product()"})," of the numbers in the corresponding column: ",n.jsx(e.code,{children:"numbers.iter().map(|nums| nums[i]).sum()"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-rust",children:`let operators = operators.split_whitespace().collect::<Vec<&str>>();
let numbers = numbers
    .iter()
    .map(|s| {
        s.split_whitespace()
            .map(|s| s.parse::<i64>().unwrap())
            .collect::<Vec<i64>>()
    })
    .collect::<Vec<_>>();
let total = operators
    .iter()
    .enumerate()
    .map(|(i, &op)| match op {
        "+" => numbers.iter().map(|nums| nums[i]).sum(),
        "*" => numbers.iter().map(|nums| nums[i]).product(),
        _ => 0,
    })
    .sum::<i64>();
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"The intractable part is that each number is scattered across columns; if each one is in a row, the problem would be trivial. So we can simply transpose the input from:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +
`})}),`
`,n.jsx(e.p,{children:"To:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`1  *
24
356

369+
248
8

 32*
581
175

623+
431
  4
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-rust",children:`let mut transposed: Vec<Vec<char>> = vec![Vec::new(); data[0].chars().count()];
for line in data.iter() {
    for (i, c) in line.chars().enumerate() {
        transposed[i].push(c);
    }
}

let transposed = transposed
    .into_iter()
    .map(|col| col.into_iter().collect::<String>())
    .collect::<Vec<String>>()
    .join("\\n");
`})}),`
`,n.jsx(e.p,{children:"Now we can just go chunk by chunk to collect the operators and respective numbers. I start a new chunk whenever I encounter an operator, and push the numbers into the current chunk."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-rust",children:`let mut operators = Vec::new();
let mut numbers = Vec::new();
for col in transposed.iter_mut() {
    let last = *col.last().unwrap();
    if matches!(last, '+' | '*') {
        operators.push(last);
        col.pop();
        numbers.push(Vec::new());
    }
    let line = col.iter().collect::<String>();
    let line = line.trim();
    if line.is_empty() {
        continue;
    }
    let val: i64 = col.iter().collect::<String>().trim().parse().unwrap();
    numbers.last_mut().unwrap().push(val);
}
`})}),`
`,n.jsx(e.p,{children:"The arithmetic is the same as before."}),`
`,n.jsx(c,{frontMatter:r})]})}function u(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{u as default,r as frontMatter};
