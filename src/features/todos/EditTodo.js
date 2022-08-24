import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from "../../components"

const EditTodo = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: '',
    details: ''
  })

  const handleEditTodo = () => {
    setValues({ title: '', details: ''})
    console.log(values);
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