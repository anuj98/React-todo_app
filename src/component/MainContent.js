import React from "react";
import TodoItem from "./TodoItem";
import todosData from "../todosData";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("changed", id);
    //reverts back to default, needs checking
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(id, todo.completed);
        }
        return todo;
      });

      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoComponents = this.state.todos.map((item) => (
      <TodoItem key={item.id} value={item} handleChange={this.handleChange} />
    ));

    return (
      <main>
        <div className="todo-list">
          <p>Today's work items:</p>
          {todoComponents}
        </div>
      </main>
    );
  }
}

export default MainContent;
