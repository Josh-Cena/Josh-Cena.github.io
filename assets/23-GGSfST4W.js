import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2020 - Day 23: Crab Cups`,description:`Advent of Code 2020 - Day 23: Crab Cups, a problem that involves Data structures. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:23};function o(e){let o={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 23`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Crab Cups`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`We need efficient deletion and insertion at arbitrary points in the list. but we don't need to know what cup is at an arbitrary position (we do want to know the position of an arbitrary cup though). A linked list is a natural fit for this, especially since it can also be made circular easily. Here is my single-linked list:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`class Cup:
    label: int
    next: "Cup"

    def __init__(self, label: int, next: Union["Cup", None] = None):
        self.label = label
        self.next = next if next else self
`})}),`
`,(0,i.jsx)(o.p,{children:`To find the destination cup efficiently, we can maintain a mapping from label to cup nodes, in addition to the linked list itself.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`tail = Cup(nums[-1])
num_to_cup = {nums[-1]: tail}
head = tail
for i in range(n - 2, -1, -1):
    head = Cup(nums[i], head)
    num_to_cup[nums[i]] = head
tail.next = head
cur_cup = head
`})}),`
`,(0,i.jsx)(o.p,{children:`Now we can faithfully implement the rules. Code is self-explanatory. The only potentially messy part is the splicing of the picked cups out of the list and into their new position.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`cur_cup = head
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};