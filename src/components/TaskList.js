import React from "react";
import { useSelector } from "react-redux";
import TaskRow from "./TaskRow";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filters = useSelector((state) => state.tasks.filters);
  const groupBy = useSelector((state) => state.tasks.groupBy);

  // Filter tasks based on search and tab
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesTab =
      filters.tab === "All" ||
      (filters.tab === "Completed" && task.currentState) ||
      (filters.tab === "Pending" && !task.currentState);

    return matchesSearch && matchesTab;
  });

  // Group tasks based on selected criteria
  const groupedTasks = groupBy === "None"
    ? { None: filteredTasks }
    : filteredTasks.reduce((groups, task) => {
        const groupKey = groupBy === "Priority" ? task.priority : task.dueDate || "No Due Date";
        if (!groups[groupKey]) {
          groups[groupKey] = [];
        }
        groups[groupKey].push(task);
        return groups;
      }, {});

  return (
    <div>
      {Object.keys(groupedTasks).map((group) => (
        <div key={group} style={styles.group}>
          {groupBy !== "None" && <h3 style={styles.groupHeader}>{group}</h3>}
          <ul style={styles.list}>
            {groupedTasks[group].map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  group: { marginBottom: "20px" },
  groupHeader: { margin: "10px 0", fontSize: "18px" },
  list: { listStyle: "none", padding: "0" },
};

export default TaskList;
