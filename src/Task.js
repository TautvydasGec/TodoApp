import React from 'react'

export default function Task({ task }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={task.complete} />
        {task.name} {task.date}
      </label>
    </div>
  )
}
