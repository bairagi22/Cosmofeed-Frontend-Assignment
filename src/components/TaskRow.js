import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskState, deleteTask } from "../redux/taskSlice"; // Updated import

const TaskRow = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskState(task.id)); // Dispatch the toggle task state action
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Dispatch the delete task action
  };

  return (
    <div style={styles.taskRow}>
      <div>
        <input
          type="checkbox"
          checked={task.currentState}
          onChange={handleToggle}
        />
        <span style={styles.taskName}>{task.name}</span>
      </div>
      <div style={styles.taskDetails}>
        <span>{task.description}</span>
        <span>{task.dueDate}</span>
        <span>{task.priority}</span>
        <button onClick={handleDelete} style={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  taskRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  taskName: {
    fontWeight: "bold",
    marginLeft: "10px",
  },
  taskDetails: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default TaskRow;
