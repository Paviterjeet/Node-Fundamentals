import { useState } from 'react'

export default function ControlledCompoment() {
  const [name, setName] = useState("");

  return (
    <>
    <h2 style={{ padding: "50px" ,color : "white"}}>Controlled Components</h2>
     <input
      type="text"
      value={name} // React controls this value
      onChange={(e) => setName(e.target.value)} // updates React state
    />
    </>
   
  );
}
