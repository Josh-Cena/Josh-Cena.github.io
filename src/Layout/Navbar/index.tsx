import { useCallback, useEffect, useRef, useState } from "react";
import Link from "@/components/Link";
import { useColorMode } from "@/context/ColorMode";
import ColorModeToggle from "./ColorModeToggle";
import LogoLight from "assets/logo.svg?react";
import LogoDark from "assets/logo-dark.svg?react";
import styles from "./index.module.css";

type LinkConfig = {
  readonly name: string;
  readonly path: string;
  readonly children?: LinkConfig[];
};

const links: LinkConfig[] = [
  { name: "About", path: "/about" },
  {
    name: "Tools",
    path: "/tools",
    children: [{ name: "Color converter", path: "/tools/color-converter" }],
  },
  { name: "Blog", path: "/blog" },
];

function NavbarLink({ name, path, children }: LinkConfig) {
  const [expanded, setExpanded] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setExpanded(true);
  }, []);
  const hide = useCallback(() => {
    timeout.current = setTimeout(() => setExpanded(false), 200);
  }, []);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  if (!children) {
    return (
      <li>
        <Link href={path}>{name}</Link>
      </li>
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <li onMouseOver={show} onMouseOut={hide}>
      <Link href={path} aria-expanded={expanded} onFocus={show} onBlur={hide}>
        {name}
      </Link>
      <span className={styles.arrowDown} />
      <ul className={styles.subLinks}>
        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
        {children.map(({ name, path }, i) => (
          <li key={name}>
            <Link
              href={path}
              onBlur={i === children.length - 1 ? hide : undefined}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar(): JSX.Element {
  const { colorMode } = useColorMode();
  const Logo = colorMode === "light" ? LogoLight : LogoDark;
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link className={styles.logo} href="/">
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
