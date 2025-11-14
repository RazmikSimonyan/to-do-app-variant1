import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";

function App() {
  const textstate = useState("");
  const todosstate = useState([]);


  const handleRemove = (id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id));
  }

  return (
    <div className="parent-todo">
      <h1>
        Write your tasks here or be 
        <br />
        condemned forever you little pumpkin
        head🎃🎃🎃
      </h1>
      <Input textstate={textstate} todosstate={todosstate}/>
      <Todos todosstate={todosstate}/>
    </div>
  );
}

export default App;
