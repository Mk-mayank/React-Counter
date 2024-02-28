import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  //let counter = 5 ; 

  const Addval = () =>{
    setCount(count + 1)
  }

  const Subval = ()=>{
    setCount(count-1)
  }

  // const AddValue
  return (
    
    <>
      <h1>CHai aur React </h1>
      <h2> Counter Value : {count}</h2>

      <button onClick={Addval}> Increment </button>     
      <br />
      <button onClick={Subval}> Decrement </button>
    </>
  )
}

export default App
