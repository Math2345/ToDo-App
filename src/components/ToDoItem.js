import React from "react";

const ToDoItem = ({ text, setTodos, todos, todoItem }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todoItem.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todoItem.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todoItem.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDoItem;
