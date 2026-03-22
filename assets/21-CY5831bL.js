import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Constraint satisfaction`],title:`Advent of Code 2020 - Day 21: Allergen Assessment`,description:`Advent of Code 2020 - Day 21: Allergen Assessment, a problem that involves Constraint satisfaction. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:21};function o(e){let o={a:`a`,annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,math:`math`,mi:`mi`,mn:`mn`,mo:`mo`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 21`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Allergen Assessment`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`If an allergen is found in lists A, B, and C, then the ingredient must be in the intersection of those lists. So we can build a mapping from allergen to the intersection of all ingredient lists that mention that allergen.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`def get_possible_ingredients(data: list[tuple[set[str], set[str]]]):
    res: dict[str, set[str]] = {}
    for ingredients, allergens in data:
        for a in allergens:
            res.setdefault(a, set(ingredients)).intersection_update(ingredients)
    return res
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Those ingredients that cannot possibly contain any allergen are the ingredients not in `,(0,i.jsx)(o.code,{children:`possible_ingredients.values()`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`ingredient_counts = Counter[str]()
for ingredients, _ in input_data:
    ingredient_counts.update(ingredients)
for ingredients in possible_ingredients.values():
    for i in ingredients:
        del ingredient_counts[i]
print(sum(ingredient_counts.values()))
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`This is basically the same as `,(0,i.jsx)(o.a,{href:`/notes/aoc/2020/16/`,children:`Day 16`}),`, except now we can't solve the constraints in a fixed order, because the constraint sets are no longer nicely nested with increasing sizes. Consider this example:`]}),`
`,`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`{
    'nuts': {'kfxr'}, 'shellfish': {'xzhxj', 'chbtp'}, 'soy': {'kfxr', 'chbtp'},
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Here, the constraints can only be solved in the order nuts → soy → shellfish, but because both shellfish and soy have constraint size 2, we cannot know in advance which to solve first. Since there are only 8 allergens anyway, I use a `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mi,{mathvariant:`script`,children:`O`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`(`}),(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mi,{children:`n`}),(0,i.jsx)(o.mn,{children:`2`})]}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`\\mathcal{O}(n^2)`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1.0641em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mord mathcal`,style:{marginRight:`0.02778em`},children:`O`}),(0,i.jsx)(o.span,{className:`mopen`,children:`(`}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`n`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`2`})})]})})})})})]}),(0,i.jsx)(o.span,{className:`mclose`,children:`)`})]})})]}),` solution to pull one at a time:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`while len(possible_ingredients) > 0:
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};