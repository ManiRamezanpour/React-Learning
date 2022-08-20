import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);
  const generateItem = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };
    const updatedItem = [...item,addedItem];
    setItem(updatedItem);
  };
  return (
    <div>
      <button onClick={generateItem}>generate Item</button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookArray;
