// components/NameDisplay.jsx
import React from "react";

function NameDisplay({ name }) {
  return (
    <div style={{marginTop: "20px", padding: "50px", fontFamily: "sans-serif", height : "100px", backgroundColor :"pink" }}>
      <strong>Uppercased Name:</strong> {name.toUpperCase()}
    </div>
  );
}

export default NameDisplay;
