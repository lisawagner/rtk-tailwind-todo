import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editTodo } from "./todoSlice"
// components
import { Button, TextField, FormContainer } from "../../components"
import TestComponent from "../../components/TestComponent"

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

  console.log("Existing", existingTodo);
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
    <FormContainer title="Edit Todo">
      <TestComponent currentTodo={existingTodo[0]}/>
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
    </FormContainer>
  )
}
export default EditTodo