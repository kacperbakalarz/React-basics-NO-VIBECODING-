import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createPortal} from 'react-dom';
const myStyle = {
  color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
    borderRadius: "4px"
};
const myStyle2 = {
  color: "white",
  backgroundColor: "purple",
  padding: "10px",
  fontFamily: "Sans-Serif",
  borderRadius: "8px"
};
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <>
    <button style={myStyle} onClick={() => setCount(count+1)}>Increase</button>
    <button style={myStyle2} onClick={() => setCount(count-1)}>Deacrese</button> 
    <h1>Current Score: {count}</h1>
    <button onClick={() => alert("final score is " + count) + setCount(0)}>Final</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);
