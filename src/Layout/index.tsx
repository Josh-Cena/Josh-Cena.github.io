import Navbar from "./Navbar";
import Footer from "./Footer";
import { ColorModeProvider } from "../context/ColorMode";
import styles from "./styles.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <Navbar />
      <main className={styles.mainBody}>{children}</main>
      <Footer />
    </ColorModeProvider>
  );
}
