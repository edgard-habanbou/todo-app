import React from "react";
import "./index.css";
interface TodoFieldProps {
  description: string;
  completed: boolean;
}

function Todo({ description, completed }: TodoFieldProps) {
  return (
    <div className="todo-field">
      <div>{description}</div>
    </div>
  );
}

export default Todo;
