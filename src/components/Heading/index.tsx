import React, { useEffect, useMemo, useContext, type ReactNode } from "react";
import GithubSlugger, { slug } from "github-slugger";
import styles from "./index.module.css";

const Context = React.createContext<GithubSlugger | null>(null);

export function SluggerProvider({
  children,
}: {
  readonly children: ReactNode;
}): ReactNode {
  const slugger = useMemo(() => new GithubSlugger(), []);
  useEffect(
    () => () => {
      slugger.reset();
    },
    [slugger],
  );
  return <Context.Provider value={slugger}>{children}</Context.Provider>;
}

function useSlugger(): GithubSlugger {
  const slugger = useContext(Context);
  if (!slugger)
    throw new Error("useSlugger must be used within a SluggerProvider");
  return slugger;
}

function getText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children))
    return children.map(getText).filter(Boolean).join(" ");
  if (React.isValidElement(children))
    return getText((children.props as { children?: ReactNode }).children);
  return "";
}

export default function Heading({
  level,
  children,
  anchor,
}: {
  readonly level: 2 | 3 | 4 | 5 | 6;
  readonly children?: ReactNode;
  readonly anchor?: string;
}): ReactNode {
  const HeadingTag = `h${level}` as const;
  useSlugger();
  // TODO use slugger properly
  // const id = useMemo(
  //   () => slugger.slug(children as string),
  //   [slugger, children],
  // );
  const id = anchor ?? slug(getText(children));
  return (
    <HeadingTag id={id}>
      <a href={`#${id}`} className={styles.anchor}>
        {children}
      </a>
    </HeadingTag>
  );
}
