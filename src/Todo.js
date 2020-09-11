import React, { Component } from "react";

// Developed and Designed by Mohammad Alavi - https://github.com/mohammad00alavi 

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="TodoEdit">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button className='updateBtn btn'><i class="fas fa-check"></i></button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleToggle}
            className={this.props.completed && "completed"}
          >
            {this.props.task}
          </li>
          <button className='removeBtn btn' onClick={this.handleRemove}><i class="far fa-trash-alt"></i></button>
          <button className='editBtn btn' onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
