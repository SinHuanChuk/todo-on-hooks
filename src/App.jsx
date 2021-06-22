import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [array, setArray] = useState([]);
  const [changebleId, setChangebleId] = useState('')
  

  const SetNewTodo = (value) => {
    if(value === '') {
      return
    }

    if(array.some(el => el.todo === value)) {
      return
    } else {
      setArray([...array, { id: uuidv4(), todo: value, complete: false }]);
    }
  };

  const deleteTodo = (id) => {
    setArray((prevArray) => prevArray.filter((el) => el.id !== id));
  };

  const setNewValue = (id, value) => {
    setArray(
      array.map((el) => {
        if (el.id === id) {
          el.todo = value;
        }

        return el;
      })
    );
  };

  const setCompleteTodo = (id) => {
    setArray(
      array.map((el) => {
        if (el.id === id) {
          el.complete = !el.complete;
        }

        return el;
      })
    );
  };

  const setIdForChangebleTodo = (id) => {
    setChangebleId(id)
  }

  return (
    <div className = 'todo-app'>
      <h1>What`s the plan for Today</h1>
      <TodoForm SetNewTodo={SetNewTodo} />
      <TodoList
        array={array}
        deleteTodo={deleteTodo}
        setCompleteTodo={setCompleteTodo}
        setNewValue = {setNewValue}
        setIdForChangebleTodo = {setIdForChangebleTodo}
        changebleId = {changebleId}
      />
    </div>
  );
};

export default App;
