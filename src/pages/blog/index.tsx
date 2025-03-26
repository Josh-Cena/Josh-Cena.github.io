import React from "react";
import Link from "@/components/Link";
import PostData from "@/components/PostData";
import styles from "./index.module.css";

const modules = import.meta.glob<
  boolean,
  string,
  { default: React.ComponentType; frontMatter?: FrontMatter }
>("./**/*.mdx");

function extractDate(path: string): string {
  return /\d{4}-\d{2}-\d{2}/u.exec(path)![0];
}

const posts = Object.entries(modules)
  .sort(([pathA], [pathB]) =>
    extractDate(pathB).localeCompare(extractDate(pathA)),
  )
  .map(
    ([path, module]) =>
      [
        path,
        React.lazy(async () => {
          const { frontMatter } = await module();
          if (!frontMatter) return { default: () => <div /> };
          const preview = (
            <section>
              <Link
                href={/\.\/(?<name>.*)\.mdx$/u
                  .exec(path)!
                  .groups!.name!.toLowerCase()
                  .replace(/\d{4}-\d{2}-\d{2}-/u, "")
                  .replace(/index$/u, "")}>
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

export const meta = {
  title: "Blog",
  description: "The blog of Josh-Cena where I write my random thoughts",
};
