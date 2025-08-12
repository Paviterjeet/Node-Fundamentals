import React, { useState, useMemo } from "react";

export default function Memo() {
  
 const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <>
    <div style={{ padding: "30px" ,backgroundColor : "pink"}}>

        <h2>useMemo</h2>
      <p>Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}

