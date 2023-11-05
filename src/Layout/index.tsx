import Navbar from "./Navbar";
import Footer from "./Footer";
import RouteListener from "./RouteListener";
import { ColorModeProvider } from "../context/ColorMode";
import { SluggerProvider } from "../components/Heading";
import styles from "./index.module.css";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <ColorModeProvider>
      <RouteListener />
      <Navbar />
      <SluggerProvider>
        <main className={styles.mainBody}>{children}</main>
      </SluggerProvider>
      <Footer />
    </ColorModeProvider>
  );
}
