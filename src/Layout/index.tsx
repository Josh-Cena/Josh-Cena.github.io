import Navbar from "./Navbar";
import Footer from "./Footer";
import { ColorModeProvider } from "../context/ColorMode";
import styles from "./index.module.css";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <ColorModeProvider>
      <Navbar />
      <main className={styles.mainBody}>{children}</main>
      <Footer />
    </ColorModeProvider>
  );
}
