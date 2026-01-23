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

export function CourseInfo({ id }: { readonly id: string }): JSX.Element {
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
