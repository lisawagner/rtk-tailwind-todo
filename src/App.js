import React from 'react';
import { Routes, Route } from 'react-router-dom'
import TodoList from './features/todos/TodoList';
import Layout from './components/Layout';
import AddTodo from './features/todos/AddTodo';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* TodoList component acting as homepage here */}
        <Route index element={<TodoList />} />
        <Route path="add-todo" element={<AddTodo />}/>
      </Route>
    </Routes>

  );
}

export default App;
