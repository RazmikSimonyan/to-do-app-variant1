import React, { useState, createContext } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";

let MyContext = createContext(null);

function App() {
  const textstate = useState("");
  const todosstate = useState([]);

  return (
    <div className="parent-todo">
      <h1>
        Write your tasks here or be
        <br />
        condemned forever you little pumpkin head🎃🎃🎃
      </h1>
      <Input textstate={textstate} todosstate={todosstate} />
      <Todos todosstate={todosstate} />
    </div>
  );
}

export default App;
