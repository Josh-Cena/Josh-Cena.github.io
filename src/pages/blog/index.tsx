import type { ReactNode } from "react";
import Link from "@/components/Link";
import PostData, { type FrontMatter } from "@/components/PostData";
import { normalizeRoute, extractDate } from "@/normalize-route";
import BlueskyLogo from "assets/bluesky-logo.svg?react";
import styles from "./index.module.css";

const modules = import.meta.glob<true, string, FrontMatter>("./**/*.mdx", {
  query: "?meta",
  import: "default",
  eager: true,
});

const posts = Object.entries(modules)
  .sort(([pathA], [pathB]) =>
    extractDate(pathB).localeCompare(extractDate(pathA)),
  )
  .map(([path, frontMatter]) => (
    <section key={path}>
      <Link href={normalizeRoute(`blog/${path}`)}>
        {/* eslint-disable-next-line react/forbid-elements */}
        <h2 className={styles.postTitle}>{frontMatter.title}</h2>
      </Link>
      <PostData frontMatter={frontMatter} date={extractDate(path)} />
      <p className={styles.description}>{frontMatter.description}</p>
    </section>
  ));

export default function Blog(): ReactNode {
  return (
    <>
      <h1>Josh-Cena’s opinions</h1>
      <p>
        I have strong opinions on all sorts of things. I comment on things I
        don't 100% understand (but probably more than your average yapper). All
        opinions are my own.
      </p>
      <p>
        Find my short ideas on{" "}
        <Link href="https://bsky.app/profile/joshcena.com">
          <BlueskyLogo style={{ width: "1em", height: "1em" }} /> Bluesky
        </Link>
        . If you have any thoughts on anything here, hit me up on Bluesky too!
      </p>
      <p>
        I also publish these articles on{" "}
        <Link href="https://raisehightheabstraction.substack.com/">
          Substack
        </Link>
        , but this site remains the canonical version.
      </p>
      {/* Substack's embed manages its own signup flow across origins. */}
      {/* eslint-disable-next-line react/iframe-missing-sandbox */}
      <iframe
        title="Subscribe to Raise High the Abstraction on Substack"
        src="https://raisehightheabstraction.substack.com/embed"
        width="480"
        height="160"
        className={styles.substackEmbed}
      />
      {posts}
    </>
  );
}

Blog.meta = {
  title: "Opinions",
  description:
    "I have strong opinions on all sorts of things. I comment on things I don't 100% understand (but probably more than your average yapper). All opinions are my own.",
};
