import React, { createContext, useReducer } from "react";

export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE_TASK":
      return state.map(t => t.id === action.payload ? { ...t, done: !t.done } : t);
    case "SET_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
