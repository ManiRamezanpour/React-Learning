import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={firstNameHandler} />
        <input type="text" onChange={lastNameHandler} />
      </form>
      <h1>firstName is : {user.firstName}</h1>
      <h1>lastName is : {user.lastName}</h1>
    </div>
  );
};

export default HookObject;
