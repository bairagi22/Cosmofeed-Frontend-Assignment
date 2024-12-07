import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/taskSlice";

const Tabs = () => {
  const dispatch = useDispatch();

  const handleTabChange = (tab) => {
    dispatch(setFilters({ tab }));
  };

  return (
    <div style={styles.tabs}>
      <button onClick={() => handleTabChange("All")}>All</button>
      <button onClick={() => handleTabChange("Completed")}>Completed</button>
      <button onClick={() => handleTabChange("Pending")}>Pending</button>
    </div>
  );
};

const styles = {
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
};

export default Tabs;
