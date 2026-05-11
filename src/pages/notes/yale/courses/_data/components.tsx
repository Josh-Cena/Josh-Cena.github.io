import type { ReactNode } from "react";
import { Tooltip } from "react-tooltip";
import chroma from "chroma-js";
import Link from "@/components/Link";
import styles from "./components.module.css";
import data from "./data.json";

type Listing = (typeof data.data.listings)[number];

const table = new Map<string, Listing>();
data.data.listings.forEach((listing) => {
  table.set(`${listing.season_code}-${listing.crn}`, listing);
});

const skillsAreasColors: { [code: string]: string } = {
  Hu: "#9970AB",
  So: "#4393C3",
  Sc: "#5AAE61",
  QR: "#CC3311",
  WR: "#EC7014",
  L: "#000000",
  ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`L${i}`, "#888888"])),
};

function SkillBadge({ skill }: { readonly skill: string }) {
  return (
    <span
      className={styles.tag}
      style={{
        color: skillsAreasColors[skill],
        backgroundColor: chroma(skillsAreasColors[skill]!).alpha(0.16).css(),
      }}>
      {skill}
    </span>
  );
}

export function CourseInfo({
  id,
  writing,
}: {
  readonly id: string;
  readonly writing?: string | string[];
}): ReactNode {
  const course = table.get(id);
  if (!course) return <span>Course not found: {id}</span>;
  return (
    <>
      <span className="no-br">
        <Link
          href={`https://coursetable.com/catalog?course-modal=${id}`}
          data-tooltip-id={id}>
          {course.course_code}
        </Link>{" "}
        {[...course.course.skills, ...course.course.areas].map((s) => (
          <SkillBadge key={s} skill={s} />
        ))}
      </span>
      <br />
      <span className={styles.courseTitle}>{course.course.title}</span>
      {writing && (
        <>
          <br />
          {(Array.isArray(writing) ? writing : [writing]).map((w) => (
            <a
              key={w}
              href={`https://drive.google.com/file/d/${w}/view?usp=drive_link`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdf}
              aria-label="Paper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
                <g>
                  <path d="M1251.654 0c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0Zm-66.183 112.941H281.94V1807.06h1355.294V564.706H1185.47V112.94Zm112.94 23.379v315.445h315.445L1298.412 136.32Z" />
                  <path d="M900.497 677.67c26.767 0 50.372 12.65 67.991 37.835 41.901 59.068 38.965 121.976 23.492 206.682-5.308 29.14.113 58.617 16.263 83.125 22.814 34.786 55.68 82.673 87.981 123.219 23.718 29.93 60.198 45.854 97.13 40.885 23.718-3.276 52.292-5.986 81.656-5.986 131.012 0 121.186 46.757 133.045 89.675 6.55 25.976 3.275 48.678-10.165 65.506-16.715 22.701-51.162 34.447-101.534 34.447-55.793 0-74.202-9.487-122.767-24.96-27.445-8.81-55.906-10.617-83.69-3.275-55.453 14.456-146.936 36.48-223.284 46.983-40.772 5.647-77.816 26.654-102.438 60.875-55.454 76.8-106.842 148.518-188.273 148.518-21.007 0-40.32-7.567-56.244-22.701-23.492-23.492-33.544-49.581-28.574-79.85 13.778-92.95 128.075-144.79 196.066-182.625 16.037-8.923 28.687-22.589 36.592-39.53l107.86-233.223c7.68-16.377 10.051-34.56 7.228-52.518-12.537-79.059-31.06-211.99 18.748-272.075 10.955-13.44 26.09-21.007 42.917-21.007Zm20.556 339.953c-43.257 126.607-119.718 264.282-129.996 280.32 92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04Z" />
                </g>
              </svg>
            </a>
          ))}
        </>
      )}
      <Tooltip id={id} className="tooltip" disableStyleInjection clickable>
        <p>
          Instructor{course.course.course_professors.length > 1 ? "s" : ""}:{" "}
          {course.course.course_professors
            .map((p) => p.professor.name)
            .join(", ")}
        </p>
        <p>
          {course.course.credits} credit{course.course.credits > 1 ? "s" : ""}
        </p>
      </Tooltip>
    </>
  );
}
