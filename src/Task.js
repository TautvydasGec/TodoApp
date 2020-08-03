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
      <label>
        <input 
          type="checkbox" 
          checked={task.complete} 
          onChange={handleCheckClick}
        />
        {task.name}
        {task.date}
        {task.late? <span role="img" aria-label="red dot">&#128308;</span> : <span></span>} {/*if a task is late a red indicator is shown 
        for styling purposes in default an empty span tag is generated*/}
      </label>
      <button onClick={handleCheckDelete}>Delete</button>
    </div>
  )
}
