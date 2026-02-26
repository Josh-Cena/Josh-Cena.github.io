import type { ReactNode } from "react";
import Link from "@/components/Link";
import GitHub from "assets/github-logo.svg?react";
import LinkedIn from "assets/linkedin-logo.svg?react";
import X from "assets/x-logo.svg?react";
import Bluesky from "assets/bluesky-logo.svg?react";
import Discord from "assets/discord-logo.svg?react";
import Mail from "assets/mail-logo.svg?react";
import Zhihu from "assets/zhihu-logo.svg?react";
import styles from "./index.module.css";

const links = [
  { Logo: GitHub, path: "https://github.com/Josh-Cena" },
  { Logo: LinkedIn, path: "https://www.linkedin.com/in/sida-joshua-chen/" },
  { Logo: X, path: "https://x.com/SidaChen63" },
  { Logo: Bluesky, path: "https://bsky.app/profile/joshcena.com" },
  { Logo: Discord, path: "https://discordapp.com/users/767205732448862208" },
  { Logo: Zhihu, path: "https://www.zhihu.com/people/joshcena" },
  { Logo: Mail, path: "mailto:sidachen2003@gmail.com" },
];

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div>
        Copyright © {new Date().getFullYear()} Sida Chen. Licensed under MIT.
      </div>
      <div className={styles.logos}>
        {links.map(({ Logo, path }) => (
          <Link key={path} className={styles.logoLink} href={path}>
            <Logo />
          </Link>
        ))}
      </div>
    </footer>
  );
}
