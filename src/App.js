import React from 'react';
import TodoList from './features/todos/TodoList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-12 md:px-5">
        <TodoList />
      </div>
    </>

  );
}

export default App;
