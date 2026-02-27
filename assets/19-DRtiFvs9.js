import{u as i,j as e}from"./index-BfdjqJwq.js";import{P as a,a as r}from"./_components-DIXLoOhb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Dynamic programming"],title:"Advent of Code 2022 - Day 19: Not Enough Minerals",description:"Advent of Code 2022 - Day 19: Not Enough Minerals, a problem that involves Dynamic programming. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:19};function o(n){const t={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2022 - Day 19",e.jsx(t.span,{className:"subtitle",children:"Not Enough Minerals"})]}),`
`,`
`,e.jsx(a,{frontMatter:s}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["This is very similar to ",e.jsx(t.a,{href:"/notes/aoc/2022/16/",children:"day 16"}),". We also want to explore a decision space and maximize the output, where the score of each decision is dependent on how early we made it. Let's start by defining the states of our space."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`data State = State
  { ore :: Int,
    clay :: Int,
    obsidian :: Int,
    geode :: Int,
    oreBots :: Int,
    clayBots :: Int,
    obsidianBots :: Int,
    time :: Int
  }
  deriving (Show)

initState :: State
initState =
  State
    { ore = 0,
      clay = 0,
      obsidian = 0,
      geode = 0,
      oreBots = 1,
      clayBots = 0,
      obsidianBots = 0,
      time = 0
    }
`})}),`
`,e.jsxs(t.p,{children:["Note that I don't keep track of ",e.jsx(t.code,{children:"geodeBots"})," in the state, because they don't affect state transitions. Each time we build a geode bot, we can immediately add the geodes it will produce to the score."]}),`
`,e.jsx(t.p,{children:`I see some people basing their state transitions on "what should I do the next minute?", but the key observation is that most of these recursion steps result in nothing happening because we don't have enough resources to build anything. Instead, like day 16 (where we directly decide which valve to open next, not which valve to go to next), we can base our state transitions on "what should I build next?" This way, we can skip over all the states where we just wait for resources to accumulate.`}),`
`,e.jsx(t.p,{children:"I use a DFS, like day 16. For each state, we try building each type of bot. If no bot can be built (probably because not enough time left to gather enough resources), then the only choice is to sit and wait for the remaining time to elapse."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`bestOutput :: Int -> Blueprint -> Int
bestOutput t bp = go 0 [initState]
  where
    go :: Int -> [State] -> Int
    go best [] = best
    go best (st : stk)
      -- If can't build any bots, tally the score.
      | null nextStates = go (max best (geode st)) stk
      | otherwise = go best stk'
      where
        nextStates =
          [ buildBot t bp st bot
            | bot <- [Ore, Clay, Obsidian, Geode],
              canBuildBot t bp st bot
          ]
        stk' = nextStates ++ stk
`})}),`
`,e.jsxs(t.p,{children:["The core logic is in the ",e.jsx(t.code,{children:"canBuildBot"})," and ",e.jsx(t.code,{children:"buildBot"})," functions. The most important part about state transitioning is figuring out how long it will take to build the next bot, which includes gathering the resources and actually building the bot. For example, if we have 2 ores and 2 ore bots, and we need 7 ores, then we need 5 more ores, which is going to take 3 minutes to mine (ceiling division), and then another minute to build a bot. When building obsidian and geode bots, we need two resources to be simultaneously available."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`timeToMeetReq :: Int -> Int -> Int -> Int
timeToMeetReq req cur rate
  | short <= 0 = 0
  | otherwise = ceilDiv short rate
  where
    short = req - cur

timeToBuildBot :: BotType -> Blueprint -> State -> Int
timeToBuildBot Ore bp st = timeToMeetReq (oreReq bp) (ore st) (oreBots st) + 1
timeToBuildBot Clay bp st = timeToMeetReq (clayReq bp) (ore st) (oreBots st) + 1
timeToBuildBot Obsidian bp st =
  let (oreSpent, claySpent) = obsidianReq bp
      durOre = timeToMeetReq oreSpent (ore st) (oreBots st) + 1
      durClay = timeToMeetReq claySpent (clay st) (clayBots st) + 1
   in max durOre durClay
timeToBuildBot Geode bp st =
  let (oreSpent, obsidianSpent) = geodeReq bp
      durOre = timeToMeetReq oreSpent (ore st) (oreBots st) + 1
      durObsidian = timeToMeetReq obsidianSpent (obsidian st) (obsidianBots st) + 1
   in max durOre durObsidian
`})}),`
`,e.jsx(t.p,{children:"How do we know if we can and should build a bot? This is the most important bit because edge pruning happens here. For part 1 I didn't do any aggressive pruning, so there are only 3 conditions:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["We can't build a bot if we have no bots producing its required resources. For example, we can't build an obsidian bot if we have no clay bots, because we will never be able to gather the required clay. This prevents division by zero in the ",e.jsx(t.code,{children:"timeToBuildBot"})," function."]}),`
`,e.jsx(t.li,{children:"We can't build a bot if we don't have enough time to gather the required resources and build the bot, including if the bot is finished right at the time limit, since it can't mine more things."}),`
`,e.jsx(t.li,{children:"(Optimization) We don't need to build more bots than the maximum required resources for a bot, since we can only build one bot per minute. For example, if we need 4 clays per obsidian bot, then we don't need more than 4 clay bots, because we can't spend more than 4 clays per minute. For ores, we take the maximum of all ore requirements."}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`canBuildBot :: Int -> Blueprint -> State -> BotType -> Bool
canBuildBot t bp st ty = hasBot && hasTime && needsMore
  where
    hasBot = case ty of
      Ore -> True
      Clay -> True
      Obsidian -> clayBots st > 0
      Geode -> obsidianBots st > 0
    hasTime = timeToBuildBot ty bp st + time st < t
    maxOreReq = maximum [oreReq bp, clayReq bp, fst (obsidianReq bp), fst (geodeReq bp)]
    needsMore = case ty of
      Ore -> oreBots st < maxOreReq
      Clay -> clayBots st < snd (obsidianReq bp)
      Obsidian -> obsidianBots st < snd (geodeReq bp)
      Geode -> True
`})}),`
`,e.jsx(t.p,{children:"Now for actually building the bot. We first run the state forward by the time it takes to build the bot. Then we subtract the resources we spent to build the bot, and add the new bot to the state. As stated before, if we build a geode bot, we can immediately add the geodes it will produce to the score, so we don't need to keep track of geode bots in the state."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`buildBot :: Int -> Blueprint -> State -> BotType -> State
buildBot t bp st ty = case ty of
  Ore -> st' {oreBots = oreBots st' + 1, ore = ore st' - oreReq bp}
  Clay -> st' {clayBots = clayBots st' + 1, ore = ore st' - clayReq bp}
  Obsidian ->
    let (oreSpent, claySpent) = obsidianReq bp
     in st'
          { obsidianBots = obsidianBots st' + 1,
            ore = ore st' - oreSpent,
            clay = clay st' - claySpent
          }
  Geode ->
    let (oreSpent, obsidianSpent) = geodeReq bp
     in st'
          { obsidian = obsidian st' - obsidianSpent,
            ore = ore st' - oreSpent,
            geode = geode st' + t - time st' -- Immediately mine all geodes
          }
  where
    dur = timeToBuildBot ty bp st
    -- Run the state forward for dur minutes, not building any bots.
    st' =
      st
        { ore = ore st + oreBots st * dur,
          clay = clay st + clayBots st * dur,
          obsidian = obsidian st + obsidianBots st * dur,
          time = time st + dur
        }
`})}),`
`,e.jsx(t.p,{children:"Performance is okay: it runs in ~350ms."}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Because the state space grows exponentially with time, adding another 8 minutes to the time limit roughly means multiplying the runtime by ",e.jsxs(t.span,{className:"katex",children:[e.jsx(t.span,{className:"katex-mathml",children:e.jsx(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(t.semantics,{children:[e.jsxs(t.mrow,{children:[e.jsxs(t.msup,{children:[e.jsx(t.mn,{children:"4"}),e.jsx(t.mn,{children:"8"})]}),e.jsx(t.mo,{children:"="}),e.jsx(t.mn,{children:"65536"})]}),e.jsx(t.annotation,{encoding:"application/x-tex",children:"4^8 = 65536"})]})})}),e.jsxs(t.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(t.span,{className:"base",children:[e.jsx(t.span,{className:"strut",style:{height:"0.8141em"}}),e.jsxs(t.span,{className:"mord",children:[e.jsx(t.span,{className:"mord",children:"4"}),e.jsx(t.span,{className:"msupsub",children:e.jsx(t.span,{className:"vlist-t",children:e.jsx(t.span,{className:"vlist-r",children:e.jsx(t.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(t.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(t.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(t.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(t.span,{className:"mord mtight",children:"8"})})]})})})})})]}),e.jsx(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e.jsx(t.span,{className:"mrel",children:"="}),e.jsx(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),e.jsxs(t.span,{className:"base",children:[e.jsx(t.span,{className:"strut",style:{height:"0.6444em"}}),e.jsx(t.span,{className:"mord",children:"65536"})]})]})]}),`! In reality, because of the "no more bots than necessary" pruning, we actually don't explore that many states after a given time point. Also because the number of blueprints went from 30 to 3, the actual runtime is about 41s, a 130x increase. However, I believe I can do better than 40s.`]}),`
`,e.jsxs(t.p,{children:["I just implemented a single pruning condition: if we can't do better than the current best by building a geode bot every minute, then we can stop exploring this branch. With ",e.jsx(t.code,{children:"t"})," minutes left, we can build at most ",e.jsx(t.code,{children:"t - 1"})," geode bots, each producing ",e.jsx(t.code,{children:"1, 2, ..., t - 1"})," geodes, so the maximum number of geodes we can produce is ",e.jsx(t.code,{children:"t * (t - 1) / 2"}),". If this plus the current geodes is less than the best score, then we can stop exploring this branch."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`geodesLeftUpperBound :: Int -> State -> Int
geodesLeftUpperBound t st =
  let timeLeft = t - time st
   in timeLeft * (timeLeft - 1) \`div\` 2
`})}),`
`,e.jsx(t.p,{children:"Now we add this single condition to the DFS:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`go best (st : stk)
  -- If can never beat the best, skip this branch.
  | geode st + geodesLeftUpperBound t st <= best = go best stk
  -- If can't build any bots, tally the score.
  | null nextStates = go (max best (geode st)) stk
  | otherwise = go best stk'
`})}),`
`,e.jsx(t.p,{children:"And 🔥🔥🔥 part 2's runtime drops to 40ms (1000x speedup), and part 1's drops to 82ms! I guess this is the beauty of edge pruning."}),`
`,e.jsx(t.p,{children:'(Note: I tagged this one as "dynamic programming", because DFS on a state space with memoization is just DP. At this point I just think DP is an extremely uninformative branding.)'}),`
`,e.jsx(r,{frontMatter:s})]})}function h(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default,s as frontMatter};
