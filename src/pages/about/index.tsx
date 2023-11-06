import { useId, type ReactNode } from "react";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import profile from "assets/thumbnail.jpg";
import styles from "./index.module.css";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
});

function Timeline({
  children,
}: {
  readonly children: ReactNode[];
}): JSX.Element {
  return (
    <div>
      <ul className={styles.timeline}>{children}</ul>
    </div>
  );
}

Timeline.Item = ({
  className,
  href,
  startDate,
  endDate,
  organization,
  position,
  children,
}: {
  readonly className: string;
  readonly href: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly organization: string;
  readonly position: string;
  readonly children?: ReactNode;
}): JSX.Element => {
  const localStartDate = new Date(startDate);
  const startTimeStamp =
    localStartDate.valueOf() + localStartDate.getTimezoneOffset() * 60 * 1000;
  const localEndDate = endDate ? new Date(endDate) : undefined;
  const endTimeStamp = localEndDate
    ? localEndDate.valueOf() + localEndDate.getTimezoneOffset() * 60 * 1000
    : undefined;
  return (
    <li className={clsx(styles.timelineItem, className)}>
      <Link tabIndex={-1} href={href} aria-label={organization}>
        <span className={styles.thumbnail} />
      </Link>
      <time dateTime={startDate}>{formatter.format(startTimeStamp)}</time>
      &nbsp;–&nbsp;
      {endDate && (
        <time dateTime={endDate}>{formatter.format(endTimeStamp)}</time>
      )}
      <br />
      <span style={{ fontWeight: "bold" }}>
        {position},{" "}
        <a href={href} target="_blank" rel="noreferrer">
          {organization}
        </a>
      </span>
      {children}
    </li>
  );
};

export default function About(): JSX.Element {
  const nameId = useId();
  return (
    <>
      <Link
        href="https://drive.google.com/file/d/1ODWzhl-oeyWT5F31echT0mv6UkUBe27X/view?usp=sharing"
        className={styles.pdf}
        aria-label="Open as PDF"
        title="Open as PDF">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
          <g>
            <path d="M1251.654 0c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0Zm-66.183 112.941H281.94V1807.06h1355.294V564.706H1185.47V112.94Zm112.94 23.379v315.445h315.445L1298.412 136.32Z" />
            <path d="M900.497 677.67c26.767 0 50.372 12.65 67.991 37.835 41.901 59.068 38.965 121.976 23.492 206.682-5.308 29.14.113 58.617 16.263 83.125 22.814 34.786 55.68 82.673 87.981 123.219 23.718 29.93 60.198 45.854 97.13 40.885 23.718-3.276 52.292-5.986 81.656-5.986 131.012 0 121.186 46.757 133.045 89.675 6.55 25.976 3.275 48.678-10.165 65.506-16.715 22.701-51.162 34.447-101.534 34.447-55.793 0-74.202-9.487-122.767-24.96-27.445-8.81-55.906-10.617-83.69-3.275-55.453 14.456-146.936 36.48-223.284 46.983-40.772 5.647-77.816 26.654-102.438 60.875-55.454 76.8-106.842 148.518-188.273 148.518-21.007 0-40.32-7.567-56.244-22.701-23.492-23.492-33.544-49.581-28.574-79.85 13.778-92.95 128.075-144.79 196.066-182.625 16.037-8.923 28.687-22.589 36.592-39.53l107.86-233.223c7.68-16.377 10.051-34.56 7.228-52.518-12.537-79.059-31.06-211.99 18.748-272.075 10.955-13.44 26.09-21.007 42.917-21.007Zm20.556 339.953c-43.257 126.607-119.718 264.282-129.996 280.32 92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04Z" />
          </g>
        </svg>
      </Link>
      <h1>About</h1>
      <div className={styles.profileRow}>
        <img src={profile} alt="" className={styles.profile} />
        <div>
          <span
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className={clsx(styles.zhName, "term")}
            lang="zh-Hans-CN"
            data-tooltip-id={nameId}>
            <ruby>
              陈 <rp>(</rp>
              {/* cSpell:ignore chén */}
              <rt>chén</rt>
              <rp>)</rp> 思 <rp>(</rp>
              <rt>sī</rt>
              <rp>)</rp> 达 <rp>(</rp>
              <rt>dá</rt>
              <rp>)</rp>
            </ruby>
          </span>
          <br />
          Joshua Chen
        </div>
        <Tooltip
          id={nameId}
          className="tooltip"
          disableStyleInjection
          clickable>
          <p>
            For those of you who are more familiar with IPA than pinyin, here's
            its IPA transcription in my pronunciation:
          </p>
          {/* cSpell:ignore tʃɛ̌n sᵻdɐ̌ */}
          <p style={{ textAlign: "center" }}>[tʃɛ̌n sᵻdɐ̌]</p>
          <p>
            Granted, everyone seems to have a different theory about what vowels
            Mandarin has, and I'm far from being a phonetician, so take it with
            a grain of salt.
          </p>
        </Tooltip>
      </div>
      <p>
        Specialist in JavaScript and related technologies. Maintainer of the MDN
        JavaScript documentation. Contributor to impactful JavaScript
        infrastructure projects such as TypeScript and typescript-eslint. My
        main work focus is compilers and static analysis, but I am also
        interested in computation models and functional programming.
      </p>
      <p>
        My Yale undergraduate study is mostly around quantitative social
        science, with a curriculum focused on statistics, data science, and the
        syntax and semantics of natural languages.
      </p>
      <Heading level={2}>Education</Heading>
      <Timeline>
        <Timeline.Item
          className={styles.yale}
          href="https://www.yale.edu/"
          startDate="2022-08"
          organization="Yale University"
          position="Bachelor's of Science">
          <ul>
            <li>BS in Statistics & Data Science, BA in Linguistics</li>
            <li>
              Relevant Coursework: Data structures, Linear algebra, Probability
              theory, Syntax (linguistics), Phonology
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          className={styles.wfla}
          href="https://www.wflms.cn/"
          startDate="2019-09"
          endDate="2022-06"
          organization="Shanghai World Foreign Language Academy"
          position="High school">
          <ul>
            <li>IB diploma</li>
            <li>
              Madam Luo's scholarship recipient (highest award); Leader of
              computerization club
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          className={styles.huayu}
          href="http://www.hy.sh.cn/"
          startDate="2015-09"
          endDate="2019-06"
          organization="Shanghai Huayu Middle School"
          position="Middle school"
        />
      </Timeline>
      <Heading level={2}>Experiences</Heading>
      <Timeline>
        <Timeline.Item
          className={styles.tseslint}
          href="https://typescript-eslint.io/"
          startDate="2022-10"
          organization="typescript-eslint"
          position="Maintainer">
          <ul>
            <li>
              Static analysis tool for TypeScript that reports potential logic
              bugs and unifies code style
            </li>
            <li>
              Core maintaining team, responsible for triaging issues, advising
              contributors, and reviewing pull requests
            </li>
            <li>
              23 million weekly downloads (60% of TypeScript’s total traffic)
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          className={styles.coursetable}
          href="https://coursetable.com/"
          startDate="2022-10"
          organization="CourseTable"
          position="Developer">
          <ul>
            <li>
              Student-run project at Yale used by almost all Yale students
            </li>
            <li>
              Empowers the course registration process, including course search,
              filtering, and schedule management
            </li>
            <li>
              Maintain developer infrastructure, lead the frontend development,
              provide technical support on Docker, React, and TypeScript to the
              10-person team
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          className={styles.mdn}
          href="https://developer.mozilla.org/en-US"
          startDate="2022-06"
          organization="MDN Web Docs"
          position="Invited expert">
          <ul>
            <li>
              De-facto standard reference material in the web developer
              community
            </li>
            <li>
              Project lead for reviewing, maintaining, and writing documentation
              for JavaScript language features
            </li>
            <li>
              Work closely with Chrome and Firefox documenters to deliver new
              feature documentation
            </li>
            <li>Top 10 JavaScript pages total 2 million views / month</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item
          className={styles.docusaurus}
          href="https://docusaurus.io/"
          startDate="2021-10"
          organization="Docusaurus"
          position="Maintainer">
          <ul>
            <li>
              React-based documentation framework aiming to make setting up
              documentation websites easier
            </li>
            <li>
              Design and develop core features, instrument the shipping of 2.0
              major rebuild
            </li>
            <li>
              280,000 weekly downloads (among the highest in static site
              generators)
            </li>
          </ul>
        </Timeline.Item>
      </Timeline>
      <Heading level={2}>Skills</Heading>
      <ul>
        <li>
          Languages:{" "}
          <img
            alt="JavaScript"
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          />{" "}
          <img
            alt="TypeScript"
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
          />{" "}
          <img
            alt="Python"
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          />{" "}
          <img
            alt="R"
            src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white"
          />{" "}
          <img
            alt="C++"
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
          />{" "}
          <img
            alt="Haskell"
            src="https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white"
          />
        </li>
        <li>
          Tools:{" "}
          <img
            alt="ESLint"
            src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
          />{" "}
          <img
            alt="React"
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />{" "}
          <img
            alt="Webpack"
            src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
          />{" "}
          <img
            alt="Node.js"
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
          />{" "}
          <img
            alt="NumPy"
            src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
          />{" "}
          <img
            alt="PyTorch"
            src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
          />{" "}
          <img
            alt="LaTeX"
            src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white"
          />{" "}
          <img
            alt="Git"
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
          />
        </li>
        <li>
          Skills: Static analysis, Front-end development, Deep learning,
          Computer vision, Technical writing
        </li>
      </ul>
      <aside style={{ textAlign: "right", fontStyle: "italic" }}>
        Design ideas from: Nina Liu
      </aside>
    </>
  );
}
