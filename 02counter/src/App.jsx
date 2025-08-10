import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter] = useState(0)
 //let counter = 15;
const incCounter = () =>{ 
 /* setCounter(counter+1);*/
  setCounter((prvCounter)=> prvCounter +1);
  setCounter((prvCounter)=> prvCounter +1);
  setCounter((prvCounter)=> prvCounter +1);
  setCounter((prvCounter)=> prvCounter +1);
}
const decCounter=()=>{
  setCounter(counter-1);
}

  return (
    <>
      <h1>prathamesh korde</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={incCounter}>add value</button>{" "}
      <button onClick={decCounter}>remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
