import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

// Developed and Designed by Mohammad Alavi - https://github.com/mohammad00alavi 

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((td) => {
      if (td.id === id) {
        return { ...td, task: updatedTask };
      }
      return td;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((td) => {
      if (td.id === id) {
        return { ...td, completed: !td.completed };
      }
      return td;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((td) => {
      return (
        <Todo
          task={td.task}
          key={td.id}
          id={td.id}
          completed={td.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <TodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
