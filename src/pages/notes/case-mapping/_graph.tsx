import {
  UC,
  ML_,
  MU_,
  NL_,
  NU_,
  toLowerCase,
  toUpperCase,
  isUpperCase,
  isLowerCase,
  isChar,
} from "./_data";

type Vertex = {
  char: string;
  type: "upper" | "lower" | "multi" | "none";
  lEdgesIn: Set<Vertex>;
  uEdgesIn: Set<Vertex>;
  lEdgeOut: Vertex | null;
  uEdgeOut: Vertex | null;
};

export const graph = new Map<string, Vertex>();
const chars = UC.union(ML_).union(MU_).union(NL_).union(NU_);

for (const char of chars) {
  graph.set(char, {
    char,
    type: !isChar(char)
      ? "multi"
      : isUpperCase(char)
      ? "upper"
      : isLowerCase(char)
      ? "lower"
      : "none",
    lEdgesIn: new Set(),
    uEdgesIn: new Set(),
    lEdgeOut: null,
    uEdgeOut: null,
  });
}

for (const char of chars) {
  const vertex = graph.get(char)!;
  const upper = toUpperCase(char);
  const lower = toLowerCase(char);
  if (graph.has(upper)) {
    const upperVertex = graph.get(upper)!;
    vertex.uEdgeOut = upperVertex;
    upperVertex.uEdgesIn.add(vertex);
  }
  if (graph.has(lower)) {
    const lowerVertex = graph.get(lower)!;
    vertex.lEdgeOut = lowerVertex;
    lowerVertex.lEdgesIn.add(vertex);
  }
}

for (const char of chars) {
  const vertex = graph.get(char)!;
  if (vertex.uEdgeOut === vertex && !vertex.lEdgeOut) {
    if (!NL_.has(char)) {
      console.error(
        "Invariant broken:",
        vertex,
        "has a self-referential u edge and no l edge but not in NL'",
      );
    }
  } else if (NL_.has(char)) {
    console.error(
      "Invariant broken:",
      vertex,
      "in NL' but does not have a self-referential u edge and no l edge",
    );
  }

  if (vertex.lEdgeOut === vertex && !vertex.uEdgeOut) {
    if (!NU_.has(char)) {
      console.error(
        "Invariant broken:",
        vertex,
        "has a self-referential l edge and no u edge but not in NU'",
      );
    }
  } else if (NU_.has(char)) {
    console.error(
      "Invariant broken:",
      vertex,
      "is in NU' but does not have a self-referential l edge and no u edge",
    );
  }

  if (!vertex.uEdgeOut && !vertex.lEdgeOut)
    console.error("Invariant broken:", vertex, "has no out edges");

  if (vertex.uEdgeOut === vertex && vertex.lEdgeOut === vertex)
    console.error("Invariant broken:", vertex, "is an I-node");

  if (vertex.uEdgesIn.values().some((v) => v !== vertex)) {
    if (vertex.uEdgeOut !== vertex)
      console.error("Invariant broken:", vertex, "breaks idempotence rule");
    if (vertex.lEdgesIn.values().some((v) => v !== vertex)) {
      console.error(
        "Invariant broken:",
        vertex,
        "breaks complementary ranges rule",
      );
    }
    if (vertex.lEdgeOut === vertex)
      console.error("Invariant broken:", vertex, "breaks I-closedness rule");
  }

  if (vertex.lEdgesIn.values().some((v) => v !== vertex)) {
    if (vertex.lEdgeOut !== vertex)
      console.error("Invariant broken:", vertex, "breaks idempotence rule");
    if (vertex.uEdgesIn.values().some((v) => v !== vertex)) {
      console.error(
        "Invariant broken:",
        vertex,
        "breaks complementary ranges rule",
      );
    }
    if (vertex.uEdgeOut === vertex)
      console.error("Invariant broken:", vertex, "breaks I-closedness rule");
  }
}

function dfs(vertex: Vertex, cluster: Set<Vertex>): void {
  if (cluster.has(vertex)) return;
  cluster.add(vertex);
  vertex.lEdgesIn.forEach((t) => dfs(t, cluster));
  vertex.uEdgesIn.forEach((t) => dfs(t, cluster));
  if (vertex.lEdgeOut && vertex.lEdgeOut !== vertex)
    dfs(vertex.lEdgeOut, cluster);
  if (vertex.uEdgeOut && vertex.uEdgeOut !== vertex)
    dfs(vertex.uEdgeOut, cluster);
}

const remainingNodes = new Set(graph.values());

export const nClusters = new Set<Set<Vertex>>();
export const simplePairs = new Set<[Vertex, Vertex]>();
export const complexClusters = new Set<Set<Vertex>>();

for (const char of NL_.union(NU_)) {
  const cluster = new Set<Vertex>();
  dfs(graph.get(char)!, cluster);
  nClusters.add(cluster);
  cluster.forEach((t) => remainingNodes.delete(t));
}

for (const v of remainingNodes) {
  const cluster = new Set<Vertex>();
  dfs(v, cluster);
  if (cluster.size === 2) simplePairs.add([...cluster] as [Vertex, Vertex]);
  else complexClusters.add(cluster);
  cluster.forEach((t) => remainingNodes.delete(t));
}

export const longestChain = {
  length: 3,
  chains: [] as Vertex[][],
};

for (const char of chars) {
  const vertex = graph.get(char)!;
  const chain = [] as Vertex[];
  let current: Vertex | undefined = vertex;
  while (current) {
    chain.push(current);
    current = [current.uEdgeOut, current.lEdgeOut].find((v): v is Vertex =>
      Boolean(v && !chain.includes(v)),
    );
  }
  if (chain.length > longestChain.length) {
    longestChain.length = chain.length;
    longestChain.chains = [chain];
  } else if (chain.length === longestChain.length) {
    longestChain.chains.push(chain);
  }
}
