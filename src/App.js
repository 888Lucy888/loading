import {useState} from 'react';
import './App.css';

// @authors Andrés Martínez, Lucía Castañeda
// Text Animation Base from MDBootstrap.com
// https://mdbootstrap.com/docs/react/extended/css-text-animations/

function App() {
  const [msg, setMsg] = useState("");

  function startAnimation() {
    document.getElementById("animation").classList.add("animate");
    document.getElementById("btn").classList.add("invisible");
    setTimeout(()=> 
    {
      document.getElementById("animation").classList.remove("animate");
      if(Math.floor(Math.random()*2)===1) setMsg("Success") 
      else {
        setMsg("Error");
        document.getElementById("btn").classList.remove("invisible");
      }
    }
    ,1400);

  }
  return (
    <div className="App">
        <button onClick={startAnimation} id="btn">Load</button>
        <h1 id="animation">Loading</h1>
        <h3>{msg}</h3>
    </div>
  );
}

export default App;
