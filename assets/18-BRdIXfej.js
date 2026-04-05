import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 18`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Operation Order`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`OK, I cheated for this one. Python already has `,(0,i.jsx)(a.code,{children:`ast`}),`; I just need to hack it to get the right precedence. Turns out that I can just replace the operators with some other ones. For part 1, replacing `,(0,i.jsx)(a.code,{children:`+`}),` with `,(0,i.jsx)(a.code,{children:`/`}),` would put it at the same precedence as `,(0,i.jsx)(a.code,{children:`*`}),`. For part 2, replacing `,(0,i.jsx)(a.code,{children:`+`}),` with `,(0,i.jsx)(a.code,{children:`**`}),` would put it at higher precedence than `,(0,i.jsx)(a.code,{children:`*`}),`.`]}),`
`,(0,i.jsx)(a.p,{children:`Once I have the tree with the correct precedence, I evaluate it recursively using a visitor.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`class ExprEvaluator(ast.NodeVisitor):
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
`,(0,i.jsx)(a.p,{children:`Of course I could have built an actual recursive descent parser, but this was way easier and is what nature intended for AoC purposes—language choices reward simple solutions.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Parsing`],title:`Advent of Code 2020 - Day 18: Operation Order`,description:`Advent of Code 2020 - Day 18: Operation Order, a problem that involves Parsing. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:18};export{o as default};