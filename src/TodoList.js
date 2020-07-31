import React from 'react';
import Task from './Task';

export default function TodoList({ tasks, toggleComplete }) {
    return (
        tasks.map(task =>{
            return <Task key={task.id} toggleComplete={toggleComplete} task={task} />
        })
    )
}