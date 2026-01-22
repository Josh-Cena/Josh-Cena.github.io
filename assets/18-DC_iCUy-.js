import{u as o,j as e}from"./index-Bb_SBPIJ.js";import{P as i,a}from"./_components-DLB4m9JY.js";const r={tags:["Parsing"],description:"Advent of Code 2020 - Day 18: Operation Order, a problem that involves Parsing. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:18,title:"Advent of Code 2020 - Day 18: Operation Order"};function s(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2020 - Day 18",e.jsx(t.span,{className:"subtitle",children:"Operation Order"})]}),`
`,`
`,e.jsx(i,{frontMatter:r}),`
`,e.jsxs(t.p,{children:["OK, I cheated for this one. Python already has ",e.jsx(t.code,{children:"ast"}),"; I just need to hack it to get the right precedence. Turns out that I can just replace the operators with some other ones. For part 1, replacing ",e.jsx(t.code,{children:"+"})," with ",e.jsx(t.code,{children:"/"})," would put it at the same precedence as ",e.jsx(t.code,{children:"*"}),". For part 2, replacing ",e.jsx(t.code,{children:"+"})," with ",e.jsx(t.code,{children:"**"})," would put it at higher precedence than ",e.jsx(t.code,{children:"*"}),"."]}),`
`,e.jsx(t.p,{children:"Once I have the tree with the correct precedence, I evaluate it recursively using a visitor."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`class ExprEvaluator(ast.NodeVisitor):
    def visit_Expression(self, node):
        return self.visit(node.body)

    def visit_BinOp(self, node):
        if type(node.op) == ast.Mult:
            return self.visit(node.left) * self.visit(node.right)
        elif type(node.op) == ast.Add:
            return self.visit(node.left) + self.visit(node.right)
        elif type(node.op) == ast.Div:
            return self.visit(node.left) + self.visit(node.right)
        elif type(node.op) == ast.Pow:
            return self.visit(node.left) + self.visit(node.right)

    def visit_Constant(self, node):
        return node.value
`})}),`
`,e.jsx(t.p,{children:"Of course I could have built an actual recursive descent parser, but this was way easier and is what nature intended for AoC purposes—language choices reward simple solutions."}),`
`,e.jsx(a,{frontMatter:r})]})}function c(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{c as default,r as frontMatter};
