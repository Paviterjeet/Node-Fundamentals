import { useState } from 'react'

import './App.css'
import UnControlledCompoment from './components/UnControlledCompoment';
import ControlledCompoment from './components/ControlledCompoment';

function App() {
  //const [name, setName] = useState("");

  return (
    <>
    <div style={{ padding: "50px", fontFamily: "sans-serif", height : "auto", backgroundColor :"grey" }} >
     
      <UnControlledCompoment/>
    </div>
    <div style={{ padding: "50px", fontFamily: "sans-serif", height : "auto", backgroundColor :"black" }} >
      
      <ControlledCompoment/>
    </div>
      

    </>
    // <div style={{ padding: "100px", fontFamily: "sans-serif", height : "500px", backgroundColor :"grey" }} >
    //   <h2>👤 Name Uppercaser</h2>
    //   <NameInput name={name} onNameChange={setName} />
    //   <NameDisplay name={name} />
    // </div>
  );
}
export default App
