import React from "react";
import { useDispatch } from "react-redux";
import { setGroupBy } from "../redux/taskSlice";

const GroupByDropdown = () => {
  const dispatch = useDispatch();

  const handleGroupByChange = (e) => {
    dispatch(setGroupBy(e.target.value));
  };

  return (
    <select onChange={handleGroupByChange} style={styles.dropdown}>
      <option value="None">Group by...</option>
      <option value="Priority">Priority</option>
      <option value="DueDate">Due Date</option>
    </select>
  );
};

const styles = {
  dropdown: {
    width: "100%",
    padding: "8px",
    marginBottom: "20px",
  },
};

export default GroupByDropdown;
