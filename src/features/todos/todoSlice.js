import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'Task 1', details: 'This is the first task to do.'},
  { id: '2', title: 'Task 2', details: 'Listen to music'},
  { id: '3', title: 'Task 3', details: 'Remember to eat.'},
  { id: '4', title: 'Task 4', details: 'You need a shower'},
]

const todoSlice = createSlice({
  name: 'todos',
  initialState
})

export default todoSlice.reducer