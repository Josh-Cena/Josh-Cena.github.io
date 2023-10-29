import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "../../context/ColorMode";
import ColorModeToggle from "./ColorModeToggle";
import LogoLight from "assets/logo.svg?react";
import LogoDark from "assets/logo-dark.svg?react";
import styles from "./index.module.css";

type LinkConfig = { name: string; path: string; children?: LinkConfig[] };

const links: LinkConfig[] = [
  { name: "About", path: "/about" },
  {
    name: "Tools",
    path: "/tools",
    children: [
      { name: "Color converter", path: "/tools/color-converter" },
      { name: "Todo list", path: "/tools/todo-list" },
    ],
  },
];

function NavbarLink({ name, path, children }: LinkConfig) {
  const [expanded, setExpanded] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const show = useCallback(() => {
    clearTimeout(timeout.current);
    setExpanded(true);
  }, []);
  const hide = useCallback(() => {
    timeout.current = setTimeout(() => setExpanded(false), 200);
  }, []);
  useEffect(() => () => clearTimeout(timeout.current), []);
  if (!children) {
    return (
      <li>
        <Link to={path}>{name}</Link>
      </li>
    );
  }
  return (
    <li onMouseOver={show} onMouseOut={hide}>
      <Link to={path} aria-expanded={expanded} onFocus={show}>
        {name}
      </Link>
      <span className={styles.arrowDown} />
      <ul className={styles.subLinks}>
        {children.map(({ name, path }, i) => (
          <li key={name}>
            <Link to={path} onBlur={i === children.length - 1 ? hide : undefined}>{name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const { colorMode } = useColorMode();
  const Logo = colorMode === "light" ? LogoLight : LogoDark;
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <NavbarLink key={link.name} {...link} />
          ))}
        </ul>
        <div className={styles.colorModeToggle}>
          <ColorModeToggle />
        </div>
      </div>
    </nav>
  );
}
