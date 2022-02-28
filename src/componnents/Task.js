import React from "react";
import { FaTrash } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task)}
    >
      <h3>
        {task.text}
        <FaTrash
          onClick={() => onDelete(task.id)}
          style={{ color: "red", fontSize: "15px", cursor: "pointer" }}
        />
      </h3>
      <span style={task.reminder ? { color: "green" } : { color: "red" }}>
        {task.day}
      </span>
    </div>
  );
};

export default Task;
