import { useState } from "react";
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, { value: value, disabled: true }])
    setValue("")
  }

  const deleteTodos = (i) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1)
    setTodos(oldTodos)
  }

  const editTodos = (i, v) => {
    todos.splice(i, 1, { ...v, disabled: false })
    setTodos([...todos])
  }

  const updateTodos = (v) => {
    v.disabled = true;
    setTodos([...todos])
  }

  const deleteAll = () => {
    setTodos([])
  }
  return (
    <div>
      <h2>My Todo List App</h2>
      <input placeholder="Enter new task" className="main-input" type="text " value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={deleteAll}>Delete All</button>

      <br />

      <ul>
        {todos.map((v, i) => <li key={i}>
          <input type="text" disabled={v.disabled} defaultValue={v.value}
            onChange={(e) => e.target.value} />

          <button onClick={deleteTodos}>Delete</button>
          {v.disabled ?
            <button onClick={editTodos}>Edit</button>
            :
            <button onClick={() => updateTodos(v)}>Update</button>
          }
        </li>
        )}
      </ul>
    </div>
  )
}
export default App;