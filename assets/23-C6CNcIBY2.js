import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2021 - Day 23`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Amphipod`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.p,{children:`While this problem doesn't look graph-y on the surface, essentially we have a state space and a set of transitions between states with associated costs, so we can use Dijkstra's to find the minimum-cost path from the initial state to the goal state.`}),`
`,(0,i.jsxs)(a.p,{children:[`The first tricky part might be parsing the input. I represented the state as `,(0,i.jsx)(a.code,{children:`{ rooms: number[][], hallway: (number | undefined)[] }`}),`, where `,(0,i.jsx)(a.code,{children:`rooms[i]`}),` is the stack of amphipods in room `,(0,i.jsx)(a.code,{children:`i`}),` (`,(0,i.jsx)(a.code,{children:`rooms[i][0]`}),` is the one closest to the hallway), and `,(0,i.jsx)(a.code,{children:`hallway[j]`}),` is the amphipod (or `,(0,i.jsx)(a.code,{children:`undefined`}),` if empty) at hallway position `,(0,i.jsx)(a.code,{children:`j`}),`. Amphipods are represented as numbers 0-3.`]}),`
`,(0,i.jsxs)(a.p,{children:[`I already have template code from `,(0,i.jsx)(a.a,{href:`/notes/aoc/2021/15/`,children:`day 15`}),`, which translates directly:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`function move(
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
`,(0,i.jsxs)(a.p,{children:[`The rest is a matter of implementing the transition function, `,(0,i.jsx)(a.code,{children:`nextStates()`}),`. There are two types of moves: moving an amphipod from a room to the hallway, and moving an amphipod from the hallway to a room.`]}),`
`,(0,i.jsx)(a.p,{children:`To move an amphipod from a room to the hallway, we iterate through the rooms. If the room is empty or already good (i.e., contains only amphipods of the correct type), we skip it. Otherwise, we take the top amphipod, and enumerate all hallway positions it can move to (i.e., all positions to the left and right until we hit a wall or another amphipod, and skip positions right outside rooms). The distance is the horizontal distance plus the vertical distance to get out of the room.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`for (let i = 0; i < rooms.length; i++) {
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
`,(0,i.jsx)(a.p,{children:`To move an amphipod from the hallway to a room, we iterate through pods in the hallway. If the pod cannot move to the target room because its path is blocked or the room contains incorrect amphipods, we skip it. Otherwise, we compute the distance and create the new state.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`for (let i = 0; i < hallway.length; i++) {
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
`,(0,i.jsx)(a.p,{children:`Part 2 just requires changing the initial rooms to insert the extra amphipods.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Dijkstra`],title:`Advent of Code 2021 - Day 23: Amphipod`,description:`Advent of Code 2021 - Day 23: Amphipod, a problem that involves Dijkstra. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:23};export{o as default};