import React, { useContext, useEffect, useState } from "react";
export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(4);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;