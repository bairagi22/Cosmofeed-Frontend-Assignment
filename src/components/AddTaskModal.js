import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current date in a readable format
    const createdOn = new Date().toLocaleDateString();

    // Create the new task object
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
      priority: taskPriority,
      createdOn, // Automatically set the created date
      currentState: false, // Default state for new tasks
    };

    // Dispatch the action to add the task
    dispatch(addTask(newTask));

    // Close the modal
    onClose();
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.modal}>
        <h2 style={styles.modalHeader}>Add Task</h2>
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

export default AddTaskModal;
