import React from "react";
import {
  AiFillCloseCircle,
  AiFillEdit,
  AiOutlineFileDone,
} from "react-icons/ai";

const TodoDefList = ({
  array,
  setCompleteTodo,
  deleteTodo,
  setIdForChangebleTodo,
}) => {
  return array.map((el) => (
    <div className={el.complete ? "todo-row complete" : "todo-row"}>
      <span key={el.id}>{el.todo}</span>
      <div className="todo-container">
        <div className="icons-pointer">
          <AiOutlineFileDone onClick={() => setCompleteTodo(el.id)} />
        </div>
        <div className="icons-pointer">
          <AiFillEdit
            onClick={() => {
              setIdForChangebleTodo(el.id);
            }}
          />
        </div>
        <div className="icons-pointer">
          <AiFillCloseCircle onClick={() => deleteTodo(el.id)} />
        </div>
      </div>
    </div>
  ));
};

export default TodoDefList;
