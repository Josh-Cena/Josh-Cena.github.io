import{u as a,j as e}from"./index-DH3w8YvN.js";import{P as i,a as o}from"./_components-X9vtOlXN.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["String manipulation"],title:"Advent of Code 2020 - Day 4: Passport Processing",description:"Advent of Code 2020 - Day 4: Passport Processing, a problem that involves String manipulation. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:4};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 4",e.jsx(n.span,{className:"subtitle",children:"Passport Processing"})]}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"For each passport, we first collect the fields as (key, value) pairs in a dictionary:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`parts = entry.replace("\\n", " ").split()
fields: dict[str, str] = {}
for part in parts:
    subparts = part.split(":", 1)
    fields[subparts[0]] = subparts[1]
`})}),`
`,e.jsx(n.p,{children:"Then we check if all required fields are present:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`if all(k in fields for k in required.keys()):
    count += 1
`})}),`
`,e.jsxs(n.p,{children:["(The ",e.jsx(n.code,{children:"required"})," dictionary is defined for part 2.)"]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["When I first did part 1, ",e.jsx(n.code,{children:"required"})," was just a set of field names. For part 2, I changed it to a dictionary mapping field names to validation functions. Different fields have different validation rules, so this makes it easy to organize them:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`required: dict[str, Callable[[str], bool]] = {
    "byr": lambda x: 1920 <= int(x) <= 2002,
    "iyr": lambda x: 2010 <= int(x) <= 2020,
    "eyr": lambda x: 2020 <= int(x) <= 2030,
    "hgt": lambda x: (x.endswith("cm") and 150 <= int(x[:-2]) <= 193)
    or (x.endswith("in") and 59 <= int(x[:-2]) <= 76),
    "hcl": lambda x: re.match(r"^#[0-9a-f]{6}$", x) is not None,
    "ecl": lambda x: x in ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"],
    "pid": lambda x: re.match(r"^[0-9]{9}$", x) is not None,
}
`})}),`
`,e.jsxs(n.p,{children:["The validation rules include range checks, string pattern checks, and a mix of both (for ",e.jsx(n.code,{children:"hgt"}),")."]}),`
`,e.jsxs(n.p,{children:["The problem is vague about what to do with duplicate fields, so for duplicate fields, I immediately invalidate the passport, and only validate passports with unique fields. This is straightforward in Python with ",e.jsx(n.code,{children:"for...else"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`for part in parts:
    subparts = part.split(":", 1)
    if subparts[0] in fields:
        break
    fields[subparts[0]] = subparts[1]
else:
    if all(k in fields and required[k](fields[k]) for k in required.keys()):
        count += 1
`})}),`
`,e.jsx(o,{frontMatter:s})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,s as frontMatter};
