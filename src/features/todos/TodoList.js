import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo } from './todoSlice'
import { EditIcon, DeleteIcon } from '../../assets/icons'
// components
import { Button } from "../../components"

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos)
  // console.log(todos);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }))
  }

  const renderCard = () => todos.map(todo => (
    <div
      className="bg-gray-200 p-5 flex flex-col justify-between shadow-xl ring-1 ring-gray-900/5"
      key={todo.id}
    >
      <div>
        <h3 className="font-bold text-lg text-gray-700">{todo.title}</h3>
        <span className="font-normal text-gray-600">{todo.details}</span>
      </div>

      <div className="flex gap-4 justify-end mt-1">
        <Link to={`edit-todo/${todo.id}`} className="flex">
          <button  className="w-6 h-6">
            <EditIcon />
          </button>       
        </Link>
        <button
          className="w-6 h-6"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <DeleteIcon />
        </button>
      </div>

    </div>
  ))

  return (
    <>
      <div className="flex flex-wrap flex-col xxs:flex-row justify-between text-center items-center mx-auto max-w-screen-xl mb-4">
        <h1 className='font-bold text-2xl text-gray-700 '>CRUD TodoList with Redux Toolkit</h1>
        <Link to='/add-todo'>
          <Button>Add Todo</Button>
        </Link>
        
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {todos.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Todos</p>}
      </div>
    </>
  )
}
export default TodoList