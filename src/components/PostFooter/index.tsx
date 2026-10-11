import type { ReactNode } from "react";
import Link from "@/components/Link";
import type { FrontMatter } from "@/components/PostData";
import styles from "./index.module.css";

export default function PostFooter({
  frontMatter: { "substack-url": substackUrl },
}: {
  readonly frontMatter: FrontMatter;
}): ReactNode {
  if (!substackUrl) return null;
  return (
    <p className={styles.footer}>
      <Link href={substackUrl} className={styles.substackLink}>
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M4 3h16v2H4zm0 4h16v2H4zm0 4h16v11l-8-4.5L4 22z" />
        </svg>
        Read on Substack
      </Link>
    </p>
  );
}
