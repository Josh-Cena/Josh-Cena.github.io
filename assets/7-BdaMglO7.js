import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Data structures`,`Puzzle`],title:`Advent of Code 2022 - Day 7: No Space Left On Device`,description:`Advent of Code 2022 - Day 7: No Space Left On Device, a problem that involves Data structures and Puzzle. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:7};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 7`,(0,i.jsx)(o.span,{className:`subtitle`,children:`No Space Left On Device`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`The main goal is to construct a dirent tree, represented as:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`data Dirent = File Int | Directory (Map Text Dirent)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`I also added a `,(0,i.jsx)(o.code,{children:`show`}),` for debugging purposes.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`instance Show Dirent where
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
`,(0,i.jsxs)(o.p,{children:[`The main idea is to process the commands one by one. The state we keep track of is `,(0,i.jsx)(o.code,{children:`(Dirent, [Text])`}),`, representing the full directory tree and the current working directory as a list of path components. Note that the CWD is stored in reverse so that we can push/pop efficiently at the front. `,(0,i.jsx)(o.code,{children:`logs`}),` is the list of commands, each one starting immediately after `,(0,i.jsx)(o.code,{children:`"$ "`}),` and ending before the next `,(0,i.jsx)(o.code,{children:`"$ "`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`(dir, _) = foldl' processCmd (Directory Map.empty, []) logs

processCmd :: TraverseState -> Text -> TraverseState
processCmd st log
  | command == "cd" = cd (T.drop 3 log) st
  | command == "ls" = ls (tail $ T.lines log) st
  | otherwise = error ("Unknown command: " ++ command)
  where
    command = T.unpack $ T.take 2 log
`})}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`cd`}),` changes the CWD:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`cd :: Text -> TraverseState -> TraverseState
cd dir (tree, path)
  | dir == T.pack ".." = (tree, tail path)
  | dir == T.pack "/" = (tree, [])
  | otherwise = (tree, dir : path)
`})}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`ls`}),` updates the tree with the contents of the current directory.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`ls logs (tree, path) = (newTree, path)
  where
    newTree = updateSubtree (reverse path) tree $ Directory $ addEntries $ getDirents path tree
`})}),`
`,(0,i.jsx)(o.p,{children:`Here are the main steps:`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`Go down the tree to reach the CWD`}),`
`,(0,i.jsxs)(o.li,{children:[`Iterate through the `,(0,i.jsx)(o.code,{children:`ls`}),` logs and add entries to the current directory`]}),`
`,(0,i.jsx)(o.li,{children:`Traverse back up the tree, updating each parent directory with the modified subtree`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`First step is to go down:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`getDirents :: [Text] -> Dirent -> Map Text Dirent
getDirents [] (Directory root) = root
getDirents _ (File _) = error "Cannot get subdirectories of a file"
getDirents (dirName : parentPath) dir = case Map.lookup dirName (getDirents parentPath dir) of
  Just (Directory subDir) -> subDir
  _ -> error ("Directory not found: " ++ T.unpack dirName)
`})}),`
`,(0,i.jsx)(o.p,{children:`Second step is to add entries and create a new directory:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`addEntries :: Map Text Dirent -> Map Text Dirent
addEntries dirents = foldr (addEntry . parseLsLog) dirents logs
  where
    addEntry (FileEntry name size) dirents = Map.insert name (File size) dirents
    addEntry (DirEntry name) dirents = case Map.lookup name dirents of
      Just _ -> dirents
      _ -> Map.insert name (Directory Map.empty) dirents
`})}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`parseLsLog`}),` parses a single line of `,(0,i.jsx)(o.code,{children:`ls`}),` output:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`data ParsedEntry = FileEntry Text Int | DirEntry Text deriving (Show)

parseLsLog :: Text -> ParsedEntry
parseLsLog log
  | size == T.pack "dir" = DirEntry name
  | otherwise = FileEntry name (readT size)
  where
    [size, name] = T.words log
`})}),`
`,(0,i.jsx)(o.p,{children:`Third step is to update the subtree back up to the root, each time popping the highest path segment from CWD and updating the corresponding directory:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`updateSubtree :: [Text] -> Dirent -> Dirent -> Dirent
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
`,(0,i.jsx)(o.p,{children:`Since we need to compute the sizes of all directories, I collect all of them in a list:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`sizes :: Dirent -> [Int]
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Since the `,(0,i.jsx)(o.code,{children:`sizes`}),` list is ordered from top down, the root size is the head. To make the final size less than `,(0,i.jsx)(o.code,{children:`40000000`}),`, we need to delete at least `,(0,i.jsx)(o.code,{children:`rootSize - 40000000`}),`. We find the smallest directory that is at least that big by sorting the sizes and using `,(0,i.jsx)(o.code,{children:`find`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`fromJust $ find (>= total - 40000000) (sort dirSizes)
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};