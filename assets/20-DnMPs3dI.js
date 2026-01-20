import{u as s,j as e}from"./index-BGRydkNA.js";import{F as a,a as o}from"./_components-CaosYk2-.js";const i={tags:["Image processing","Geometry"],description:"Advent of Code 2020 - Day 20: Jurassic Jigsaw, a problem that involves Image processing and Geometry. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:20,title:"Advent of Code 2020 - Day 20: Jurassic Jigsaw"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 20",e.jsx(n.span,{className:"subtitle",children:"Jurassic Jigsaw"})]}),`
`,`
`,e.jsx(a,{frontMatter:i}),`
`,e.jsxs(n.p,{children:["This has to be the ",e.jsx(n.strong,{children:"HARDEST"})," Advent of Code problem I've ever done. It took me more than 24 hours over multiple days to finish it, with at least 3 rewrites."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Part 1 in itself is simple. We can find pairs of matching edges (including reversed), which represent adjacent tiles. Each tile can have up to 4 neighbors. The corner tiles are the ones with only 2 neighbors, so we just need to find those and multiply their IDs."}),`
`,e.jsx(n.p,{children:"Each tile has 8 possible edges: 4 edges, and their reverses. A 180-degree rotation swaps edges like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`  T ──→ T          B ←── B
L         R      R         L
↓         ↓      ↑         ↑
L         R      R         L
  B ──→ B          T ←── T
`})}),`
`,e.jsxs(n.p,{children:["Let's define the canonical order to be left-to-right for top and bottom edges, and top-to-bottom for left and right edges. Call these edges ",e.jsx(n.code,{children:"T"}),", ",e.jsx(n.code,{children:"R"}),", ",e.jsx(n.code,{children:"B"}),", and ",e.jsx(n.code,{children:"L"}),". Their reverses are ",e.jsx(n.code,{children:"T'"}),", ",e.jsx(n.code,{children:"R'"}),", ",e.jsx(n.code,{children:"B'"}),", and ",e.jsx(n.code,{children:"L'"}),". Then we can describe a 180-degree rotation as: ",e.jsx(n.code,{children:"T => B', R => L', B => T', L => R'"}),". (Read: the original top edge is now the bottom edge reversed, etc.)"]}),`
`,e.jsx(n.p,{children:"We just need to build a mapping from edge content (as a string) to the list of (tile ID, edge ID) pairs, such as:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`{
    '..##.#..#.': [(2311, 'T'), (1427, 'B')],
    '.#..#.##..': [(2311, "T'"), (1427, "B'")],
    '..###..###': [(2311, 'B')],
    '###..###..': [(2311, "B'")],
    '.#####..#.': [(2311, 'L'), (1951, 'R')],
    '.#..#####.': [(2311, "L'"), (1951, "R'")],
    ...
}
`})}),`
`,e.jsxs(n.p,{children:["Note that each pairing occurs twice, in opposite directions, such as ",e.jsx(n.code,{children:"T'"}),"/",e.jsx(n.code,{children:"B'"})," and ",e.jsx(n.code,{children:"T"}),"/",e.jsx(n.code,{children:"B"}),". We'll leave deduplication later. It is guaranteed that each edge matches at most one other edge; otherwise we have unresolvable ambiguity (or at least the problem would be much harder because now we may have to consider multiple configurations and backtrack)."]}),`
`,e.jsx(n.p,{children:"Then, we can build a mapping from tile ID to the set of neighboring tile IDs, with the edge pairs."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`{
    2311: {
        1427: [('T', 'B'), ("T'", "B'")],
        1951: [('L', 'R'), ("L'", "R'")],
        3079: [('R', "L'"), ("R'", 'L')],
    },
    1427: {
        2311: [('B', 'T'), ("B'", "T'")],
        1489: [('T', 'B'), ("T'", "B'")],
        2729: [('L', 'R'), ("L'", "R'")],
        2473: [('R', 'B'), ("R'", "B'")],
    },
    ...
}
`})}),`
`,e.jsx(n.p,{children:"We just need to find the tiles with only 2 neighbors and multiply their IDs."}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"Now onto the real business: actually assembling the image. If the pieces are already correctly oriented, we should expect this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`{
    2311: {
        1427: [('B', 'T'), ("B'", "T'")],
        1951: [('L', 'R'), ("L'", "R'")],
        3079: [('R', 'L'), ("R'", "L'")],
    },
    1427: {
        2311: [('T', 'B'), ("T'", "B'")],
        1489: [('B', 'T'), ("B'", "T'")],
        2729: [('L', 'R'), ("L'", "R'")],
        2473: [('R', 'L'), ("R'", "L'")],
    },
    ...
}
`})}),`
`,e.jsxs(n.p,{children:["Where all alignments are ",e.jsx(n.code,{children:"T"})," to ",e.jsx(n.code,{children:"B"})," and ",e.jsx(n.code,{children:"L"})," to ",e.jsx(n.code,{children:"R"}),". But we don't, so the goal is to rotate and flip the tiles such that all alignments are correct."]}),`
`,e.jsx(n.p,{children:"There are 5 possible transformations:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`  Original       90deg CW       180deg        90deg CCW
  --------       --------       ------        ---------

  T ──→ T        L ←── L        B ←── B        R ──→ R
L         R    B         T    R         L    T         B
↓         ↓    ↓         ↓    ↑         ↑    ↑         ↑
L         R    B         T    R         L    T         B
  B ──→ B        R ←── R        T ←── T        L ──→ L

Left-right flip         Top-bottom flip
---------------         ---------------

    T ←── T                 B ──→ B
  R         L             L         R
  ↓         ↓             ↑         ↑
  R         L             L         R
    B ←── B                 T ──→ T
`})}),`
`,e.jsx(n.p,{children:'There are a lot of ways to combine these transformations, but ultimately there are only 8 unique orientations for each tile (once you choose the "top" edge to be one of the 8 directions, the rest are determined). This means that fixing one edge automatically fixes all other edges as well.'}),`
`,e.jsx(n.p,{children:"The final grid should look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`AA AB AC AD ...
BA BB BC BD ...
CA CB CC CD ...
...
`})}),`
`,e.jsxs(n.p,{children:["First I need to pick a starting AA tile, whose orientation is completely arbitrary, since its orientation determines the orientation of the entire image, which can be rotated/flipped however. The requirements are: (1) it must be a corner tile, and (2) it must border its two neighbors on the right and bottom (so that we can build the image left-to-right, top-to-bottom)—equivalently, its left and top edges must be unmatched edges. This can be achieved with just a rotation. For example, if the current unmatched edges are ",e.jsx(n.code,{children:"B"})," and ",e.jsx(n.code,{children:"L"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`L L L T   X X X X
B . . T   X X X X
B . . T   X X X X
B R R R   X X X X

X X X X
X X X X
`})}),`
`,e.jsx(n.p,{children:"This corresponds to a 90-degree counterclockwise rotation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`T T T R   X X X X
L . . R   X X X X
L . . R   X X X X
L B B B   X X X X

X X X X
X X X X
`})}),`
`,e.jsx(n.p,{children:"(No need to worry about flipping here; all we want is to get the unmatched edges to the top and left.)"}),`
`,e.jsxs(n.p,{children:["Once we have AA, we immediately know how to orient AB and BA. For AB: (1) its left edge must match AA's right edge, and (2) its top edge must be unmatched. Let's suppose currently we have ",e.jsx(n.code,{children:`{ AA: { AB: [('R', "B'")] } }`}),", which looks like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`T T T R   B'R'R'R'
L . . R   B'. . T'
L . . R   B'. . T'
L B B B   L'L'L'T'
`})}),`
`,e.jsx(n.p,{children:"We first get the top edge right. If there exists a top neighbor, then we need the top edge to align with that; otherwise, we need it to be unmatched. In this case, we want it unmatched, so we need to rotate 90 degrees counterclockwise:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`T T T R   R T'T'T'
L . . R   R . . L
L . . R   R . . L
L B B B   B'B'B'L
`})}),`
`,e.jsx(n.p,{children:"Now we have (R, R) for AA-AB. To get to (R, L), we need to flip left-right:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`T T T R   T T T R
L . . R   L . . R
L . . R   L . . R
L B B B   L B B B
`})}),`
`,e.jsx(n.p,{children:"Now AB is correctly oriented. We can repeat this process for all tiles in the first row (using the tile to the left to determine orientation), then for all subsequent rows (using the tile above to determine orientation)."}),`
`,e.jsx(n.p,{children:"There are two ways to know when to flip. We can either detect (B, T') alignments and flip left-right, or we can check the left neighbor like we did above. The latter is simpler because it works for the first row as well. As for the first column, we need the left to be unmatched, and the top edge to match the tile above."}),`
`,e.jsxs(n.p,{children:["To implement one rotation, we need to update two things: (1) the edge mapping, and (2) the tile image itself. The tile image update can be done with NumPy's ",e.jsx(n.code,{children:"rot90"})," and ",e.jsx(n.code,{children:"fliplr"}),"/",e.jsx(n.code,{children:"flipud"})," functions. For the edge mapping, we can use the transformations defined earlier. For example, a 90-degree clockwise rotation can be implemented like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`realign(
    grid_id,
    edge_alignment,
    {"T": "B'", "B": "T'", "L": "R'", "R": "L'"},
)

def realign(
    grid_id: int,
    edge_alignment: EdgeAlignment,
    replacements: dict[EdgeDirection, EdgeDirection],
):
    def replace_edge(old_edge: EdgeDirection):
        if old_edge.endswith("'"):
            new_edge = replacements[old_edge[0]]
            if new_edge.endswith("'"):
                return new_edge[0]
            else:
                return new_edge + "'"
        else:
            return replacements[old_edge]

    for nbr in edge_alignment[grid_id]:
        edge_alignment[grid_id][nbr] = [
            (replace_edge(edge_pair[0]), edge_pair[1])
            for edge_pair in edge_alignment[grid_id][nbr]
        ]
        edge_alignment[nbr][grid_id] = [(b, a) for a, b in edge_alignment[grid_id][nbr]]
`})}),`
`,e.jsx(n.p,{children:"The actual alignment algorithm can probably be greatly simplified, but it was hacked together after many attempts, so I left it as is."}),`
`,e.jsx(n.p,{children:"Finally to test the monster, we have an array:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`monster = np.array(
    [
        list("                  # "),
        list("#    ##    ##    ###"),
        list(" #  #  #  #  #  #   "),
    ]
)
`})}),`
`,e.jsxs(n.p,{children:["We just rotate and flip this array in all 8 orientations, and for each orientation, we slide it over the entire image and check for matches. If we find a match, we mark those positions as ",e.jsx(n.code,{children:"O"})," in the image. At the end, we count the number of ",e.jsx(n.code,{children:"#"})," remaining in the image."]}),`
`,e.jsx(o,{frontMatter:i})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,i as frontMatter};
