import { useState } from "react";
import WithCounter from "./WirthCounter";

const HocClick = ({ count, incrementHandlers }) => {
  return <h2 onClick={incrementHandlers}>Click {count} times</h2>;
};

export default WithCounter(HocClick, 5);
