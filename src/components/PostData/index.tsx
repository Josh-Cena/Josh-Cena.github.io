import type { ReactNode } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export interface FrontMatter {
  title: string;
  description: string;
}

export default function PostData({
  date,
}: {
  readonly frontMatter: FrontMatter;
  readonly date: string;
}): ReactNode {
  const dateParsed = new Date(date);
  const timeStamp =
    dateParsed.valueOf() + dateParsed.getTimezoneOffset() * 60 * 1000;
  return (
    <div>
      <time dateTime={date}>{formatter.format(new Date(timeStamp))}</time>
    </div>
  );
}
