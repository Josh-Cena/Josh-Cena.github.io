import React, { Children, type ReactNode } from "react";
import clsx from "clsx";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { useColorMode } from "@/context/ColorMode";
import CopyButton from "@/components/CopyButton";
import styles from "./index.module.css";

export default function CodeBlock({
  children,
  title,
  language: languageProp,
  className: classNameProp,
}: {
  readonly children?: ReactNode;
  readonly metastring?: string;
  readonly title?: string | undefined;
  readonly language?: string;
  readonly className?: string | undefined;
}): JSX.Element {
  const language =
    languageProp ??
    classNameProp?.match(/language-(?<lang>[^ ]+)/u)?.groups?.lang;
  const childrenArray = Children.toArray(children);
  const { colorMode } = useColorMode();
  const theme = colorMode === "dark" ? themes.vsDark : themes.github;
  if (
    childrenArray.length === 1 &&
    React.isValidElement(childrenArray[0]) &&
    childrenArray[0].type === "code"
  )
    return <CodeBlock {...childrenArray[0].props} />;
  const code = childrenArray
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return String(child);
      if (React.isValidElement(child) && child.type === "br") return "\n";
      return "";
    })
    .join("")
    .trim();
  return (
    <div
      className={clsx(
        classNameProp,
        styles.codeBlockContainer,
        "show-copy-button",
      )}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>
        <Highlight
          theme={theme}
          code={code}
          language={(language ?? "text") as Language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              className={clsx(className, styles.codeBlock)}
              style={style}>
              <code>
                {tokens.map((line, i) => {
                  if (line.length === 1 && line[0]!.content === "\n")
                    line[0]!.content = "";

                  const lineProps = getLineProps({
                    line,
                  });
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={i} {...lineProps}>
                      {line.map((token, j) => (
                        <span
                          // eslint-disable-next-line react/no-array-index-key
                          key={j}
                          {...getTokenProps({ token })}
                        />
                      ))}
                      <br />
                    </span>
                  );
                })}
              </code>
            </pre>
          )}
        </Highlight>
        <span className={styles.language}>{language}</span>
        <CopyButton className={styles.copyButton} string={code} />
      </div>
    </div>
  );
}
