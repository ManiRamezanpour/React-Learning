import { useReducer } from "react";
const initialState = {
  //? when the state is object can add two propety => 1. type 2. value;
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
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
      <div>
        <h1>count is : {count.firstCounter}</h1>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>{" "}
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <h1>count is : {count.secondCounter}</h1>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterReducer;
