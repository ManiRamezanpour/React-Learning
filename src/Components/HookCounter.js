import { useState } from "react";
const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    /// use Call back function to update state for not have a problem
    // setCount(count + 1);
    //TODO : get previus Count and updated
    setCount((prevCount) => prevCount + 1);
  };
  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const addFiveHandler = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={addOneHandler}>add One</button>
      <button onClick={addTwoHandler}>add Two</button>
      <button onClick={addFiveHandler}>add Five</button>
    </div>
  );
};

export default HookCounter;
