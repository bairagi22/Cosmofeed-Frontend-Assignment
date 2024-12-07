import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/taskSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.tasks.filters);

  const handleTabChange = (tab) => {
    dispatch(setFilters({ tab }));
  };

  return (
    <div style={styles.tabs}>
      <button
        style={tab === "All" ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange("All")}
      >
        All
      </button>
      <button
        style={tab === "Pending" ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange("Pending")}
      >
        Pending
      </button>
      <button
        style={tab === "Completed" ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange("Completed")}
      >
        Completed
      </button>
    </div>
  );
};

const styles = {
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    backgroundColor: "#f0f0f0",
    padding: "10px 20px",
    margin: "0 5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  activeTab: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    margin: "0 5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Tabs;
