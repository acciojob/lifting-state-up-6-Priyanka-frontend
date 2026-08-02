import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <>
    <h2>Child Component</h2>
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span style={{marginRight : "5px"}}>{todo.text}</span>

          {todo.completed ? (
            <span style={{marginRight : "5px"}}>Completed</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
    </>
  );
}

export default TodoList;