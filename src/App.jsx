import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="parent-todo">
      <h1>
        Write your tasks here or be 
        <br />
        condemned forever you little pumpkin
        head🎃🎃🎃
      </h1>
      <Input />
    </div>
  );
}

export default App;
