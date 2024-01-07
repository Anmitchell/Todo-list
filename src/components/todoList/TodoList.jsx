import Todo from '../todo/Todo'

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((item) => (
        <Todo
          key={item.id}
          todoItem={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  )
}

export default TodoList
