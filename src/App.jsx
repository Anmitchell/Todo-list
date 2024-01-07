import './App.css'
import Header from './components/header/Header'
import Form from './components/form/Form'
import TodoList from './components/todoList/TodoList'
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

export default App
