import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import"./ColorMode-w4vutUtS.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{t as n}from"./Canvas-D3s_pbEj.js";import"./chroma-js-C4qMxh81.js";import{i as r,r as i}from"./_components-BMUVh2lY.js";var a=e(),o={tags:[`Semantics`,`Puzzle`],title:`NACLO 2023 - Problem K: Wordnet Battleship`,description:`NACLO 2023 - Problem K: Wordnet Battleship, a problem that involves Semantics and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`K`},s={};function c(e){let c={a:`a`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,section:`section`,span:`span`,sup:`sup`,ul:`ul`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.h1,{children:[`NACLO 2023 - Problem K`,(0,a.jsx)(c.span,{className:`subtitle`,children:`Wordnet Battleship`})]}),(0,a.jsx)(r,{frontMatter:o}),`
`,`
`,(0,a.jsx)(c.p,{children:`By the end of the 9th round, the board of player 1 looks like this (cross means "hit", circle means "miss"):`}),`
`,`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{s.treeSimple={position:[300,20],create:{position:[100,100],produce:{position:[100,180],generate:{position:[40,260]},print:{position:[100,260]},breed:{position:[160,260]}}},modify:{position:[300,100],dry:{position:[250,180]},mark:{position:[350,180],copy:{position:[290,260]},print:{position:[350,260]},scribble:{position:[410,260]}}},perform:{position:[500,100],serenade:{position:[450,180]},improvise:{position:[550,180]}}},s.drawNode=function e(t,n,a,o=0){t.textAlign=`center`,t.textBaseline=`middle`,t.font=`16px sans-serif`;let[s,c]=n.position;t.fillText(a,s,c),t.strokeStyle=i===`light`?`#08827e`:`#39cac4`,t.lineWidth=3,n.status===`hit`?(t.beginPath(),t.moveTo(s-10,c-10),t.lineTo(s+10,c+10),t.moveTo(s+10,c-10),t.lineTo(s-10,c+10),t.stroke()):n.status===`miss`?(t.beginPath(),t.arc(s,c,15,0,Math.PI*2),t.stroke()):n.status===`unknown`&&(t.fillStyle=i===`light`?`#08827e`:`#39cac4`,t.font=`bold 22px sans-serif`,t.fillText(`?`,s,c),t.font=`16px sans-serif`,t.fillStyle=r),t.strokeStyle=r,t.lineWidth=1;for(let[r,i]of Object.entries(n))r===`position`||r===`status`||(t.beginPath(),t.moveTo(s,c+(i.position[1]>c?20:-20)),t.lineTo(i.position[0],i.position[1]+(i.position[1]>c?-20:20)),t.stroke(),e(t,i,r,o+1))},s.copyNode=function e(t){let n={...t};for(let[r,i]of Object.entries(t))r===`position`||r===`status`||(n[r]=e(i));return n};let a=s.copyNode(s.treeSimple);a.create.produce.generate.status=`miss`,a.modify.status=`hit`,a.modify.mark.status=`hit`,a.status=`miss`,a.modify.mark.scribble.status=`hit`,a.perform.status=`miss`,a.create.produce.status=`hit`,a.create.produce.breed.status=`miss`,a.create.status=`hit`,s.drawNode(e,a,`do`)},width:600,height:300}),`
`,(0,a.jsx)(c.p,{children:`We know that hitting "scribble" shrinks a rowboat, so this rowboat must be at scribble-mark. Therefore, the boat at "modify" must run from "modify" to "dry" and be a yacht. The frigate runs create-produce-print. So to sink the frigate, call "print" meaning "produce" (as opposed to as a manner of writing): "The teacher will print all exam papers". To sink the yacht, call "dry" as a verb: "The sun will dry the clothes".`}),`
`,(0,a.jsx)(c.p,{children:`Now for player 2's board:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{let a=s.copyNode(s.treeSimple);a.modify.dry.status=`miss`,a.modify.mark.print.status=`miss`,a.modify.status=`hit`,a.status=`hit`,a.modify.mark.status=`hit`,a.create.produce.print.status=`miss`,a.create.produce.status=`hit`,a.perform.status=`hit`,a.perform.serenade.status=`hit`,a.create.status=`miss`,a.create.produce.breed.status=`miss`,s.drawNode(e,a,`do`)},width:600,height:300}),`
`,(0,a.jsx)(c.p,{children:`Calling do-modify-mark sinks a frigate; calling "serenade" sinks a yacht, so the yacht is at perform-serenade; that leaves the rowboat at produce-generate.`}),`
`,(0,a.jsx)(c.p,{children:`In the advanced setup, we have a bunch of nouns. We can't necessarily construct the whole tree, but we can do as much as we can. For example, the one-noun-to-rule-them-all is obviously "entity" (the very definition of "noun"), from which we have "physical entity" and "abstract entity". Under "physical entity" we have "person" and "object". Under "abstract entity" we have "quantity", "event", and "communication". All it takes is to sort the remaining nouns under one of these buckets. The nouns with blank sentences are left out for now, because we don't know what exactly the intended meaning is.`}),`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsxs)(c.li,{children:[`object`,`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`publication`}),`
`,(0,a.jsx)(c.li,{children:`magazine`}),`
`,(0,a.jsx)(c.li,{children:`ball`}),`
`,(0,a.jsx)(c.li,{children:`instrument`}),`
`,(0,a.jsx)(c.li,{children:`book`}),`
`,(0,a.jsx)(c.li,{children:`envelope`}),`
`,(0,a.jsx)(c.li,{children:`pitcher`}),`
`,(0,a.jsx)(c.li,{children:`container`}),`
`,(0,a.jsx)(c.li,{children:`microscope`}),`
`,(0,a.jsx)(c.li,{children:`equipment`}),`
`]}),`
`]}),`
`,(0,a.jsxs)(c.li,{children:[`person`,`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`scientist`}),`
`,(0,a.jsx)(c.li,{children:`queen`}),`
`,(0,a.jsx)(c.li,{children:`thrower`}),`
`,(0,a.jsx)(c.li,{children:`prime minister`}),`
`,(0,a.jsx)(c.li,{children:`pitcher`}),`
`]}),`
`]}),`
`,(0,a.jsxs)(c.li,{children:[`quantity`,`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`containerful`}),`
`,(0,a.jsx)(c.li,{children:`spoonful`}),`
`,(0,a.jsx)(c.li,{children:`centimeter`}),`
`,(0,a.jsx)(c.li,{children:`length`}),`
`]}),`
`]}),`
`,(0,a.jsxs)(c.li,{children:[`event`,`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`social event`}),`
`,(0,a.jsx)(c.li,{children:`ball`}),`
`,(0,a.jsx)(c.li,{children:`business event`}),`
`,(0,a.jsx)(c.li,{children:`construction`}),`
`,(0,a.jsx)(c.li,{children:`concert`}),`
`,(0,a.jsx)(c.li,{children:`feast`}),`
`,(0,a.jsx)(c.li,{children:`show`}),`
`]}),`
`]}),`
`,(0,a.jsxs)(c.li,{children:[`communication`,`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`written communication`}),`
`]}),`
`]}),`
`]}),`
`,(0,a.jsx)(c.p,{children:`The blanked ones are: ruler (2 meanings), play, publication (distinct from the object one), pitcher (distinct from the object one), book (distinct from the publication one).`}),`
`,(0,a.jsx)(c.p,{children:`Just take out the more general nouns and put the more concrete ones under them, and get a tree like this:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{s.treeAdvanced={position:[400,400],"physical entity":{position:[400,480],object:{position:[200,560],publication:{position:[50,640],magazine:{position:[25,720]},book:{position:[100,720]}},equipment:{position:[150,640],ball:{position:[150,720]}},container:{position:[250,640],envelope:{position:[220,720]},pitcher:{position:[280,720]}},instrument:{position:[350,640],microscope:{position:[350,720]}}},person:{position:[600,560],scientist:{position:[440,640]},queen:{position:[520,640]},thrower:{position:[600,640]},"prime minister":{position:[680,640]},pitcher:{position:[760,640]}}},"abstract entity":{position:[400,320],quantity:{position:[100,240],containerful:{position:[50,160],spoonful:{position:[50,80]}},length:{position:[150,160],centimeter:{position:[150,80]}}},event:{position:[400,240],"social event":{position:[300,160],ball:{position:[250,80]},feast:{position:[300,80]},show:{position:[350,80],concert:{position:[350,10]}}},"business event":{position:[500,160],construction:{position:[500,80]}}},communication:{position:[700,240],"written communication":{position:[700,160]}}}},s.drawNode(e,s.treeAdvanced,`entity`)},width:800,height:750}),`
`,(0,a.jsx)(c.p,{children:`Now we look at the game record.`}),`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsx)(c.li,{children:`object-publication-magazine sinks a cruiser—as we'd expect.`}),`
`,(0,a.jsx)(c.li,{children:`containerful-spoonful sinks a destroyer—as we'd expect.`}),`
`,(0,a.jsx)(c.li,{children:`When we get to "ruler", we've sunk a battleship. The previous ones—queen, physical entity, thrower, prime minister (miss), person, centimeter—must have hit 3 positions. Unfortunately! In the diagram, there are at most 3 layers from "physical entity" to the leaves, so the battleship with length 4 could not have possibly been parked here. The conclusion is that we've missed a layer. Also, the word "ruler" has to be under "person" because we've always been targeting around this area. So the missing layer is "ruler" as in a type of person, with descendants "queen" and "prime minister": (f) The president met with the ruler of the neighboring country. Now a battleship is admitted at physical entity-person-ruler-queen. This also means there can be no boat at "thrower". We don't know the status of "centimeter" yet.`}),`
`,(0,a.jsx)(c.li,{children:`When we get to "submarine", we've sunk a submarine. But we don't know where "play" is; let's leave it aside for just one moment because there are lower hanging fruits.`}),`
`,(0,a.jsx)(c.li,{children:`When we get to "ruler", we've sunk a patrol boat. The only other meaning of "ruler" is a measuring stick, which must be under "instrument": (j) This ruler is great at measuring small objects. Indeed, we've previously hit "instrument", so the patrol boat is at instrument-ruler.`}),`
`]}),`
`,(0,a.jsx)(c.p,{children:`At the end of the game, the board looks like:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{s.treeAdvanced[`physical entity`].person={position:[600,560],scientist:{position:[450,640]},ruler:{position:[550,640],queen:{position:[500,720]},"prime minister":{position:[600,720]}},thrower:{position:[650,640]},pitcher:{position:[750,640]}},s.treeAdvanced[`physical entity`].object.instrument={position:[350,640],microscope:{position:[320,720]},ruler:{position:[380,720]}};let a=s.copyNode(s.treeAdvanced);a[`physical entity`].object.status=`hit`,a[`physical entity`].object.publication.status=`hit`,a[`physical entity`].object.publication.magazine.status=`hit`,a[`physical entity`].person.scientist.status=`miss`,a[`abstract entity`].quantity.containerful.status=`hit`,a[`abstract entity`].quantity.containerful.spoonful.status=`hit`,a[`physical entity`].person.ruler.queen.status=`hit`,a[`physical entity`].status=`hit`,a[`physical entity`].person.thrower.status=`miss`,a[`physical entity`].person.ruler[`prime minister`].status=`miss`,a[`abstract entity`].quantity.length.centimeter.status=`unknown`,a[`physical entity`].person.ruler.status=`hit`,a[`physical entity`].object.equipment.ball.status=`miss`,a[`physical entity`].person.pitcher.status=`miss`,a[`physical entity`].object.instrument.status=`hit`,a[`physical entity`].object.publication.book.status=`miss`,a[`abstract entity`].communication[`written communication`].status=`unknown`,a[`abstract entity`].communication.status=`unknown`,a[`abstract entity`].event.status=`hit`,a[`abstract entity`].event[`social event`].status=`hit`,a[`physical entity`].object.instrument.ruler.status=`hit`,a[`abstract entity`].event[`social event`].ball.status=`hit`,a[`abstract entity`].status=`hit`,s.drawNode(e,a,`entity`)},width:800,height:750}),`
`,(0,a.jsx)(c.p,{children:`We have an aircraft carrier of length 5 and a submarine of length 3 left. The remaining hits we can use are: abstract entity, event, social event, ball (the event), (k), play (position unknown), communication (status unknown), written communication (status unknown). (I've left out "centimeter" because it's so far from everything else so it's obviously a miss.) These add up to exactly 8 hits, so they must all be hits.`}),`
`,(0,a.jsx)(c.p,{children:`abstract entity-event-social event-ball already forms a length 4 path, so the aircraft carrier should use it. However, the last hit at (k) cannot be "entity", because player 4 hit "entity" earlier, and we want the two players to have matching last hit. Therefore, the last hit must be something under "abstract entity" along this path, but we don't know what yet.`}),`
`,(0,a.jsx)(c.p,{children:`communication-written communication is a length 2 path, so the submarine should use it. "Play" is last hit for this submarine—and it kind of fits under "written communication" as a type of written work: (i) The play was written in the playwright's early years.`}),`
`,(0,a.jsx)(c.p,{children:`Now onto the board of player 4.`}),`
`,(0,a.jsxs)(c.ul,{children:[`
`,(0,a.jsxs)(c.li,{children:[`event-business event-publication sinks a submarine, so they need to form a path. This means the "publication" here needs to be a different meaning from the one under "object": (l) The publication of `,(0,a.jsx)(c.em,{children:`The Catcher in the Rye`}),` was an instant success.`]}),`
`,(0,a.jsx)(c.li,{children:`abstract entity-quantity-containerful forms a path, but nothing is sunken yet, so this is a long boat.`}),`
`,(0,a.jsx)(c.li,{children:`container-pitcher sinks a destroyer—as we'd expect.`}),`
`,(0,a.jsx)(c.li,{children:`The next "pitcher" immediately sinks a battleship, so this needs to be connected to the "containerful" path. The only way to connect it is to interpret "pitcher" as a quantity here: (m) I drink a pitcher of milk every day.`}),`
`,(0,a.jsx)(c.li,{children:`Among "social event", "feast", "show", and "play", 3 of the 4 sunk a cruiser. The only way is to make "play" come under "show": (n) A lot of famous celebrities attended the play.`}),`
`]}),`
`,(0,a.jsx)(c.p,{children:`Here's the final board, where the only two unmarked hits are "book" and (k), and all known hits except "feast" have been accounted for:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{s.treeAdvanced[`abstract entity`].communication[`written communication`].play={position:[700,80]},s.treeAdvanced[`abstract entity`].event[`business event`]={position:[500,160],construction:{position:[450,80]},publication:{position:[550,80]}},s.treeAdvanced[`abstract entity`].quantity.containerful={position:[50,160],spoonful:{position:[20,80]},pitcher:{position:[80,80]}},s.treeAdvanced[`abstract entity`].event[`social event`].show={position:[350,80],concert:{position:[320,10]},play:{position:[380,10]}};let a=s.copyNode(s.treeAdvanced);a[`abstract entity`].event.status=`hit`,a[`abstract entity`].event[`business event`].status=`hit`,a[`abstract entity`].event[`business event`].construction.status=`miss`,a[`abstract entity`].event[`business event`].publication.status=`hit`,a[`abstract entity`].quantity.status=`hit`,a[`abstract entity`].status=`hit`,a[`abstract entity`].quantity.containerful.status=`hit`,a[`physical entity`].object.container.envelope.status=`miss`,a[`physical entity`].object.publication.magazine.status=`miss`,a[`physical entity`].object.container.pitcher.status=`hit`,a[`physical entity`].object.container.status=`hit`,a[`abstract entity`].quantity.containerful.pitcher.status=`hit`,a[`abstract entity`].event[`social event`].status=`hit`,a[`abstract entity`].event[`social event`].feast.status=`hit`,a[`abstract entity`].event[`social event`].show.status=`hit`,a[`abstract entity`].event[`social event`].show.play.status=`hit`,a[`physical entity`].object.publication.status=`unknown`,a.status=`unknown`,a[`abstract entity`].quantity.length.status=`unknown`,a[`physical entity`].status=`unknown`,a[`physical entity`].object.status=`unknown`,a[`physical entity`].object.instrument.microscope.status=`unknown`,a[`physical entity`].object.equipment.status=`unknown`,s.drawNode(e,a,`entity`)},width:800,height:750}),`
`,(0,a.jsxs)(c.p,{children:[`Finally, we have a long list of unknown results that eventually sunk an aircraft carrier and a patrol boat. These two boats have total length 7, and we still have 3 known hits: "feast", "book", and (k) to use, so 4 out of the 7 unknown results were hits. The aircraft carrier can only fit if it starts from "entity" and goes down the "physical entity" branch: entity-physical entity-object-publication-book. So the book here is the ordinary "physical object" meaning: (v) The book is very heavy.`,(0,a.jsx)(c.sup,{children:(0,a.jsx)(c.a,{href:`#user-content-fn-1`,id:`user-content-fnref-1`,"data-footnote-ref":!0,"aria-describedby":`footnote-label`,children:`1`})})]}),`
`,(0,a.jsx)(c.p,{children:`That leaves the patrol boat to use "feast" and (k). Previously, we also known that (k) is along the path of abstract entity-event-social event-ball. How can something both touch "feast" and "ball"? It means (k) needs to be a parent of both these items and also be under "social event". The solution suggests "party": (k) Everyone had a good time at the party.`}),`
`,(0,a.jsxs)(c.section,{"data-footnotes":!0,className:`footnotes`,children:[(0,a.jsx)(c.h2,{className:`sr-only`,id:`footnote-label`,children:`Footnotes`}),`
`,(0,a.jsxs)(c.ol,{children:[`
`,(0,a.jsxs)(c.li,{id:`user-content-fn-1`,children:[`
`,(0,a.jsxs)(c.p,{children:[`I realized that the solution separates the physical book from the abstract written "book", and the "every book by Charles Dickens" sentence is meant to refer to the abstract meaning. But even if the two meanings are conflated, the problem can still be solved. Also, the solution wants "pitcher" under "thrower", which makes sense but is again not important for solving the problem. `,(0,a.jsx)(c.a,{href:`#user-content-fnref-1`,"data-footnote-backref":``,"aria-label":`Back to reference 1`,className:`data-footnote-backref`,children:`↩`})]}),`
`]}),`
`]}),`
`]}),(0,a.jsx)(i,{frontMatter:o})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}export{s as canvasResources,l as default,o as frontMatter};