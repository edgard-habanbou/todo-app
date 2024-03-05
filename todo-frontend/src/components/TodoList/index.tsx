import React from "react";
import "./index.css";
import Todo from "../Todo";

interface TodoProps {
  description: string;
  completed: boolean;
  priority: number;
  date: string;
}

function TodoList({ todos }: { todos: TodoProps[] }) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const groupedTodos: { [key: string]: TodoProps[] } = {};
  todos.forEach((todo) => {
    const todoDate = formatDate(todo.date);
    if (!groupedTodos[todoDate]) {
      groupedTodos[todoDate] = [];
    }
    groupedTodos[todoDate].push(todo);
  });

  const sortedDates = Object.keys(groupedTodos).sort();

  const today = formatDate(new Date().toISOString());
  const tomorrow = formatDate(new Date(Date.now() + 86400000).toISOString());

  return (
    <div>
      <div className="todo-list-wrapper full-screen flex column gap center">
        {sortedDates.map((date: string, index) => (
          <div key={index}>
            {date === today ? (
              <h2>Today</h2>
            ) : date === tomorrow ? (
              <h2>Tomorrow</h2>
            ) : (
              <h2>{date}</h2>
            )}
            {groupedTodos[date].map((todo: TodoProps, todoIndex) => (
              <Todo
                key={todoIndex}
                description={todo.description}
                completed={todo.completed}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
