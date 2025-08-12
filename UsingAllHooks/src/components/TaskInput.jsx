import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");
  const inputRef = useRef();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
