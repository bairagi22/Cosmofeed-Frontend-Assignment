import React from "react";

const TaskRow = ({ task }) => {
  return (
    <li style={styles.row}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
    </li>
  );
};

const styles = {
  row: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
};

export default TaskRow;
