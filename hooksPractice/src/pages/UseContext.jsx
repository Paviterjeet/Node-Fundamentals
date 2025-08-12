import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext);
  return (
  <>
  <h2>UseContext</h2>
  <h3>Hello, {user.name}</h3>
  </>);
}

export default function UseContext() {
  return (
    <UserContext.Provider value={{ name: "Alice" }}>
      <Profile />
      
    </UserContext.Provider>
  );
}
