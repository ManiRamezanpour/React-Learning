import { useState } from "react";
import WithCounter from "./WirthCounter";

const HocHover = ({ count, incrementHandlers }) => {
  return <h2 onMouseOver={incrementHandlers}>Hover {count} times</h2>;
};

export default WithCounter(HocHover,10); // set 2 input for hoc function
