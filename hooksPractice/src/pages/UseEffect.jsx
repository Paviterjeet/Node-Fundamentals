import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(setData);
  }, []); // empty array → run once

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
