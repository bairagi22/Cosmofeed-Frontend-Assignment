import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskState, deleteTask } from "../redux/taskSlice";
import EditTaskModal from "./EditTaskModal";

const TaskRow = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleState = () => {
    dispatch(toggleTaskState(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setIsEditing(false);
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div style={styles.taskRow}>
      {/* Title Row */}
      <div style={styles.titleRow} onClick={toggleDetails}>
        <span style={styles.taskTitle}>{task.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering details toggle
            handleToggleState();
          }}
          style={
            task.currentState ? styles.reopenButton : styles.doneButton
          }
        >
          {task.currentState ? "Re-open" : "Done"}
        </button>
      </div>

      {/* Details Section */}
      {showDetails && (
        <div style={styles.details}>
          <p>
            <strong>Summary:</strong> {task.description}
          </p>
          <p>
            <strong>Created On:</strong> {task.createdOn}
          </p>
          <p>
            <strong>Due Date:</strong> {task.dueDate}
          </p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
          <div style={styles.actions}>
            <button onClick={handleEdit} style={styles.editButton}>
              Edit
            </button>
            <button onClick={handleDelete} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        </div>
      )}

      {isEditing && (
        <EditTaskModal task={task} onClose={handleCloseEditModal} />
      )}
    </div>
  );
};

const styles = {
  taskRow: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  doneButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  reopenButton: {
    backgroundColor: "#ffc107",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  details: {
    marginTop: "10px",
    paddingLeft: "25px",
    color: "#555",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  editButton: {
    backgroundColor: "#ffc107",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
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
