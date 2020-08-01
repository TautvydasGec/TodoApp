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
        {task.name} {task.date}
      </label>
      <button onClick={handleCheckDelete}>Delete</button>
    </div>
  )
}
