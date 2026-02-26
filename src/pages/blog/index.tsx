import type { ReactNode } from "react";
import Link from "@/components/Link";
import PostData, { type FrontMatter } from "@/components/PostData";
import { normalizeRoute } from "@/normalize-route";
import BlueskyLogo from "assets/bluesky-logo.svg?react";
import styles from "./index.module.css";

const modules = import.meta.glob<true, string, FrontMatter>("./**/*.mdx", {
  eager: true,
  import: "frontMatter",
});

function extractDate(path: string): string {
  return /\d{4}-\d{2}-\d{2}/u.exec(path)![0];
}

const posts = Object.entries(modules)
  .sort(([pathA], [pathB]) =>
    extractDate(pathB).localeCompare(extractDate(pathA)),
  )
  .map(([path, frontMatter]) => (
    <section key={path}>
      <Link href={normalizeRoute(`blog/${path}`)}>
        {/* eslint-disable-next-line react/forbid-elements */}
        <h2>{frontMatter.title}</h2>
      </Link>
      <PostData frontMatter={frontMatter} />
      <p className={styles.description}>{frontMatter.description}</p>
    </section>
  ));

export default function Blog(): ReactNode {
  return (
    <>
      <h1>Josh-Cena’s opinions</h1>
      <p>
        I have strong opinions on all sorts of things. I comment on things I
        don't 100% understand. All opinions are my own.
      </p>
      <p>
        Find my short ideas on{" "}
        <Link href="https://bsky.app/profile/joshcena.com">
          <BlueskyLogo style={{ width: "1em", height: "1em" }} /> Bluesky
        </Link>
        .
      </p>
      {posts}
    </>
  );
}

export const meta = {
  title: "Blog",
  description: "The blog of Josh-Cena where I write my random thoughts",
};
