import React, { type ReactNode } from "react";
import { ColorModeProvider } from "@/context/ColorMode";
import { HeadingProvider } from "@/components/Heading";
import MDXComponents from "@/context/MDXComponents";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CommandButton from "./Command/CommandButton";
import RouteListener from "./RouteListener";
import styles from "./index.module.css";

const Command = React.lazy(() => import("./Command"));

export default function Layout({
  children,
}: {
  readonly children: ReactNode;
}): ReactNode {
  return (
    <ColorModeProvider>
      <RouteListener />
      <HeadingProvider>
        <MDXComponents>
          <Navbar />
          <main className={styles.mainBody}>{children}</main>
        </MDXComponents>
      </HeadingProvider>
      <Footer />
      <React.Suspense fallback={<CommandButton />}>
        <Command />
      </React.Suspense>
    </ColorModeProvider>
  );
}
