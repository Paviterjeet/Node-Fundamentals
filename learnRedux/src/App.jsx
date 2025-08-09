import { useState } from 'react'
import './App.css'
import { increment, decrement } from './features/counterSlice'
import {useSelector , useDispatch} from 'react-redux'

function App() {
  const count = useSelector((state)=> state.Counterr.countValue)
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      
    </div>
    </>
  )
}

export default App
