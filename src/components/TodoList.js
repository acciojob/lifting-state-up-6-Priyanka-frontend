import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <>
    <h2>Child Component</h2>
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>
            {todo.text} {todo.completed && "(Completed)"}
            {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
          </li>

          
        </ul>
      ))}
    </div>
    </>
  );
}

export default TodoList;