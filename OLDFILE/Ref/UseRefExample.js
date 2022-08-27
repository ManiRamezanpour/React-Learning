import React, { useState, useEffect, useRef } from "react";
const UseRefExample = () => {
  const [inputValue, setinput] = useState("");
  const prevValue = useRef();
  const prevCount = useRef();
  const [count, setCount] = useState(0);

  //TODO : Input Handler
  const inputHandler = (event) => {
    setinput(event.target.value);
  };

  useEffect(() => {
    prevValue.current = inputValue; // Does not re-render component
  }, [inputValue]);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  return (
    <div>
      <input type="text" ref={prevValue} onChange={inputHandler} />
      <h1>
        My Name is : {inputValue} and current name is :{prevValue.current}
      </h1>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        Random Number
      </button>
      <h1>count is : {count}</h1>
      <h1>current Count is : {prevCount.current}</h1>
    </div>
  );
};

export default UseRefExample;
//todo : when click to reset button => focus on the input
