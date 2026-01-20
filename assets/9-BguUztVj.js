import{u as l,j as e}from"./index-BGRydkNA.js";import{F as a,a as o}from"./_components-CaosYk2-.js";const i={tags:["Data structures"],description:"Advent of Code 2024 - Day 9: Disk Fragmenter, a problem that involves Data structures. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:9,title:"Advent of Code 2024 - Day 9: Disk Fragmenter"};function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 9",e.jsx(n.span,{className:"subtitle",children:"Disk Fragmenter"})]}),`
`,`
`,e.jsx(a,{frontMatter:i}),`
`,e.jsxs(n.p,{children:["This problem pays tribute to ",e.jsx(n.a,{href:"/notes/aoc/2021/23/",children:"2021 day 23"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["The first step is to parse the input into the same format as used in the demonstration: an array of blocks, which is ",e.jsx(n.code,{children:"-1"})," if empty, and the file ID otherwise."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let line = List.hd data in
let chunks = Array.init (9 * String.length line) (fun _ -> -1) in
let i = ref 0 in
let id = ref 0 in
String.iteri
  (fun ind c ->
    let digit = Char.code c - Char.code '0' in
    if ind mod 2 = 0 then begin
      for j = 0 to digit - 1 do
        chunks.(!i + j) <- !id
      done;
      id := !id + 1
    end;
    i := !i + digit)
  line;
`})}),`
`,e.jsx(n.p,{children:"Then we make a list of blank positions, which we can use for insertion later."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let blanks =
  ref
    (Array.to_list blocks
    |> List.mapi (fun i x -> (i, x))
    |> List.filter_map (fun (i, x) -> if x = -1 then Some i else None))
`})}),`
`,e.jsx(n.p,{children:"Now we can loop through each block position from the end, using the list of blank positions as a queue. Each time we find a non-empty blank, we swap it with the first blank position in the list, and remove that position from the list. We stop when the iteration reaches the start of the blocks array, or when the current block is to the left of the first blank position."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec loop i =
  if i < 0 || List.hd !blanks >= i then ()
  else begin
    if blocks.(i) <> -1 then begin
      let pos = List.hd !blanks in
      blanks := List.tl !blanks;
      blocks.(pos) <- blocks.(i);
      blocks.(i) <- -1
    end;
    loop (i - 1)
  end
in
loop (Array.length blocks - 1);
`})}),`
`,e.jsx(n.p,{children:"Finally calculate the checksum as specified:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let result =
  Array.to_list blocks
  |> List.mapi (fun i x -> (i, x))
  |> List.filter (fun (_, x) -> x <> -1)
  |> List.map (fun (i, x) -> i * x)
  |> List.fold_left ( + ) 0
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"Now we want to move files as a whole, meaning we can no longer iterate blocks as discrete things. So the first step is to represent the disk as segments. My representation of the disk is a list of segments, where each segment contains a list of files followed by a free space:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`|0 0 . . .|1 1 1 . . .|2 . . .|3 3 3|
|         |           |       |     |
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`type file = { id : int; occ : int; ind : int }
type seg = { files : file list; free_size : int; ind : int }

let build_segments blocks =
  let rec aux (id, blocks) acc ind =
    match blocks with
    | occ :: [] ->
        let files = [ { id; occ; ind } ] in
        let seg = { files; free_size = 0; ind } in
        List.rev (seg :: acc)
    | occ :: free :: t ->
        let files = [ { id; occ; ind } ] in
        let seg =
          { files; free_size = free; ind }
        in
        aux (id + 1, t) (seg :: acc) (ind + occ + free)
    | _ -> List.rev acc
  in
  aux (0, blocks) [] 0
in
let segments = Array.of_list (build_segments blocks)
`})}),`
`,e.jsx(n.p,{children:"Now I iterate through the segments from the end, and for each segment, I try to move each file in it to the leftmost segment that has enough free space."}),`
`,e.jsxs(n.p,{children:["Each time, I try to empty a segment by moving all of its files to the left. I go through each file, right to left (which is head to tail in the ",e.jsx(n.code,{children:"files"})," list), and search for the leftmost segment with enough free space (",e.jsx(n.code,{children:"s.free_size >= occ"}),"). Noticing that for each segment, files are always removed from the right and added to the right, I store the files in reverse order, so that the last file is always at the head of the list. If a suitable ",e.jsx(n.code,{children:"pos"})," is found, I need to update the following:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Update the ",e.jsx(n.code,{children:"ind"})," of the file to be the new position in the target segment."]}),`
`,e.jsxs(n.li,{children:["Decrease the ",e.jsx(n.code,{children:"free_size"})," of the target segment by the size of the file."]}),`
`,e.jsxs(n.li,{children:["Append the file to that segment's ",e.jsx(n.code,{children:"files"})," list (which is the head of the list)."]}),`
`,e.jsxs(n.li,{children:["Remove the file from the current segment's ",e.jsx(n.code,{children:"files"})," list. I have a ",e.jsx(n.code,{children:"remaining_files"})," list that I build up, which are the files that I can't move and should remain in the current segment."]}),`
`,e.jsxs(n.li,{children:["Because any segment to the right of the current segment will never be used again, I don't need to worry about the current segment's ",e.jsx(n.code,{children:"free_size"}),", which is only relevant for segments waiting to receive files. This also means that I don't have to merge any fragmented space either."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec move_all_files i remaining_files = function
  | [] -> remaining_files
  | { id; occ; ind } :: t ->
      let pos = Array.find_index (fun s -> s.free_size >= occ) segments in
      begin match pos with
      | Some p when p < i ->
          let target_seg = segments.(p) in
          let new_ind =
            match target_seg.files with
            | [] -> target_seg.ind
            | hd :: _ -> hd.ind + hd.occ
          in
          segments.(p) <-
            {
              target_seg with
              files = { id; occ; ind = new_ind } :: target_seg.files;
              free_size = target_seg.free_size - occ;
            };
          move_all_files i remaining_files t
      | _ -> move_all_files i ({ id; occ; ind } :: remaining_files) t
      end
in
for i = Array.length segments - 1 downto 0 do
  segments.(i) <-
    { (segments.(i)) with files = move_all_files i [] segments.(i).files }
done;
`})}),`
`,e.jsx(n.p,{children:"Because each file knows its index, the checksum is as straightforward as part 1."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let checksum_of_file file =
  List.fold_left ( + ) 0
    (List.init file.occ (fun i -> (file.ind + i) * file.id))
in
let checksum_of_segment seg =
  List.map checksum_of_file seg.files |> List.fold_left ( + ) 0
in
let result =
  Array.map checksum_of_segment segments |> Array.fold_left ( + ) 0
`})}),`
`,e.jsx(o,{frontMatter:i})]})}function h(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default,i as frontMatter};
