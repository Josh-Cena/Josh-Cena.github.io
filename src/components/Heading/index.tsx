import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { slug } from "github-slugger";
import { useIsomorphicLayoutEffect } from "@/utils";
import styles from "./index.module.css";

export type TOCHeading = {
  id: string;
  content: ReactNode;
  level: number;
  ref: HTMLHeadingElement;
};

type HeadingContext = {
  headings: TOCHeading[];
  registerHeading: (treeId: string, heading: TOCHeading) => () => void;
};

const Context = React.createContext<HeadingContext | null>(null);

export function useHeadings(): HeadingContext {
  const context = useContext(Context);
  if (!context)
    throw new Error("useHeadings must be used within a HeadingProvider");

  return context;
}

export function HeadingProvider({
  children,
}: {
  readonly children: ReactNode;
}): ReactNode {
  const [headings, setHeadings] = useState(new Map<string, TOCHeading>());

  const registerHeading = useCallback((treeId: string, heading: TOCHeading) => {
    setHeadings((prev) => {
      const next = new Map(prev);
      next.set(treeId, heading);
      return next;
    });
    return () => {
      setHeadings((prev) => {
        const next = new Map(prev);
        next.delete(treeId);
        return next;
      });
    };
  }, []);

  const value = useMemo(
    () => ({
      headings: Array.from(headings.values()).sort((a, b) => {
        if (typeof a.ref === "number" && typeof b.ref === "number")
          return a.ref - b.ref;
        if (typeof a.ref === "number" || typeof b.ref === "number")
          throw new Error("Unexpected: mixed heading ref types");
        const diff = a.ref.compareDocumentPosition(b.ref);
        if (diff & Node.DOCUMENT_POSITION_PRECEDING) return 1;
        if (diff & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
        return 0;
      }),
      registerHeading,
    }),
    [headings, registerHeading],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function getText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number")
    return children.toString();
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
  const { registerHeading } = useHeadings();
  const treeId = useId();
  // TODO use slugger properly
  // const id = useMemo(
  //   () => slugger.slug(children as string),
  //   [slugger, children],
  // );
  const id = anchor ?? slug(getText(children));
  const ref = useRef<HTMLHeadingElement>(null);
  // Note: this doesn't work in SSR, which makes sense because there's no
  // guarantee of render order. The TOC will be injected in a post-processing
  // step.
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return undefined;
    return registerHeading(treeId, {
      id,
      content: children,
      level,
      ref: ref.current,
    });
  }, [id, children, level, treeId, registerHeading]);

  return (
    <HeadingTag id={id} ref={ref}>
      <a href={`#${id}`} className={styles.anchor}>
        {children}
      </a>
    </HeadingTag>
  );
}
