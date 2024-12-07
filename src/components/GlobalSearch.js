import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/taskSlice";

const GlobalSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setFilters({ search: e.target.value }));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearchChange}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "20px",
  },
};

export default GlobalSearch;
