import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

export default function UseReducer() {
  
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
    <div style={{ padding: "30px" ,backgroundColor : "grey"}}>

    
        <h2>useReducer</h2>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
    </>

  );
}
