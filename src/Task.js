import React from 'react'

export default function Task({ task, toggleComplete }) {

  function handleCheckClick() {
    toggleComplete(task.id)
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
    </div>
  )
}
