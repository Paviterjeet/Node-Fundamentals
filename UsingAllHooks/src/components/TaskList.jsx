import React, { useContext, useMemo, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ filter }) {
  const { tasks, dispatch } = useContext(TaskContext);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, [dispatch]);

  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");
    if (filter === "done") return tasks.filter(t => t.done);
    if (filter === "todo") return tasks.filter(t => !t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
