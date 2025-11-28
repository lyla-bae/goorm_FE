// App.jsx
import { Fragment } from "react";
import "./App.css";
// import Avatar from "./Avatar";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function App() {
  const listItems = poem.lines.map((li, i) => (
    <Fragment key={i}>
      {i > 0 && <hr />}
      <p>{li}</p>
    </Fragment>
  ));

  return <article>{listItems}</article>;
}
