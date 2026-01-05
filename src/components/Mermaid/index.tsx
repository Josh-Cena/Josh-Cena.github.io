export default function Mermaid({
  code,
}: {
  readonly code: string;
}): JSX.Element {
  return (
    // TODO
    <pre className="mermaid">{code}</pre>
  );
}
