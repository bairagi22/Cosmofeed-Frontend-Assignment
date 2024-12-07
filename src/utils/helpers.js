export const sortTasks = (tasks, sortBy) => {
    return tasks.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  };
  
  export const groupTasks = (tasks, groupBy) => {
    if (!groupBy) return [{ groupName: 'All Tasks', tasks }];
    const grouped = tasks.reduce((acc, task) => {
      const group = task[groupBy] || 'None';
      acc[group] = acc[group] || [];
      acc[group].push(task);
      return acc;
    }, {});
  
    return Object.keys(grouped).map((groupName) => ({
      groupName,
      tasks: grouped[groupName],
    }));
  };
  