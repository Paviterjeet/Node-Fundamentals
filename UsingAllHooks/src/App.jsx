import React, { useState, useEffect, useContext } from "react";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function AppContent() {
  const [filter, setFilter] = useState("all");
  const { dispatch } = useContext(TaskContext);

  useEffect(() => {
    const fakeFetch = async () => {
      const initialTasks = [
        { id: 1, text: "Learn hooks", done: false },
        { id: 2, text: "Build app", done: true }
      ];
      await new Promise(r => setTimeout(r, 500));
      dispatch({ type: "SET_TASKS", payload: initialTasks });
    };
    fakeFetch();
  }, [dispatch]);

  return (
    <>
      <h1>Task Manager</h1>
      <TaskInput />
      <div>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Completed</option>
          <option value="todo">Pending</option>
        </select>
      </div>
      <TaskList filter={filter} />
      <TaskStats />
    </>
  );
}
export default function App() {
  return (
    <>
    <TaskProvider>
      <AppContent />
    </TaskProvider>
    </>
  )
}
