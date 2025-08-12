import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskStats() {
  const { tasks } = useContext(TaskContext);
  const total = tasks.length;
  const doneCount = tasks.filter(t => t.done).length;

  return (
    <p>{doneCount} / {total} tasks completed</p>
  );
}
