import React from "react";
import Link from "@/components/Link";
import PostData from "@/components/PostData";
import styles from "./index.module.css";

const modules = import.meta.glob<
  boolean,
  string,
  { default: React.ComponentType; frontMatter?: FrontMatter }
>("./**/*.mdx");

const posts = Object.entries(modules).map(
  ([path, module]) =>
    [
      path,
      React.lazy(async () => {
        const { frontMatter } = await module();
        if (!frontMatter) return { default: () => <div /> };
        const preview = (
          <section>
            <Link
              href={path
                .match(/\.\/(?<name>.*)\.mdx$/)!
                .groups!.name!.toLowerCase()
                .replace(/index$/, "")}>
              <h2>{frontMatter.title}</h2>
            </Link>
            <PostData frontMatter={frontMatter} />
            <p className={styles.description}>{frontMatter.description}</p>
          </section>
        );
        return { default: () => preview };
      }),
    ] as const,
);

export default function Blog(): JSX.Element {
  return (
    <>
      <h1>Josh-Cena’s (secret) blog</h1>
      {posts.map(([path, Comp]) => (
        <React.Suspense fallback={<>Loading...</>} key={path}>
          <Comp />
        </React.Suspense>
      ))}
    </>
  );
}
