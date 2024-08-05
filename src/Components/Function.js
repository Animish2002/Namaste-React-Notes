import React, { useState } from "react";

const Function = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Current location: {location}</h3>
      <h3>Contact: {contact}</h3>
      <button onClick={() => setCount(count + 1) & setCount2(count2 + 1)}>
        {" "}
        Click me
      </button>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
    </div>
  );
};

export default Function;
