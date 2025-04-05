
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [val,setVal] = useState("");

  function display(e){
    setVal(e.target.value);
  }


  return (
    <div>
       <label>Enter your name:</label>
       <input type="text" name="name" value={val} onChange={display}/>
       {val &&
        <p>Hello {val}!</p>
       }
    </div>
  )
}

export default App
