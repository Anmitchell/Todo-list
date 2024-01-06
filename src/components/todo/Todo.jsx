import ListItem from '../listItem/ListItem'
import { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  // When input is added by user in field, the value is saved as todo
  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  // when clicking the add button the todo is added to the todoList
  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoList([...todoList, todo])
    setTodo('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={todo}></input>
        <button type='submit'>Add</button>
      </form>
      {todoList.map((item, index) => (
        <ListItem key={index} name={item}>
          List Item
        </ListItem>
      ))}
    </div>
  )
}

export default Todo
