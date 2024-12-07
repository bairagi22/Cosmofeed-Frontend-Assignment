import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from "./TaskRow";
import { setFilters } from "../redux/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filters } = useSelector((state) => state.tasks);

  // Sorting function, wrapped with useCallback to ensure it doesn't change on every render
  const sortTasks = useCallback(() => {
    let sortedTasks = [...tasks];

    // Sort by dueDate or priority based on the current filter
    if (filters.sortBy === "dueDate") {
      // Sorting by dueDate (ascending order)
      sortedTasks = sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (filters.sortBy === "priority") {
      // Sorting by priority (ascending order - 1 = High, 2 = Medium, 3 = Low)
      const priorityOrder = { Low: 3, Medium: 2, High: 1 }; // High has the highest priority
      sortedTasks = sortedTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    return sortedTasks;
  }, [tasks, filters.sortBy]); // Re-run when tasks or sortBy filter changes

  const handleSortChange = (e) => {
    dispatch(setFilters({ sortBy: e.target.value }));
  };

  const sortedTasks = sortTasks(); // Get sorted tasks based on the selected filter

  // Filter tasks based on completion state for the selected tab
  const filteredTasks = sortedTasks.filter((task) => {
    if (filters.tab === "Completed") {
      return task.currentState === true;
    } else if (filters.tab === "Pending") {
      return task.currentState === false;
    } else {
      return true; // Show all tasks for the "All" tab
    }
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
