import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTaskModal = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      currentState: false,
      dueDate: null,
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={styles.textarea}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={styles.dropdown}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" style={styles.button}>
        Add Task
      </button>
    </form>
  );
};

const styles = {
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "8px" },
  textarea: { padding: "8px" },
  dropdown: { padding: "8px" },
  button: { padding: "10px", backgroundColor: "blue", color: "white" },
};

export default AddTaskModal;
