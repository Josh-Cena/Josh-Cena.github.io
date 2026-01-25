import { useState, type ReactNode } from "react";
import Heading from "@/components/Heading";

export function DynamicHeading(): ReactNode {
  const [count, setCount] = useState(1);
  return (
    <>
      <Heading level={2}>Heading {count}</Heading>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
