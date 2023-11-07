import type { ComponentPropsWithoutRef } from "react";
import { Link as RRLink } from "react-router-dom";

export default function Link({
  href,
  ...props
}: ComponentPropsWithoutRef<"a">): JSX.Element {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  if (!href) return <a {...props} />;
  const isInternal =
    new URL(href, "https://joshcena.com").origin === "https://joshcena.com";
  const isAnchorLink = href.startsWith("#");

  return isAnchorLink || !isInternal ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={href}
      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  ) : (
    <RRLink to={href} {...props} />
  );
}
