import { useState } from "react"
import { Button, TextField } from "../components"

// In Process, still working on the default form logic

const DefaultForm = ({
  inputItems = [],
  headerText = "",
  buttonText = "Create",
  onClick = () => {}
}) => {
  const [inputValues, setInputValues] = useState({})

  const handleClick = () => {
    onClick(inputValues)
  }

  const onChange = (itemId) => {
    return (e) => {
      setInputValues({ ...inputValues, [itemId]: e.target.value})
    }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h2>{headerText}</h2>
      <div>
        {inputItems.map((item) => (
          <TextField
            label={item.label}
            key={item.order}
            value={inputValues[item.order] || ""}
            onChange={onChange(item.order)}
            // placeholder={item.label}
            inputProps={{ type: item.type, placeholder: item.placeholder}}
          />
        ))}
        <Button onClick={handleClick}>{buttonText}</Button>
      </div>
    </div>
  )
}
export default DefaultForm