import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.task';

function App() {
  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef()
  const dueDateRef = useRef()

  /*Loading tasks*/
  useEffect(() => {
		const storedTasks = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		storedTasks && setTasks(storedTasks);
  }, []);
  
  /*Saving tasks*/
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

  /*List functions*/
  function handleAdd(e) {
    const name = taskNameRef.current.value
    const date = dueDateRef.current.value
    if (name ==="") return //does not allow empty task
    setTasks(prevTasks => {
      return [{ id: uuid(),
                name: name,
                complete: false,
                date: date===""? "Date not specified" : date,
                late: Date.parse(date)-Date.parse(new Date()) < 0 ? true : false, //date check should also happen every day, or every time the webpage is loaded
                timeAdded: Date.parse(new Date()) //used for "Latest added" sort
              },...prevTasks]
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
  
  function handleDelete(id){
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
  }

  /*sort functions*/
  function sortByName(){
    const newTasks = [...tasks];
    newTasks.sort((a, b) => a.name.localeCompare(b.name));
    setTasks(newTasks);
  }

  function sortByDate(){
    const newTasks = [...tasks];
    newTasks.sort((a, b) => a.date.localeCompare(b.date));
    setTasks(newTasks);
  }

  function sortByTimeAdded(){
    const newTasks = [...tasks];
    newTasks.sort((a, b) => b.timeAdded-a.timeAdded);
    setTasks(newTasks);
  }

  return ( 
    <div className = "App">
      <input ref={taskNameRef} type="text" />
      <input type="date" ref ={dueDateRef} />
      <button onClick={handleAdd}>Add</button>
      <div className = "sort-container">
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByDate}>Sort By Date</button>
        <button onClick={sortByTimeAdded}>Sort By Latest Added</button>
      </div>
      <TodoList tasks={tasks} toggleComplete = {toggleComplete} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;