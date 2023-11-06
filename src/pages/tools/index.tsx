import Link from "@/components/Link";

export default function Tools(): JSX.Element {
  return (
    <ul>
      <li>
        <Link href="/tools/color-converter">Color converter</Link>
      </li>
      <li>
        <Link href="/tools/todo-list">Todo list</Link>
      </li>
    </ul>
  );
}
