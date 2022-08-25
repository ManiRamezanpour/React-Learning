import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  //! initialState= count
  //! reducer is func
  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add Five</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};

export default CounterReducer;
