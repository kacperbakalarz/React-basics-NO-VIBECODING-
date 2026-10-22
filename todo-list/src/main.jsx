import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';

function MyApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  return(
    <>
    <textarea value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={() => {setTodos([...todos,text]); setText("");}}>add</button>
    

    <h1>TO-DO LIST:</h1>
    <ul>
      {todos.map((todo, index) => (<li key={index}>{todo} <button onClick={() => {setTodos([todos.slice(0,-1)])}}>remove</button></li> ))}
    </ul>
    
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <MyApp />,
);
