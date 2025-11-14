import React from "react";
import "./Todos.css";
const Todos = ({ todosstate }) => {
  const [todos, setTodos] = todosstate;

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            className="chckbx"
            style={{ marginTop: "20px" }}
          />
          <span style={{ fontSize: "25px" }}>{todo.title}</span>
          <button className="cool-button" style={{ backgroundColor: "red" }}>
            X
          </button>
        </li>
      ))}
    </>
  );
};

export default Todos;
