import React, { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";
import "./index.css";
import { userApi } from "../../network/axios";

function Landing() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await userApi.getTodos();
    setTodos(response);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todo-wrapper full-screen">
      <div className="todo-list">
        <TodoList todos={todos} getTodos={() => getTodos()} />
      </div>
    </div>
  );
}

export default Landing;
