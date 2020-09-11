import React, { Component } from "react";
import TodoList from "./TodoList";
import './App.scss';

// Developed and Designed by Mohammad Alavi - https://github.com/mohammad00alavi 

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
