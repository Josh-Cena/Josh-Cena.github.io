import Link from "@/components/Link";

export default function Tools(): JSX.Element {
  return (
    <ul>
      <li>
        <Link href="/tools/color-converter">Color converter</Link>
      </li>
      <li>
        <Link href="/tools/keyboard-visualizer">Keyboard visualizer</Link>
      </li>
      <li>
        <Link href="/tools/starrail-damage">Star Rail damage calculator</Link>
      </li>
    </ul>
  );
}

export const meta = {
  title: "Tools",
  description: "Tools developed by Josh-Cena",
};
