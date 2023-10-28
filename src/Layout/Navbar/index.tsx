import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const links = [
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <b>Josh-Cena</b>
      <ul className={styles.navbarLinks}>
        {links.map(({ name, path }) => (
          <li key={name}><Link to={path}>{name}</Link></li>
        ))}
      </ul>
    </nav>
  );
}
