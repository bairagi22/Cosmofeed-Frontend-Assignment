import React from "react";
import { useSelector } from "react-redux";
import TaskRow from "./TaskRow";

const TaskList = () => {
  const { tasks, filters, groupBy } = useSelector((state) => state.tasks);

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.description?.toLowerCase().includes(filters.search.toLowerCase());
    const matchesTab =
      filters.tab === "All" ||
      (filters.tab === "Completed" && task.currentState) ||
      (filters.tab === "Pending" && !task.currentState);
    return matchesSearch && matchesTab;
  });

  // Sort tasks by the selected criterion (e.g., `createdAt` or `dueDate`)
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (filters.sortBy === "dueDate") {
      if (!a.dueDate) return 1; // Tasks without dueDate go last
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    // Default sorting by `createdAt`
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // Group tasks (if grouping is enabled)
  const groupedTasks = groupBy !== "None" ? groupTasksBy(sortedTasks, groupBy) : null;

  // Helper to group tasks by a specific property
  function groupTasksBy(tasks, groupBy) {
    const grouped = {};
    tasks.forEach((task) => {
      const key = task[groupBy] || "Uncategorized"; // Use "Uncategorized" if no value for groupBy
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(task);
    });
    return grouped;
  }

  return (
    <div className="task-list">
      {groupBy !== "None" ? (
        // Render tasks grouped by a specific property
        Object.keys(groupedTasks).map((group) => (
          <div key={group} className="task-group">
            <h3>{group}</h3>
            {groupedTasks[group].map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        ))
      ) : (
        // Render tasks in a flat list if no grouping is applied
        sortedTasks.map((task) => <TaskRow key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
