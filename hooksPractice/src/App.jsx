import { useState } from 'react'
import './app.css'
import Memo from './pages/memo'
import Ref from './pages/Ref'
import UseEffect from './pages/UseEffect'
import UseReducer from './pages/UseReducer'
import UseCallback from './pages/UseCallback'
import UseContext from './pages/UseContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ padding: "30px" ,backgroundColor : "pink"}}>
      <h2>useState</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </div>
    <UseContext></UseContext>
      <UseReducer></UseReducer>
      <UseCallback></UseCallback>
    <Memo></Memo>
    <Ref></Ref>
    <UseEffect></UseEffect>

      
    </>
  )
}

export default App
