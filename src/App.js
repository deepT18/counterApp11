import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";

function App() {
  const [displayedNumber,setdisplayedNumber]=useState(0)
  return (
    <div className="App">
      <div>Counter App</div>
      <h1>{displayedNumber}</h1>
      <div>
        <button>+</button>
        <button>-</button>
    </div>
    </div>
  );
}

export default App;
