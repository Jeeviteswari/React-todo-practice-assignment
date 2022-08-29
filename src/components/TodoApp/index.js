import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    technology: 'Learn HTML',
  },
  {
    id: 2,
    technology: 'Learn CSS',
  },
  {
    id: 3,
    technology: 'Learn JS',
  },
]

class TodoApp extends Component {
  state = {userInput: '', todosList: initialTodosList, technology: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const technology = this.state
    const newTechnology = {
      id: uuidv4(),
      technology,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTechnology],
      technology: '',
    }))
  }

  render() {
    const {userInput, todosList, technology} = this.state

    return (
      <>
        <div className="todo-bg-container">
          <h1 className="todo-heading">THINGS TO DO</h1>
          <form onSubmit={this.onSubmitForm} className="mb-5">
            <input
              className="input-text"
              type="text"
              placeholder="Add New"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button type="submit">Add</button>
          </form>
          <ul className="todos-list-container">
            {todosList.map(eachTodo => (
              <TodoItem key={eachTodo.id} todoDetails={eachTodo} />
            ))}
            {technology}
          </ul>
        </div>
      </>
    )
  }
}

export default TodoApp
