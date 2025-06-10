import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  const downvalue = () => {
    if (count > 0) {
      setCount(count - 1);
    }cd
  }

  return (
    <>
     <h1>Counter {count}</h1>
     <button onClick={addValue}> Increase the value </button>
     <button onClick={downvalue}> Decrease the value </button>

    </>
  )
}

export default App
