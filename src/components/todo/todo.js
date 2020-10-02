import React, { useEffect, useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState(undefined);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(json => setTodo(json));
  }, []);

  return todo 
    ? <div id="todo">{todo.id}: {todo.title}{todo.completed ? " [completed]" : null}</div>
    : <div id="todo">Loading...</div>;
}