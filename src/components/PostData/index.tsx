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
  return (
    <div>
      <time dateTime={frontMatter.date}>
        {formatter.format(new Date(frontMatter.date))}
      </time>
    </div>
  );
}
