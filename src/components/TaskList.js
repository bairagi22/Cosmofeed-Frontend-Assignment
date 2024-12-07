import React from "react";
import { useSelector } from "react-redux";
import TaskRow from "./TaskRow";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux store

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => <TaskRow key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
