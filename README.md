# Task Management App

This is a task management app built using React, Redux, and other modern web technologies. The app allows users to manage tasks with functionality for sorting, filtering by priority, searching, and marking tasks as completed or pending. It also includes features for editing and deleting tasks.


## Deployed Link
https://cosmofeed-frontend-assignment.vercel.app/

## Features

- **Task Creation**: Users can add tasks with a name, description, due date, and priority.
- **Task Filtering**: Tasks can be filtered by their state (Pending, Completed, All) and sorted by due date or priority.
- **Task Sorting**: Tasks can be sorted by due date (ascending) or priority (High, Medium, Low).
- **Global Search**: A search bar allows users to find tasks by name.
- **Task Details**: Clicking on a task displays detailed information like summary, created on date, due date, and priority.
- **Mark as Completed**: Tasks can be marked as completed with a "Done" button, and the state can be toggled with a "Re-open" button.
- **Task Editing and Deleting**: Users can edit or delete tasks.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushvaish2511/Cosmofeed-Frontend-Assignment.git
   ```

2. Navigate to the project folder:
   ```bash
   cd cosmofeed-frontend-assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Redux Toolkit**: Simplifies Redux code and enhances state management.
- **JavaScript (ES6+)**: For modern JavaScript features.
- **HTML/CSS**: For structuring and styling the app.

## App Structure

### `src/`
- **components/**: Contains React components for task rows, task lists, and modals.
- **redux/**: Contains Redux slice files, including state management logic for tasks and filters.
- **App.js**: The main component that renders the entire app.
- **index.js**: The entry point of the app where React and Redux are initialized.

### `redux/taskSlice.js`
This file defines the Redux slice for task management. It handles actions like adding, editing, deleting, toggling task state, and setting filters.

### `components/TaskRow.js`
Displays each task's title, and on click, shows task details like description, due date, and priority. It also allows editing and deleting tasks.

### `components/TaskList.js`
This component handles the task list display and filtering logic. It allows sorting tasks and filters them based on their current state (Pending, Completed, or All).

### `components/GlobalSearch.js`
Contains a search input field that dynamically filters tasks based on the search query.

## Redux Logic

The task management state is managed by Redux, using the following key actions:

- **`addTask`**: Adds a new task.
- **`editTask`**: Edits an existing task.
- **`toggleTaskState`**: Toggles the state of a task (Completed or Pending).
- **`deleteTask`**: Deletes a task from the state.
- **`setFilters`**: Updates the filters, including search and sorting preferences.

## Filters and Sorting

### Filters:
- **Tab Filters**: Filter tasks by `All`, `Pending`, or `Completed`.
- **Search Filter**: Filter tasks by name based on the search query.

### Sorting:
- **Sort by Due Date**: Sort tasks by their due date (ascending).
- **Sort by Priority**: Sort tasks by their priority (High -> Medium -> Low).

## State Management

State is managed using Redux, with the following structure:
```json
{
  "tasks": [
    {
      "id": "1",
      "name": "Task 1",
      "description": "This is the task description",
      "dueDate": "2024-12-10",
      "priority": "High",
      "currentState": false,  // false means Pending, true means Completed
      "createdOn": "2024-12-05"
    }
  ],
  "filters": {
    "search": "",
    "tab": "All",    // Filters tasks based on tab: "All", "Completed", "Pending"
    "sortBy": "dueDate"
  },
  "groupBy": "None"
}
```

## Usage

1. **Adding a Task**: Click the "Add Task" button and fill out the task name, description, due date, and priority. Once added, it will appear in the task list.
2. **Editing a Task**: Click the "Edit" button next to a task to modify its details.
3. **Marking a Task as Completed**: Click the "Done" button to mark the task as completed. The task will move to the "Completed" tab.
4. **Searching Tasks**: Use the search bar to filter tasks by their name.
5. **Sorting Tasks**: Choose between sorting tasks by Due Date or Priority from the dropdown menu.
