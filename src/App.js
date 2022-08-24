import React from 'react';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD TodoList with Redux Toolkit</h1>
      <TodoList />
    </div>
  );
}

export default App;
