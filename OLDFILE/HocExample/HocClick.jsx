import { useState } from "react";
import WithCounter from "./WirthCounter"; //! parent Component 

const HocClick = ({ count, incrementHandlers }) => {
  return <h2 onClick={incrementHandlers}>Click {count} times</h2>;
};

export default WithCounter(HocClick, 5); //TODO :  export this component in parent component !