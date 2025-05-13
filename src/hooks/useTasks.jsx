import { useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const addTask = (text, desc = "", priority = "medium") => {
    if (text.trim()) {
      const newTask = {
        text,
        desc,
        priority,
        id: Date.now(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return {
    toggleTask,
    deleteTask,
    editTask,
    addTask,
    tasks,
    clearCompleted,
  };
}
