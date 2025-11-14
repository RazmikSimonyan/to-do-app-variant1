import React from "react";
import "./Input.css";

const Input = ({ textstate, todosstate }) => {
  const [text, setText] = textstate;
  const [todos, setTodos] = todosstate;

  const handleChange = (e) => {
    setText(e.target.value);
  };

   const addTodo = ()=>{
    if(text.trim()){
      setTodos((prev)=>{
        return [...prev, {id: Date.now(), title:text, isDone:false}]
      });
      setText("");
    }
  }

  return (
    <div className="parent-input">
      <input value={text} onChange={handleChange} className="my-input" />
      <button className="cool-button" onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
