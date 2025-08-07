// components/NameInput.jsx
import React from "react";

function NameInput({ name, onNameChange }) {

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif", height : "100px", backgroundColor :"pink" }}>
      <label>Enter your name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Type your name"
      />

    </div>
  );
}

export default NameInput;
