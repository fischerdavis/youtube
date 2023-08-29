import { useState } from 'react'
import './App.css'

const todosItems = [
    {
        id: 1,
        complete: false,
        text: 'This is a todo'
    },
    {
        id: 2,
        complete: true,
        text: 'This is another todo'
    }
]

function App() {
  const [todos, setTodos] = useState(todosItems);

  const onClickDelete = (id: number) => {
      // Wrong.
      const newTodos = [...todos];
      const index = newTodos.findIndex((todo) => todo.id === id);
      setTodos(newTodos.splice(index));
  }

  return (
    <>
        {
            todos.map((todo) => (
                <div key={todo.id}>
                    {todo.text}
                    <button onClick={() => onClickDelete(todo.id)}>Delete</button>
                </div>
            ))
        }
    </>
  );
}

export default App
