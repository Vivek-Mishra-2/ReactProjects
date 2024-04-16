import { useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    console.log(input);
    if(input === ''){
      alert('Please Enter a Todo');
      return;
    }
    else{
      setTodos([...todos, input]);
      setInput('');
    }
  }

  const handleDelete = () => {
    console.log('Delete');
    if(input === ''){
      console.log('Please Enter a Todo');
    }
    else{
      setTodos(todos.filter(todo => todo.id !== id));
      setInput('');
    }
  }

  return (
    <>
      <div>
          <h1>Todo App</h1>
          <input type="text" 
          placeholder="Add Todo" 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          />
          <ul>
            {todos.map((todo) => (
              <>
                <li key={todo}>{todo}</li>
                <button onClick={handleDelete}>Delete</button>
              </>
            ))}
          </ul>
          <button onClick={handleAdd}>Add Todo</button>
      </div>
    </>
  )
}

export default App
