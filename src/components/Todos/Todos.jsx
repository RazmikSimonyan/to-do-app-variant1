import React from "react";
import "./Todos.css";
const Todos = ({ todosstate }) => {
  const [todos, setTodos] = todosstate;

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKilledChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            className="chckbx"
            onChange={() => handleKilledChange(todo.id)}
            style={{ marginTop: "20px" }}
          />
          <span style={{ fontSize: "25px" }}>{todo.title}</span>
          <button 
          className="cool-button" 
          style={{ backgroundColor: "red" }}
          onClick={()=>handleRemove(todo.id)}>
            X
          </button>
        </li>
      ))}
    </>
  );
};

export default Todos;
