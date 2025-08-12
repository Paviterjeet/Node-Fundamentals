import React, { useRef } from "react";

export default function Ref() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
    <div style={{ padding: "30px" ,backgroundColor : "grey"}}>
        <h2>useRef</h2>
            <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focus}>Focus Input</button>
    </div>
      
    </>
  );
}
