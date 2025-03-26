const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PostData({
  frontMatter,
}: {
  readonly frontMatter: FrontMatter;
}): JSX.Element {
  const date = new Date(frontMatter.date);
  const timeStamp = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
  return (
    <div>
      <time dateTime={frontMatter.date}>
        {formatter.format(new Date(timeStamp))}
      </time>
    </div>
  );
}
