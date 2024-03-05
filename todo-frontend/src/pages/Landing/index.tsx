import React from "react";
import TodoList from "../../components/TodoList";
import "./index.css";

function Landing() {
  const todos = [
    {
      description: "Batata",
      priority: 2,
      completed: true,
      date: "2024-03-06T08:00:00Z",
    },
    {
      description: "Batata",
      priority: 2,
      completed: false,
      date: "2024-03-06T08:00:00Z",
    },
    {
      description: "Batata2",
      priority: 2,
      completed: false,
      date: "2024-03-05T08:00:00Z",
    },
    {
      description: "Batata2",
      priority: 2,
      completed: false,
      date: "2024-03-07T08:00:00Z",
    },
  ];
  return (
    <div className="todo-wrapper full-screen">
      <div className="todo-list">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default Landing;
