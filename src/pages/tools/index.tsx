import Link from "@/components/Link";

export default function Tools(): JSX.Element {
  return (
    <ul>
      <li>
        <Link href="/tools/color-converter">Color converter</Link>
      </li>
    </ul>
  );
}

export const meta = {
  title: "Tools",
  description: "Tools developed by Josh-Cena",
};