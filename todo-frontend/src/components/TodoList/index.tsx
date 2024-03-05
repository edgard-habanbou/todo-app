import React, { useState } from "react";
import "./index.css";
import Todo from "../Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTodoModal from "../AddTodoModal";

interface TodoProps {
  id: string;
  description: string;
  completed: boolean;
  priority: number;
  date: string;
}

function TodoList({
  todos,
  getTodos,
}: {
  todos: TodoProps[];
  getTodos: () => void;
}) {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

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

  const today = formatDate(new Date(Date.now() + 86400000).toISOString());
  const tomorrow = formatDate(
    new Date(Date.now() + 86400000 + 86400000).toISOString()
  );

  return (
    <>
      <div className="todo-list-wrapper full-screen flex column gap center">
        {sortedDates.map((date: string, index) => (
          <div key={index} className="flex column gap color-white">
            {date === today ? (
              <h3>Today</h3>
            ) : date === tomorrow ? (
              <h3>Tomorrow</h3>
            ) : (
              <h3>{date}</h3>
            )}
            {groupedTodos[date].map((todo: TodoProps, todoIndex) =>
              todo.completed ? null : (
                <Todo
                  key={todoIndex}
                  description={todo.description}
                  id={todo.id}
                  getTodos={() => getTodos()}
                />
              )
            )}
          </div>
        ))}
        <div className="full-width">
          <div className="flex gap right actions">
            <button className="btn-menu flex center round">
              <FontAwesomeIcon icon={faCheck} className="icon" size="xl" />
            </button>
            <button
              className="btn-menu flex center round"
              onClick={() => setShowAddTodoModal(true)}
            >
              <FontAwesomeIcon icon={faPlus} className="icon" size="xl" />
            </button>
          </div>
        </div>
      </div>
      {showAddTodoModal && (
        <AddTodoModal
          edit={false}
          toggleModal={() => {
            setShowAddTodoModal(false);
            getTodos();
          }}
        />
      )}
    </>
  );
}

export default TodoList;
