import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid/dist/v4';

function App() {
  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef()

  function handleAdd(e) {
    const name = taskNameRef.current.value
    if (name ==="") return
    setTasks(prevTasks => {
      return [{ id: uuid(), name: name, complete: false},...prevTasks ]
    })
    taskNameRef.current.value = null
  }

  return ( 
    <div className = "App" >
      <input ref={taskNameRef} type="text" />
      <button onClick={handleAdd}>Add</button>
      <TodoList tasks={tasks}/>
    </div>
  );
}

export default App;