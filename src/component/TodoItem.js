import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text + " " + props.item.counter}</p>
    </div>
  );
}

export default TodoItem;
