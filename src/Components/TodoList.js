import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), task: input, completed: false }; // Generate a unique ID
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ lineHeight: "1.5", textAlign: "center" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.length === 0 ? (
          <p>No todos available</p>
        ) : (
          todos.map((todo) => (
            <li style={{ listStyle: "none" }} key={todo.id}>
              <span style={{ color: "black" }}>{todo.task}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
