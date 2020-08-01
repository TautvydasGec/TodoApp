import React from 'react';
import Task from './Task';

export default function TodoList({ tasks, toggleComplete, handleDelete }) {


    return (
        tasks.map(task =>{
            return (<div><Task key={task.id} toggleComplete={toggleComplete} handleDelete={handleDelete} task={task} /></div>)
        })
    )
}