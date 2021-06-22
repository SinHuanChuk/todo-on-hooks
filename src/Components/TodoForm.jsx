import React, { useState } from "react";

const TodoForm = ({ SetNewTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          SetNewTodo(todo);
          setTodo("");
        }}
      >
        <input
          className="todo-input"
          type="text"
          maxlength="25"
          onChange={({ target }) => setTodo(target.value)}
          value={todo}
          placeholder={"set you todo"}
        />
        <button className="todo-button" type="submit">
          add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
