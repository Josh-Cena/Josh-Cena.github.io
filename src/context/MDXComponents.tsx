import type { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "@/components/Link";
import Heading from "@/components/Heading";

export default function MDXComponents({
  children,
}: {
  readonly children: ReactNode;
}): JSX.Element {
  return (
    <MDXProvider
      components={{
        a: Link,
        h2: (props) => <Heading level={2} {...props} />,
        h3: (props) => <Heading level={3} {...props} />,
        h4: (props) => <Heading level={4} {...props} />,
        h5: (props) => <Heading level={5} {...props} />,
        h6: (props) => <Heading level={6} {...props} />,
      }}>
      {children}
    </MDXProvider>
  );
}
