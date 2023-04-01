import React from "react";

//components
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todoItem) => (
          <ToDoItem
            key={todoItem.id}
            text={todoItem.text}
            setTodos={setTodos}
            todos={todos}
            todoItem={todoItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
