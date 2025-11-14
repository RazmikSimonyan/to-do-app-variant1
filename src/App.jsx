import React,{ useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <>
     <Input/>
    </>
  );
}

export default App;
