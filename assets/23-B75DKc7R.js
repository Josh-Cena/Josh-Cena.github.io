import{u as a,j as n}from"./index-U-3-Orkv.js";import{P as o,a as c}from"./_components-DNOqqG7-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["Data structures"],title:"Advent of Code 2020 - Day 23: Crab Cups",description:"Advent of Code 2020 - Day 23: Crab Cups, a problem that involves Data structures. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:23};function s(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2020 - Day 23",n.jsx(e.span,{className:"subtitle",children:"Crab Cups"})]}),`
`,`
`,n.jsx(o,{frontMatter:i}),`
`,n.jsx(e.p,{children:"We need efficient deletion and insertion at arbitrary points in the list. but we don't need to know what cup is at an arbitrary position (we do want to know the position of an arbitrary cup though). A linked list is a natural fit for this, especially since it can also be made circular easily. Here is my single-linked list:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`class Cup:
    label: int
    next: "Cup"

    def __init__(self, label: int, next: Union["Cup", None] = None):
        self.label = label
        self.next = next if next else self
`})}),`
`,n.jsx(e.p,{children:"To find the destination cup efficiently, we can maintain a mapping from label to cup nodes, in addition to the linked list itself."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`tail = Cup(nums[-1])
num_to_cup = {nums[-1]: tail}
head = tail
for i in range(n - 2, -1, -1):
    head = Cup(nums[i], head)
    num_to_cup[nums[i]] = head
tail.next = head
cur_cup = head
`})}),`
`,n.jsx(e.p,{children:"Now we can faithfully implement the rules. Code is self-explanatory. The only potentially messy part is the splicing of the picked cups out of the list and into their new position."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`cur_cup = head
for _ in tqdm(range(rounds)):
    cur_num = cur_cup.label
    dest_num = (cur_num - 1 - 1) % n + 1
    picked_cups = [cur_cup.next, cur_cup.next.next, cur_cup.next.next.next]
    picked_nums = [c.label for c in picked_cups]
    while dest_num in picked_nums:
        dest_num = (dest_num - 1 - 1) % n + 1
    dest_cup = num_to_cup[dest_num]
    cur_cup.next = picked_cups[-1].next
    dest_next = dest_cup.next
    dest_cup.next = picked_cups[0]
    picked_cups[-1].next = dest_next
    cur_cup = cur_cup.next
`})}),`
`,n.jsx(c,{frontMatter:i})]})}function d(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{d as default,i as frontMatter};
