import { useState } from "react";

const WithCounter = (WrappedComponent, incrementValue) => { // set 2 input for function
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementHandlers = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementHandlers={incrementHandlers}
        // add another props
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default WithCounter;
