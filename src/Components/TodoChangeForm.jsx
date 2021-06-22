import React from "react";
import { AiFillEdit } from "react-icons/ai";

const TodoChangeForm = ({
  array,
  changebleId,
  setNewValue,
  setIdForChangebleTodo,
}) =>
  array.map((el) => {
    if (el.id === changebleId) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIdForChangebleTodo("");
          }}
        >
          <input
            className="todo-input"
            type="text"
            value={el.todo}
            maxlength="25"
            onChange={({ target }) => setNewValue(el.id, target.value)}
          />
          <button className="todo-button" type="submit">
            <AiFillEdit
              onClick={() => {
                setIdForChangebleTodo(el.id);
              }}
            />
          </button>
        </form>
      );
    }
  });

export default TodoChangeForm;
