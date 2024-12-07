import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from "./TaskRow";
import { setFilters } from "../redux/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filters } = useSelector((state) => state.tasks);

  // Sorting function
  const sortTasks = useCallback(() => {
    let sortedTasks = [...tasks];

    if (filters.sortBy === "dueDate") {
      // Sort by due date (ascending)
      sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (filters.sortBy === "priority") {
      // Sort by priority (High -> Medium -> Low)
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      sortedTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    return sortedTasks;
  }, [tasks, filters.sortBy]);

  // Handle sort filter change
  const handleSortChange = (e) => {
    dispatch(setFilters({ sortBy: e.target.value }));
  };

  // Apply sorting and filter tasks for the selected tab
  const sortedTasks = sortTasks();
  const filteredTasks = sortedTasks.filter((task) => {
    if (filters.tab === "Completed") {
      return task.currentState === true;
    } else if (filters.tab === "Pending") {
      return task.currentState === false;
    }
    return true; // Show all tasks in "All" tab
  });

  return (
    <div>
      <div style={styles.sortControls}>
        <label htmlFor="sortSelect">Sort By:</label>
        <select id="sortSelect" value={filters.sortBy} onChange={handleSortChange}>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <h2>Task List</h2>
      {filteredTasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        filteredTasks.map((task) => <TaskRow key={task.id} task={task} />)
      )}
    </div>
  );
};

const styles = {
  sortControls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
};

export default TaskList;
