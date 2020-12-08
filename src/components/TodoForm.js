import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";
function TodoForm({ addTodo }) {
  const [todos, setTodos] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodos({ ...todos, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.task.trim()) {
      addTodo({ ...todos, id: uuidv4() });
      // rest task input
      setTodos({ ...todos, task: "" });
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="task"
        type="text"
        value={todos.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
