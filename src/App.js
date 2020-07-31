import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid/dist/v4';

function App() {
  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef()
  const dueDateRef = useRef()


  function handleAdd(e) {
    const name = taskNameRef.current.value
    const date = dueDateRef.current.value
    if (name ==="") return
    setTasks(prevTasks => {
      return [{ id: uuid(), name: name, complete: false, date: date===""? "NO DATE":date},...prevTasks]
    })
    dueDateRef.current.value = null
    taskNameRef.current.value = null
  }

  function toggleComplete(id) {
		const newTasks = [...tasks];
		const task = newTasks.find((task) => task.id === id);
		task.complete = !task.complete;
		setTasks(newTasks);
	}

  return ( 
    <div className = "App">
      <input ref={taskNameRef} type="text" />
      <input type="date" ref ={dueDateRef} />
      <button onClick={handleAdd}>Add</button>
      <TodoList tasks={tasks} toggleComplete = {toggleComplete}/>
    </div>
  );
}

export default App;