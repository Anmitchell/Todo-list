import styles from '../../style.module.css'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line react/prop-types
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoList([...todoList, { name: todo, id: uuidv4() }])
    setTodo('')
    console.log(todoList)
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.todoInput}
        type='text'
        placeholder='Add todo item'
        onChange={handleChange}
        value={todo}
      ></input>
      <button className={styles.todoButton} type='submit'>
        Add
      </button>
    </form>
  )
}

export default Form
