import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/taskSlice";

const EditTaskModal = ({ task, onClose }) => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskDueDate, setTaskDueDate] = useState(task.dueDate);
  const [taskPriority, setTaskPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
      priority: taskPriority,
    };

    dispatch(editTask({ id: task.id, updatedTask }));
    onClose();
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.modal}>
        <h2 style={styles.modalHeader}>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="taskName">Task Name:</label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="taskDescription">Task Description:</label>
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="taskDueDate">Due Date:</label>
            <input
              type="date"
              id="taskDueDate"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Priority:</label>
            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div style={styles.modalFooter}>
            <button type="submit" style={styles.saveButton}>
              Save Task
            </button>
            <button type="button" onClick={onClose} style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modalContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  modalHeader: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "15px",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default EditTaskModal;
