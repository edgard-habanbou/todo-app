import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faFlag, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { userApi } from "../../network/axios";
import AddTodoModal from "../AddTodoModal";
interface TodoFieldProps {
  todo: {
    id: string;
    description: string;
    date: string;
    priority: number;
  };
  getTodos: () => void;
}

function Todo({ todo, getTodos }: TodoFieldProps) {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async (id: string) => {
    await userApi.deleteTodo(id);
    getTodos();
  };
  return (
    <div className="todo-field flex space-between">
      <div>{todo.description}</div>
      <div className="flex column todo-actions">
        <div className="flex right">
          <button className="btn-menu">
            <FontAwesomeIcon icon={faFlag} className="icon" />
          </button>
        </div>
        <div className="flex gap">
          <button
            className="btn-menu"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FontAwesomeIcon icon={faPen} className="icon" />
          </button>
          <button
            className="btn-menu"
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
        </div>
      </div>
      {showModal && (
        <AddTodoModal
          edit={true}
          todo={todo}
          toggleModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default Todo;
