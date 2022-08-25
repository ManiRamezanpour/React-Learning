import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  //TODO : use mulltiple reducer
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  //! initialState= count
  //! reducer is func
  return (
    <div>
      <div>
        <h1>count is : {count}</h1>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>{" "}
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h1>count two is : {countTwo}</h1>
        <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
          add one
        </button>{" "}
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default CounterReducer;
