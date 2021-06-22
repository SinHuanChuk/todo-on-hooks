import React from "react";
import TodoChangeForm from "./TodoChangeForm";
import TodoDefList from "./TodoDefList";

const TodoList = ({
  array,
  deleteTodo,
  setCompleteTodo,
  setNewValue,
  setIdForChangebleTodo,
  changebleId,
}) => {
  return (
    <div>
      {changebleId !== "" ? (
        <TodoChangeForm
          array={array}
          changebleId={changebleId}
          setIdForChangebleTodo={setIdForChangebleTodo}
          setNewValue={setNewValue}
        />
      ) : (
        <TodoDefList
          array={array}
          setCompleteTodo={setCompleteTodo}
          deleteTodo={deleteTodo}
          setIdForChangebleTodo={setIdForChangebleTodo}
        />
      )}
    </div>
  );
};
export default TodoList;
// хаххахахахахахххахахахах код просто дерьмо которое я пишу в 5:23 но я сделал что хотел а именно то чтобы отображался 1 элемент для редактирования а не все хахаахахаха сука после таких моментов когда я понимаю что хоть и окольными путями но я нахожу решение я хочу этим заниматься))) 5:29 я рефакторнул хуйню с булианами короче эта была параша с нулевой завтра надо сделать ещё более приятный код для глаз мб посмотреть видео по построению структуры компонентов на хуках???? доделаю стили и пойду учить react native.....
