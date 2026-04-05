import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 4`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Passport Processing`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`For each passport, we first collect the fields as (key, value) pairs in a dictionary:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`parts = entry.replace("\\n", " ").split()
fields: dict[str, str] = {}
for part in parts:
    subparts = part.split(":", 1)
    fields[subparts[0]] = subparts[1]
`})}),`
`,(0,i.jsx)(a.p,{children:`Then we check if all required fields are present:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`if all(k in fields for k in required.keys()):
    count += 1
`})}),`
`,(0,i.jsxs)(a.p,{children:[`(The `,(0,i.jsx)(a.code,{children:`required`}),` dictionary is defined for part 2.)`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`When I first did part 1, `,(0,i.jsx)(a.code,{children:`required`}),` was just a set of field names. For part 2, I changed it to a dictionary mapping field names to validation functions. Different fields have different validation rules, so this makes it easy to organize them:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`required: dict[str, Callable[[str], bool]] = {
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
`,(0,i.jsxs)(a.p,{children:[`The validation rules include range checks, string pattern checks, and a mix of both (for `,(0,i.jsx)(a.code,{children:`hgt`}),`).`]}),`
`,(0,i.jsxs)(a.p,{children:[`The problem is vague about what to do with duplicate fields, so for duplicate fields, I immediately invalidate the passport, and only validate passports with unique fields. This is straightforward in Python with `,(0,i.jsx)(a.code,{children:`for...else`}),`:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`for part in parts:
    subparts = part.split(":", 1)
    if subparts[0] in fields:
        break
    fields[subparts[0]] = subparts[1]
else:
    if all(k in fields and required[k](fields[k]) for k in required.keys()):
        count += 1
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`String manipulation`],title:`Advent of Code 2020 - Day 4: Passport Processing`,description:`Advent of Code 2020 - Day 4: Passport Processing, a problem that involves String manipulation. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:4};export{o as default};