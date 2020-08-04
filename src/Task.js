import React from 'react'


export default function Task({ task, toggleComplete, handleDelete }) {

  function handleCheckClick() {
    toggleComplete(task.id)
  }

  function handleCheckDelete(){
    handleDelete(task.id)
  }

  return (
    <div>
      <label className= {task.complete?"task-container done":"task-container"} >
        <input 
          type="checkbox" 
          checked={task.complete} 
          onChange={handleCheckClick}
        />
        <div className="task-name">{task.name}</div>
        <div>{task.date}</div>
        {task.late? <span role="img" aria-label="red dot">&#128308;</span> : <div></div>} {/*if a task is late a red indicator is shown 
        for styling purposes in default an empty span tag is generated*/}
      <button className="btn delete-btn" onClick={handleCheckDelete}>Delete</button>
      </label>
    </div>
  )
}
