import React, { useState, useCallback } from "react";

export default function UseCallback() {
  
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
  <>
  <h2>UseCallback</h2>
  <button onClick={increment}>Clicked {count} times</button>
  </>
    
)
}
