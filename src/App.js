import React from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/game" element={<TodoList />} />
          <Route path="/*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
