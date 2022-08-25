import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editTodo } from "./todoSlice"
// components
import { Button, TextField } from "../../components"

const EditTodo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos)
  const navigate = useNavigate()
  const existingTodo = todos.filter(todo => todo.id === params.id)
  const { title, details } = existingTodo[0]
  const [values, setValues] = useState({
    title,
    details
  })

  const handleEditTodo = () => {
    setValues({ title: '', details: ''})
    // console.log(values);
    dispatch(editTodo({
      id: params.id,
      title: values.title,
      details: values.details
    }))
    navigate('/')
  }
  
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Todo"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Todo Item Title'}}
      />
      <TextField
        label="Details"
        value={values.details}
        onChange={(e) => setValues({ ...values, details: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Todo item details...'}}
      />
      <Button onClick={handleEditTodo}>Update</Button>
    </div>
  )
}
export default EditTodo