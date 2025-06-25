import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsImageVisible] = useState(true);

  const toggleImage = () => {
    setIsImageVisible(!isVisible);
  };

  return (
    <div className="app">
      <h1>Image Visibility Toggle</h1>
      
      <button onClick={toggleImage}>
        {isVisible ? 'Hide Image' : 'Show Image'}
      </button>
      
      {isVisible && (
        <div>
          <img 
          height={300}
            src="pexel.jpg"
            alt="Sample" 
          />
        </div>
      )}
    </div>
  );
  
}

export default App
