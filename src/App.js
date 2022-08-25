import { Routes, Route } from 'react-router-dom'
// features
import { TodoList, AddTodo, EditTodo } from './features/todos'
// components
import { Layout, NotFound } from './components'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* TodoList component acting as homepage here */}
        <Route index element={<TodoList />} />
        <Route path="add-todo" element={<AddTodo />}/>
        <Route path="edit-todo/:id" element={<EditTodo />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App
