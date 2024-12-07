import React, { useState } from "react";
import GlobalSearch from "../components/GlobalSearch";
import Tabs from "../components/Tabs";
import GroupByDropdown from "../components/GroupByDropdown";
import AddTaskModal from "../components/AddTaskModal";
import TaskList from "../components/TaskList";

const TodoApp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false); // Close the modal
  };

  const handleModalOpen = () => {
    setShowModal(true); // Open the modal
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task Manager</h1>
      <div style={styles.controls}>
        <GlobalSearch />
        <button style={styles.addButton} onClick={handleModalOpen}>
          Add Task
        </button>
      </div>
      <Tabs />
      <GroupByDropdown />
      <TaskList />
      {showModal && <AddTaskModal onClose={handleModalClose} />}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "2rem",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default TodoApp;
