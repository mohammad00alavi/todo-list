import React, { Component } from "react";
import uuid from "../node_modules/uuid/dist/v4";

// Developed and Designed by Mohammad Alavi - https://github.com/mohammad00alavi 

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }
  render() {
    return (
      <form className='TodoForm' onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          required
        />
        <button className='addTaskBtn'>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
