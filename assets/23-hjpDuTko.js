import{u as s,j as e}from"./index-CndIh6zx.js";import{P as r,a as i}from"./_components-domuVTFs.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Dijkstra"],title:"Advent of Code 2021 - Day 23: Amphipod",description:"Advent of Code 2021 - Day 23: Amphipod, a problem that involves Dijkstra. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:23};function a(n){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(o.h1,{children:["Advent of Code 2021 - Day 23",e.jsx(o.span,{className:"subtitle",children:"Amphipod"})]}),`
`,`
`,e.jsx(r,{frontMatter:t}),`
`,e.jsx(o.p,{children:"While this problem doesn't look graph-y on the surface, essentially we have a state space and a set of transitions between states with associated costs, so we can use Dijkstra's to find the minimum-cost path from the initial state to the goal state."}),`
`,e.jsxs(o.p,{children:["The first tricky part might be parsing the input. I represented the state as ",e.jsx(o.code,{children:"{ rooms: number[][], hallway: (number | undefined)[] }"}),", where ",e.jsx(o.code,{children:"rooms[i]"})," is the stack of amphipods in room ",e.jsx(o.code,{children:"i"})," (",e.jsx(o.code,{children:"rooms[i][0]"})," is the one closest to the hallway), and ",e.jsx(o.code,{children:"hallway[j]"})," is the amphipod (or ",e.jsx(o.code,{children:"undefined"})," if empty) at hallway position ",e.jsx(o.code,{children:"j"}),". Amphipods are represented as numbers 0-3."]}),`
`,e.jsxs(o.p,{children:["I already have template code from ",e.jsx(o.a,{href:"/notes/aoc/2021/15/",children:"day 15"}),", which translates directly:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`function move(
  startRooms: number[][],
  startHallway: (number | undefined)[],
  roomSize: number,
) {
  const costs = new Map<string, number>();
  costs.set(serialize(startRooms, startHallway), 0);
  const pq = new MinPriorityQueue<State>();
  pq.enqueue({ rooms: startRooms, hallway: startHallway }, 0);

  while (!pq.isEmpty()) {
    const {
      priority: energy,
      element: { rooms, hallway },
    } = pq.dequeue() as PriorityQueueItem<State>;

    // Every room is good
    if (
      rooms.every(
        (room, i) => room.length === roomSize && room.every((pod) => pod === i),
      )
    ) {
      return energy;
    }

    for (const { rooms: newRooms, hallway: newHallway, cost } of nextStates(
      rooms,
      hallway,
      roomSize,
    )) {
      const newEnergy = energy + cost;
      const serialized = serialize(newRooms, newHallway);
      if (!costs.has(serialized) || newEnergy < costs.get(serialized)!) {
        costs.set(serialized, newEnergy);
        pq.enqueue({ rooms: newRooms, hallway: newHallway }, newEnergy);
      }
    }
  }
  throw new Error("No solution found");
}
`})}),`
`,e.jsxs(o.p,{children:["The rest is a matter of implementing the transition function, ",e.jsx(o.code,{children:"nextStates()"}),". There are two types of moves: moving an amphipod from a room to the hallway, and moving an amphipod from the hallway to a room."]}),`
`,e.jsx(o.p,{children:"To move an amphipod from a room to the hallway, we iterate through the rooms. If the room is empty or already good (i.e., contains only amphipods of the correct type), we skip it. Otherwise, we take the top amphipod, and enumerate all hallway positions it can move to (i.e., all positions to the left and right until we hit a wall or another amphipod, and skip positions right outside rooms). The distance is the horizontal distance plus the vertical distance to get out of the room."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`for (let i = 0; i < rooms.length; i++) {
  const room = rooms[i];

  // Empty or already good
  if (
    room.length === 0 ||
    (room.length === roomSize && room.every((p) => p === i))
  )
    continue;

  const toMove = room[0];
  const startingX = 2 + i * 2;
  // Cost to enter the hallway
  const baseCost = (roomSize + 1 - room.length) * 10 ** toMove;
  let leftMost = startingX - 1;
  while (leftMost >= 0 && hallway[leftMost] === undefined) leftMost--;

  for (
    let j = leftMost + 1;
    j < hallway.length && hallway[j] === undefined;
    j++
  ) {
    // Directly in front of a room
    if ([2, 4, 6, 8].includes(j)) continue;

    const newRooms = [...rooms];
    newRooms[i] = room.slice(1);
    const newHallway = [...hallway];
    newHallway[j] = toMove;
    yield {
      rooms: newRooms,
      hallway: newHallway,
      cost: Math.abs(startingX - j) * 10 ** toMove + baseCost,
    };
  }
}
`})}),`
`,e.jsx(o.p,{children:"To move an amphipod from the hallway to a room, we iterate through pods in the hallway. If the pod cannot move to the target room because its path is blocked or the room contains incorrect amphipods, we skip it. Otherwise, we compute the distance and create the new state."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`for (let i = 0; i < hallway.length; i++) {
  const pod = hallway[i];
  if (pod === undefined) continue;
  const targetX = 2 + pod * 2;
  // Blocked
  if (
    (targetX < i && hallway.slice(targetX, i).some((p) => p !== undefined)) ||
    (targetX > i &&
      hallway.slice(i + 1, targetX + 1).some((p) => p !== undefined))
  )
    continue;

  const room = rooms[pod];
  if (room.some((p) => p !== pod)) continue;

  const newRooms = [...rooms];
  newRooms[pod] = [pod, ...room];
  const newHallway = [...hallway];
  newHallway[i] = undefined;
  yield {
    rooms: newRooms,
    hallway: newHallway,
    cost: (Math.abs(i - targetX) + (roomSize - room.length)) * 10 ** pod,
  };
}
`})}),`
`,e.jsx(o.p,{children:"Part 2 just requires changing the initial rooms to insert the extra amphipods."}),`
`,e.jsx(i,{frontMatter:t})]})}function d(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{d as default,t as frontMatter};
