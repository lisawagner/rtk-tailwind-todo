import React from 'react';
import { Routes, Route } from 'react-router-dom'
// features
import { TodoList, AddTodo } from './features/todos';
// components
import Layout from './components/Layout';



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
