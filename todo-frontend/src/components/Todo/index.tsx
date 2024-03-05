import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faFlag, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { userApi } from "../../network/axios";
interface TodoFieldProps {
  description: string;
  id: string;
  getTodos: () => void;
}

function Todo({ description, id, getTodos }: TodoFieldProps) {
  const handleDelete = async (id: string) => {
    await userApi.deleteTodo(id);
    getTodos();
  };
  return (
    <div className="todo-field flex space-between">
      <div>{description}</div>
      <div className="flex column todo-actions">
        <div className="flex right">
          <button className="btn-menu">
            <FontAwesomeIcon icon={faFlag} className="icon" />
          </button>
        </div>
        <div className="flex gap">
          <button className="btn-menu">
            <FontAwesomeIcon icon={faPen} className="icon" />
          </button>
          <button
            className="btn-menu"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
