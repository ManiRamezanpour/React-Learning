import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Document title is updated");
    document.title = `clicked ${count} time`;
  }, [count]);
  // ,[] for control the the function if change the count state function is run
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default FunctionalCounter;
