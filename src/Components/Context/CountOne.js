import { CounterContext, CounterContextDispatcher } from "./CounterProvider";
import { useContext } from "react";
const CounterOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDispatcher);
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default CounterOne;
