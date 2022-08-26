import Button from "./Button"

const TestComponent = ({ currentTodo }) => {

  const handleClick = () => {
    console.log(currentTodo);
  }
  
  return (
    <div>
      <Button onClick={handleClick}>TEST</Button>
    </div>
  )
}
export default TestComponent