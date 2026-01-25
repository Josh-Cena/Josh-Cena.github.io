import { useState, type ReactNode } from "react";
import { useHeadings, type TOCHeading } from "@/components/Heading";
import styles from "./index.module.css";

type TOCTree = {
  heading: TOCHeading;
  children: TOCTree[];
};

function listToTree(headings: TOCHeading[]): TOCTree[] {
  const root: TOCTree[] = [];
  const stack: TOCTree[] = [];

  headings.forEach((heading) => {
    const node: TOCTree = { heading, children: [] };
    while (
      stack.length > 0 &&
      heading.level <= stack[stack.length - 1]!.heading.level
    )
      stack.pop();
    if (stack.length === 0) root.push(node);
    else stack[stack.length - 1]!.children.push(node);
    stack.push(node);
  });

  return root;
}

function TOCItem({ node }: { readonly node: TOCTree }): ReactNode {
  return (
    <li>
      <a href={`#${node.heading.id}`}>{node.heading.content}</a>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <TOCItem key={child.heading.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function TOCContent(): ReactNode {
  const { headings } = useHeadings();
  const tree = listToTree(headings);
  if (tree.length === 0) return null;
  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <strong>Contents</strong>
      <ul>
        {tree.map((node) => (
          <TOCItem key={node.heading.id} node={node} />
        ))}
      </ul>
    </nav>
  );
}

export default function TOC(): ReactNode {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      <button
        onClick={() => setVisible(!visible)}
        className={styles.tocButton}
        type="button"
        aria-label="Toggle table of contents">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 18H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {visible && <TOCContent />}
    </div>
  );
}
