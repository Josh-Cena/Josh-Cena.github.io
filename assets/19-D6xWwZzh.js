import{u as i,j as s}from"./index-L6ckUcGi.js";import{F as l,a as r}from"./_components-DB3Df8DK.js";const a={tags:["Image processing","Geometry"],description:"Advent of Code 2021 - Day 19: Beacon Scanner, a problem that involves Image processing and Geometry. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:19,title:"Advent of Code 2021 - Day 19: Beacon Scanner"};function t(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h1,{children:["Advent of Code 2021 - Day 19",s.jsx(e.span,{className:"subtitle",children:"Beacon Scanner"})]}),`
`,`
`,s.jsx(l,{frontMatter:a}),`
`,s.jsxs(e.p,{children:["This is like ",s.jsx(e.a,{href:"/notes/aoc/2020/20/",children:"2020 day 20"}),", but in 3D. We have a list of sets of coordinates, and we need to pairwise align them via rotation and translation such that there are at least 12 overlapping points. As the problem already says, there are 24 orientations possible, so for each list of coordinates, we need to compute all 24 orientations, and find one that aligns with another list."]}),`
`,s.jsxs(e.p,{children:["I align based on the 3D coordinate differences ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mo,{stretchy:"false",children:"("}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mi,{children:"j"})]}),s.jsx(e.mo,{children:"−"}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mi,{children:"i"})]}),s.jsx(e.mo,{separator:"true",children:","}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mi,{children:"j"})]}),s.jsx(e.mo,{children:"−"}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mi,{children:"i"})]}),s.jsx(e.mo,{separator:"true",children:","}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mi,{children:"j"})]}),s.jsx(e.mo,{children:"−"}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mi,{children:"i"})]}),s.jsx(e.mo,{stretchy:"false",children:")"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"(x_j - x_i, y_j - y_i, z_j - z_i)"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),s.jsx(e.span,{className:"mopen",children:"("}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.2861em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8694em",verticalAlign:"-0.2861em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.15em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.2861em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8694em",verticalAlign:"-0.2861em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.15em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"-0.044em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.2861em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3117em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"-0.044em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.15em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mclose",children:")"})]})]})]})," between each pair of points in the list, instead of their Euclidean distances, since the latter has less information: it cannot distinguish between ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mo,{stretchy:"false",children:"("}),s.jsx(e.mn,{children:"1"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mn,{children:"2"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mn,{children:"2"}),s.jsx(e.mo,{stretchy:"false",children:")"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"(1,2,2)"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsx(e.span,{className:"mopen",children:"("}),s.jsx(e.span,{className:"mord",children:"1"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord",children:"2"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord",children:"2"}),s.jsx(e.span,{className:"mclose",children:")"})]})})]})," and ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mo,{stretchy:"false",children:"("}),s.jsx(e.mn,{children:"3"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mn,{children:"0"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mn,{children:"0"}),s.jsx(e.mo,{stretchy:"false",children:")"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"(3,0,0)"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsx(e.span,{className:"mopen",children:"("}),s.jsx(e.span,{className:"mord",children:"3"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord",children:"0"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord",children:"0"}),s.jsx(e.span,{className:"mclose",children:")"})]})})]}),", for example. If two sets of beacon coordinates (",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsx(e.mrow,{children:s.jsx(e.mi,{children:"A"})}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"A"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6833em"}}),s.jsx(e.span,{className:"mord mathnormal",children:"A"})]})})]})," and ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsx(e.mrow,{children:s.jsx(e.mi,{children:"B"})}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"B"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6833em"}}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})})]}),") contain at least 12 overlapping beacons, then there exists some rotation of ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsx(e.mrow,{children:s.jsx(e.mi,{children:"B"})}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"B"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6833em"}}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})})]})," that gives rise to at least ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mn,{children:"12"}),s.jsx(e.mo,{children:"×"}),s.jsx(e.mn,{children:"11"}),s.jsx(e.mo,{children:"="}),s.jsx(e.mn,{children:"132"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"12 \\times 11 = 132"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),s.jsx(e.span,{className:"mord",children:"12"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"×"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6444em"}}),s.jsx(e.span,{className:"mord",children:"11"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6444em"}}),s.jsx(e.span,{className:"mord",children:"132"})]})]})]})," overlapping distance vectors. After obtaining the rotation, the translation ensues just by comparing the coordinates of any overlapping beacon pair."]}),`
`,s.jsxs(e.p,{children:["A set of beacons gives rise to a map from distance vectors to the associated pair of beacons (again, because JavaScript doesn't have composite keys, I serialize the distance vectors as strings). The ",s.jsx(e.code,{children:"axes"})," parameter encodes one of the 24 orientations: which original axis maps to x, y, z, and whether each axis is negated (flipped)."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`type Vec3 = [x: number, y: number, z: number];
type Axes = [
  x: number,
  xSign: number,
  y: number,
  ySign: number,
  z: number,
  zSign: number,
];

function transformAxes(coords: Vec3[], axes: Axes): Vec3[] {
  const [xAxis, xSign, yAxis, ySign, zAxis, zSign] = axes;
  return coords.map(
    (p): Vec3 => [p[xAxis] * xSign, p[yAxis] * ySign, p[zAxis] * zSign],
  );
}

function getDistsMap(beacons: Vec3[], axes: Axes): Map<string, [Vec3, Vec3]> {
  const dists = new Map<string, [Vec3, Vec3]>();
  const transformedScanner = transformAxes(beacons, axes);
  for (const coords1 of transformedScanner) {
    for (const coords2 of transformedScanner) {
      if (coords1 === coords2) continue;
      const d = vecSub(coords2, coords1);
      if (dists.has(d.join(","))) throw new Error("Duplicate distance");
      dists.set(d.join(","), [coords1, coords2]);
    }
  }
  return dists;
}
`})}),`
`,s.jsx(e.p,{children:"I maintain a set of aligned beacons, a list of aligned scanners, and a set of remaining unaligned scanners, starting by assuming scanner 0 is at the origin with no rotation:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const remaining = new Set<number>(
  Array.from({ length: scanners.length }, (_, i) => i),
);
remaining.delete(0);
let beaconPositions = scanners[0];
const scannerPositions: Vec3[] = Array.from({ length: scanners.length }, () => [
  0, 0, 0,
]);
`})}),`
`,s.jsxs(e.p,{children:["Now, I start finding matching scanners one at a time. Each time, I compare the distance map of the next scanner to that of ",s.jsx(e.em,{children:"all"})," aligned beacons, so that information from multiple aligned scanners can be combined to find the next alignment (I don't think this is actually necessary, but it makes the algorithm more robust)."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`findScanner: while (remaining.size > 0) {
  const alignedDists = getDistsMap(beaconPositions, [0, 1, 1, 1, 2, 1]);
  for (const j of remaining) {
    // 24 orientations to test for scanner j
    for (const axes of getOrientations()) {
      const distsJ = getDistsMap(scanners[j], axes);
      const commonDists = new Map<string, [[Vec3, Vec3], [Vec3, Vec3]]>();
      for (const dist of alignedDists.keys()) {
        if (distsJ.has(dist)) {
          if (commonDists.has(dist))
            throw new Error("Duplicate common distance");
          commonDists.set(dist, [alignedDists.get(dist)!, distsJ.get(dist)!]);
        }
      }
      if (commonDists.size < 132) continue;
      // Found a matching orientation, execute alignment
      // ...
      continue findScanner;
    }
  }
  throw new Error("Cannot make progress");
}
`})}),`
`,s.jsxs(e.p,{children:["Once a matching orientation is found, I first rotate the scanner's beacons according to ",s.jsx(e.code,{children:"axes"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`scanners[j] = transformAxes(scanners[j], axes);
`})}),`
`,s.jsx(e.p,{children:"Now we need to find the translation. We have a list of intersection points in both the aligned coordinate system and the unaligned one."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const commonDistEntries = [...commonDists.values()];
const overlapAligned = vecDedupe(
  commonDistEntries.flatMap((pairs) => pairs[0]),
);
const overlapUnaligned = vecDedupe(
  commonDistEntries.flatMap((pairs) => pairs[1]),
);
const translation1 = vecSub(overlapAligned[0], overlapUnaligned[0]);
const translation2 = vecSub(overlapAligned[1], overlapUnaligned[1]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"commonDistEntries"})," looks like: ",s.jsx(e.code,{children:"[[[a1, a2], [b1, b2]], [[a3, a4], [b3, b4]]...]"}),". It tells us that ",s.jsx(e.code,{children:"a1"})," corresponds to ",s.jsx(e.code,{children:"b1"}),", ",s.jsx(e.code,{children:"a2"})," to ",s.jsx(e.code,{children:"b2"}),", etc. Therefore, both ",s.jsx(e.code,{children:"overlapAligned"})," and ",s.jsx(e.code,{children:"overlapUnaligned"})," contain the same set of points, just in different coordinate systems. If we order them the same way, then the points in ",s.jsx(e.code,{children:"overlapAligned"})," would one-to-one correspond to those in ",s.jsx(e.code,{children:"overlapUnaligned"}),". Ideally, we want ",s.jsx(e.code,{children:"translation1"})," and ",s.jsx(e.code,{children:"translation2"})," to be the same, but there's one case where they can differ: when the unaligned coordinate system actually has been flipped about every axis. I'm not 100% sure why this happens since I thought the coordinate systems are all right-handed, but anyway, when this happens, we just need to flip ",s.jsx(e.code,{children:"overlapUnaligned"})," about every axis:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`let translation = translation1;
if (
  translation1[0] !== translation2[0] ||
  translation1[1] !== translation2[1] ||
  translation1[2] !== translation2[2]
) {
  translation = vecAdd(
    overlapAligned[0],
    transformAxes(
      [overlapUnaligned[overlapUnaligned.length - 1]],
      [0, -1, 1, -1, 2, -1],
    )[0],
  );
}
`})}),`
`,s.jsxs(e.p,{children:["Now we can translate ",s.jsx(e.code,{children:"scanner[j]"})," and merge its beacons into the ensemble of aligned beacons:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`beaconPositions = vecDedupe([
  ...beaconPositions,
  ...scanners[j].map((coords) => vecAdd(coords, translation)),
]);
remaining.delete(j);
scannerPositions[j] = translation;
`})}),`
`,s.jsxs(e.p,{children:["Part 1 asks for ",s.jsx(e.code,{children:"beaconPositions.length"}),", and part 2 is trivial given ",s.jsx(e.code,{children:"scannerPositions"}),"."]}),`
`,s.jsx(r,{frontMatter:a})]})}function h(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(t,{...n})}):t(n)}export{h as default,a as frontMatter};
