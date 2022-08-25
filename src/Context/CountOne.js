import { useCount, useCountAction } from "./CounterProvider";
import { useReducer } from "react";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive, decrement } = useCountAction();

  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add Five</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterOne;
