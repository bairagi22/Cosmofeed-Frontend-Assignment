import React from "react";
import GlobalSearch from "../components/GlobalSearch";
import Tabs from "../components/Tabs";
import GroupByDropdown from "../components/GroupByDropdown";
import AddTaskModal from "../components/AddTaskModal";
import TaskList from "../components/TaskList";

const TodoApp = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task Manager</h1>
      <GlobalSearch />
      <Tabs />
      <GroupByDropdown />
      <TaskList />
      <AddTaskModal />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
};

export default TodoApp;
