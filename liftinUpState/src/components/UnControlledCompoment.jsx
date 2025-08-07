import React, { useRef } from 'react';

export default function UnControlledCompoment() {
    const inputRef = useRef();
    const handleSubmit = () => {
        alert(inputRef.current.value); // Access the value only when needed
    };

  return (
    <div>
      <h2 style={{ padding: "50px" }}>UnControlled Components</h2>
      <input type="text" ref={inputRef} />  {/* No state used */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
