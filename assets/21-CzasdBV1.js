import{u as a,j as e}from"./index-DH0P7Lag.js";import{P as r,a as l}from"./_components-BmaiIPu9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Constraint satisfaction"],title:"Advent of Code 2020 - Day 21: Allergen Assessment",description:"Advent of Code 2020 - Day 21: Allergen Assessment, a problem that involves Constraint satisfaction. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:21};function i(s){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 21",e.jsx(n.span,{className:"subtitle",children:"Allergen Assessment"})]}),`
`,`
`,e.jsx(r,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"If an allergen is found in lists A, B, and C, then the ingredient must be in the intersection of those lists. So we can build a mapping from allergen to the intersection of all ingredient lists that mention that allergen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def get_possible_ingredients(data: list[tuple[set[str], set[str]]]):
    res: dict[str, set[str]] = {}
    for ingredients, allergens in data:
        for a in allergens:
            res.setdefault(a, set(ingredients)).intersection_update(ingredients)
    return res
`})}),`
`,e.jsxs(n.p,{children:["Those ingredients that cannot possibly contain any allergen are the ingredients not in ",e.jsx(n.code,{children:"possible_ingredients.values()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`ingredient_counts = Counter[str]()
for ingredients, _ in input_data:
    ingredient_counts.update(ingredients)
for ingredients in possible_ingredients.values():
    for i in ingredients:
        del ingredient_counts[i]
print(sum(ingredient_counts.values()))
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["This is basically the same as ",e.jsx(n.a,{href:"/notes/aoc/2020/16/",children:"Day 16"}),", except now we can't solve the constraints in a fixed order, because the constraint sets are no longer nicely nested with increasing sizes. Consider this example:"]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`{
    'nuts': {'kfxr'}, 'shellfish': {'xzhxj', 'chbtp'}, 'soy': {'kfxr', 'chbtp'},
}
`})}),`
`,e.jsxs(n.p,{children:["Here, the constraints can only be solved in the order nuts → soy → shellfish, but because both shellfish and soy have constraint size 2, we cannot know in advance which to solve first. Since there are only 8 allergens anyway, I use a ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsxs(n.mrow,{children:[e.jsx(n.mi,{mathvariant:"script",children:"O"}),e.jsx(n.mo,{stretchy:"false",children:"("}),e.jsxs(n.msup,{children:[e.jsx(n.mi,{children:"n"}),e.jsx(n.mn,{children:"2"})]}),e.jsx(n.mo,{stretchy:"false",children:")"})]}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n^2)"})]})})}),e.jsx(n.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e.jsx(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),e.jsx(n.span,{className:"mopen",children:"("}),e.jsxs(n.span,{className:"mord",children:[e.jsx(n.span,{className:"mord mathnormal",children:"n"}),e.jsx(n.span,{className:"msupsub",children:e.jsx(n.span,{className:"vlist-t",children:e.jsx(n.span,{className:"vlist-r",children:e.jsx(n.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(n.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(n.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),e.jsx(n.span,{className:"mclose",children:")"})]})})]})," solution to pull one at a time:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`while len(possible_ingredients) > 0:
    for allergen, ingredients in possible_ingredients.items():
        if len(ingredients) == 1:
            del possible_ingredients[allergen]
            for i in possible_ingredients.values():
                i.difference_update(ingredients)
            allergen_to_ingredient[allergen] = ingredients.pop()
            break
    else:
        # Can't find any allergen to figure out
        raise ValueError("Arrived at an impasse")
`})}),`
`,e.jsx(l,{frontMatter:t})]})}function h(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default,t as frontMatter};
