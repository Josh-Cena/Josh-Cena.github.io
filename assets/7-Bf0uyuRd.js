import{u as i,j as e}from"./index-DsugHUjk.js";import{P as a,a as o}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Data structures","Puzzle"],title:"Advent of Code 2022 - Day 7: No Space Left On Device",description:"Advent of Code 2022 - Day 7: No Space Left On Device, a problem that involves Data structures and Puzzle. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:7};function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 7",e.jsx(n.span,{className:"subtitle",children:"No Space Left On Device"})]}),`
`,`
`,e.jsx(a,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"The main goal is to construct a dirent tree, represented as:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`data Dirent = File Int | Directory (Map Text Dirent)
`})}),`
`,e.jsxs(n.p,{children:["I also added a ",e.jsx(n.code,{children:"show"})," for debugging purposes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`instance Show Dirent where
  show (Directory subDir) = Map.foldlWithKey join "" subDir
    where
      join :: String -> Text -> Dirent -> String
      join acc name dirent =
        acc
          ++ "- "
          ++ T.unpack name
          ++ ( case dirent of
                 File _ -> show dirent
                 Directory _ -> ":\\n" ++ unlines (map ("  " ++) $ lines $ show dirent)
             )
  show (File size) = " (" ++ show size ++ ")\\n"
`})}),`
`,e.jsxs(n.p,{children:["The main idea is to process the commands one by one. The state we keep track of is ",e.jsx(n.code,{children:"(Dirent, [Text])"}),", representing the full directory tree and the current working directory as a list of path components. Note that the CWD is stored in reverse so that we can push/pop efficiently at the front. ",e.jsx(n.code,{children:"logs"})," is the list of commands, each one starting immediately after ",e.jsx(n.code,{children:'"$ "'})," and ending before the next ",e.jsx(n.code,{children:'"$ "'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`(dir, _) = foldl' processCmd (Directory Map.empty, []) logs

processCmd :: TraverseState -> Text -> TraverseState
processCmd st log
  | command == "cd" = cd (T.drop 3 log) st
  | command == "ls" = ls (tail $ T.lines log) st
  | otherwise = error ("Unknown command: " ++ command)
  where
    command = T.unpack $ T.take 2 log
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"cd"})," changes the CWD:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`cd :: Text -> TraverseState -> TraverseState
cd dir (tree, path)
  | dir == T.pack ".." = (tree, tail path)
  | dir == T.pack "/" = (tree, [])
  | otherwise = (tree, dir : path)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ls"})," updates the tree with the contents of the current directory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`ls logs (tree, path) = (newTree, path)
  where
    newTree = updateSubtree (reverse path) tree $ Directory $ addEntries $ getDirents path tree
`})}),`
`,e.jsx(n.p,{children:"Here are the main steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Go down the tree to reach the CWD"}),`
`,e.jsxs(n.li,{children:["Iterate through the ",e.jsx(n.code,{children:"ls"})," logs and add entries to the current directory"]}),`
`,e.jsx(n.li,{children:"Traverse back up the tree, updating each parent directory with the modified subtree"}),`
`]}),`
`,e.jsx(n.p,{children:"First step is to go down:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`getDirents :: [Text] -> Dirent -> Map Text Dirent
getDirents [] (Directory root) = root
getDirents _ (File _) = error "Cannot get subdirectories of a file"
getDirents (dirName : parentPath) dir = case Map.lookup dirName (getDirents parentPath dir) of
  Just (Directory subDir) -> subDir
  _ -> error ("Directory not found: " ++ T.unpack dirName)
`})}),`
`,e.jsx(n.p,{children:"Second step is to add entries and create a new directory:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`addEntries :: Map Text Dirent -> Map Text Dirent
addEntries dirents = foldr (addEntry . parseLsLog) dirents logs
  where
    addEntry (FileEntry name size) dirents = Map.insert name (File size) dirents
    addEntry (DirEntry name) dirents = case Map.lookup name dirents of
      Just _ -> dirents
      _ -> Map.insert name (Directory Map.empty) dirents
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"parseLsLog"})," parses a single line of ",e.jsx(n.code,{children:"ls"})," output:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`data ParsedEntry = FileEntry Text Int | DirEntry Text deriving (Show)

parseLsLog :: Text -> ParsedEntry
parseLsLog log
  | size == T.pack "dir" = DirEntry name
  | otherwise = FileEntry name (readT size)
  where
    [size, name] = T.words log
`})}),`
`,e.jsx(n.p,{children:"Third step is to update the subtree back up to the root, each time popping the highest path segment from CWD and updating the corresponding directory:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`updateSubtree :: [Text] -> Dirent -> Dirent -> Dirent
updateSubtree [] _ newDir = newDir
updateSubtree _ (File _) _ = error "Cannot update a file"
updateSubtree (topSeg : rest) (Directory root) newDir =
  Directory
    ( Map.insert topSeg (updateSubtree rest subtree newDir) root
    )
  where
    subtree = case Map.lookup topSeg root of
      Just dir -> dir
      Nothing -> error ("Directory not found: " ++ T.unpack topSeg)
`})}),`
`,e.jsx(n.p,{children:"Since we need to compute the sizes of all directories, I collect all of them in a list:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`sizes :: Dirent -> [Int]
sizes (File size) = [size]
sizes (Directory subDir) = (subdirsSize + filesSize) : concat allSizes
  where
    (files, subdirs) = partition isFile $ Map.elems subDir
    allSizes = map sizes subdirs
    subdirsSize = sumMap head allSizes
    filesSize = sumMap (\\(File size) -> size) files

    isFile :: Dirent -> Bool
    isFile (File _) = True
    isFile _ = False
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Since the ",e.jsx(n.code,{children:"sizes"})," list is ordered from top down, the root size is the head. To make the final size less than ",e.jsx(n.code,{children:"40000000"}),", we need to delete at least ",e.jsx(n.code,{children:"rootSize - 40000000"}),". We find the smallest directory that is at least that big by sorting the sizes and using ",e.jsx(n.code,{children:"find"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`fromJust $ find (>= total - 40000000) (sort dirSizes)
`})}),`
`,e.jsx(o,{frontMatter:t})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default,t as frontMatter};
