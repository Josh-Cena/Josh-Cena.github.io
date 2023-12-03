import { useId } from "react";
import { Tooltip } from "react-tooltip";
import CommentIcon from "assets/comment-icon.svg?react";
import avatar from "assets/avatar.svg";
import chatGPT from "assets/chatgpt-logo.svg";
import styles from "./_components.module.css";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function Time({ dateTime }: { readonly dateTime: string }): JSX.Element {
  return (
    <time dateTime={dateTime}>{formatter.format(new Date(dateTime))}</time>
  );
}

export function ChatBox({
  children,
  name,
  comment,
}: {
  readonly children: React.ReactNode;
  readonly name: string;
  readonly comment?: string;
}): JSX.Element {
  const id = useId();
  return (
    <>
      <section className={styles.chatBox}>
        <div className={styles.profileRow}>
          <img
            alt={name}
            className={styles.avatar}
            src={name === "JC" ? avatar : chatGPT}
          />
          <span className={styles.name}>{name}</span>
        </div>
        {children}
        {comment && (
          <span data-tooltip-id={id} className={styles.commentButton}>
            <CommentIcon />
          </span>
        )}
      </section>
      <Tooltip
        id={id}
        className="tooltip"
        disableStyleInjection
        clickable
        place="left">
        <p>{comment}</p>
      </Tooltip>
    </>
  );
}
