import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskState } from "../redux/taskSlice";

const TaskRow = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskState(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-row">
      <div>
        <input
          type="checkbox"
          checked={task.currentState}
          onChange={handleToggle}
        />
        <span>{task.title}</span>
        <span className="due-date">Due: {task.dueDate || "No Due Date"}</span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskRow;
