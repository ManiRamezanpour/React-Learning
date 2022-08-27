import { useEffect, useState } from "react";
const FunctionalTimer = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const inteval = setInterval(() => {
      console.log("func itervla test");
      setcount(count + 1);
    }, 1000);
    return () => {
      clearInterval(inteval);
    };
  }, []);
  return <div>this is timer</div>;
};

export default FunctionalTimer;
