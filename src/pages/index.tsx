import { useId } from "react";
import Scrolly from "@/components/Scrolly";
import { Tooltip } from "react-tooltip";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const id = useId();
  return (
    <>
      <Scrolly />
      <blockquote className={styles.quote}>
        <p>
          I care about <dfn data-tooltip-id={id}>languages</dfn>!
        </p>
      </blockquote>
      <Tooltip id={id} className="tooltip" disableStyleInjection clickable>
        <p>
          When I say languages, I mean both natural languages and programming
          languages.
        </p>
      </Tooltip>
    </>
  );
}
