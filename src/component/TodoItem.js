import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.value.completed} />
      <p>{props.value.text}</p>
    </div>
  );
}

export default TodoItem;
