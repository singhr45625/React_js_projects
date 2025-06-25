import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert("Componet is loaded")
  }, [count])
  
  const incrementVlaue= () => {
    setCount(count + 1);

    }
    const getMessage= () => {
       if(count==0) return "Get strated";
       if(count > 15) return " You are a champion";
       if(count > 10) return "Awesome";
       if(count>5) return "Great going";
       if(count>0) return "Keep Going";    
    }

    const resetCounter = () => {
      setCount(0);
    }
    const decrementCounter = () => {
      if(count > 0) {
        setCount(count - 1);
      }
    }

  

  return (
    <div>
      <h1>Value of counter is : {count}</h1>
      <h2>{getMessage()}</h2>
      <button onClick={incrementVlaue}>Increament Counter</button><br />
      <button onClick={resetCounter}>Reset Counter</button><br />
      <button onClick={decrementCounter}>Decrement Button</button>

    </div>
  );
}

export default App
