import styles from "./styles.module.css";
import GitHub from "assets/github-logo.svg?react";
import LinkedIn from "assets/linkedin-logo.svg?react";
import Twitter from "assets/twitter-logo.svg?react";
import Discord from "assets/discord-logo.svg?react";
import Mail from "assets/mail-logo.svg?react";
import Zhihu from "assets/zhihu-logo.svg?react";

const links = [
  { Logo: GitHub, path: "https://github.com/Josh-Cena" },
  { Logo: LinkedIn, path: "https://www.linkedin.com/in/sida-joshua-chen/" },
  { Logo: Twitter, path: "https://twitter.com/SidaChen63" },
  { Logo: Discord, path: "https://discordapp.com/users/767205732448862208" },
  { Logo: Zhihu, path: "https://www.zhihu.com/people/joshcena" },
  { Logo: Mail, path: "mailto:sidachen2003@gmail.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Copyright © {new Date().getFullYear()} Sida Chen. Licensed under MIT.
      </div>
      <div className={styles.logos}>
        {links.map(({ Logo, path }) => (
          <a key={path} className={styles.logoLink} href={path} target="_blank" rel="noreferrer noopener">
            <Logo />
          </a>
        ))}
      </div>
    </footer>
  );
}
