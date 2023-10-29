import { Link } from "react-router-dom"

export default function Tools() {
  return (
    <ul>
      <li>
        <Link to="/tools/color-converter">Color converter</Link>
      </li>
      <li>
        <Link to="/tools/todo-list">Todo list</Link>
      </li>
    </ul>
  );
}
