import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTask from './AddTask'
import Navbar from './Navbar'

class App extends Component {
  state = {
    todotask: [
      { id: 1, content: 'Learn React' },
      { id: 2, content: 'Learn Angular' },
      { id: 3, content: 'Get your Frontend developer Job' }
    ]
  }

  deleteTask = (id) => {
    const newtodotask = this.state.todotask.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todotask: newtodotask
    })
  }

  addTask = (newtodo) => {
    newtodo.id = Math.random();
    let newAddedTodo = [...this.state.todotask, newtodo]
    this.setState({
      todotask: newAddedTodo
    })

  }
  render() {
    return (
      <div className="myApp">
        <Navbar />
        <div className="container">
          <h1 className="center">TODO Task</h1>
          <TodoList mytodo={this.state.todotask} deleteTask={this.deleteTask} />
          <AddTask addTask={this.addTask} />
        </div>
      </div>
    )
  }
}

export default App;
