import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'Task 1', details: 'This is the first task.'},
  { id: '2', title: 'Task 2', details: 'Establish a daily team meeting to allow problems and issues to be tabled without delay.'},
  { id: '3', title: 'Task 3', details: 'Update the safety calendar to track daily performance'},
  { id: '4', title: 'Task 4', details: 'Implement monthly production plan'},
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Shows the action type and payload
      console.log(action);
      state.push(action.payload)
    },
    editTodo: (state, action) => {
      // grab the id, title & details from the action payload 
      const { id, title, details } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if(existingTodo) {
        existingTodo.title = title
        existingTodo.details = details
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if(existingTodo) {
        return state.filter(todo => todo.id !== id)
      }
    }
  }
})

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer