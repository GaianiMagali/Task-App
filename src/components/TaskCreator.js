import React, { useState } from 'react'

export const TaskCreator = ({callback}) => {
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = (e) => {
        setNewTaskName(e.target.value);
    }

    const createNewTask = () => {
        callback(newTaskName);  
        setNewTaskName('');
    }

    return (
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />

            <button className="btn btn-primary" onClick={createNewTask}>
                Add
            </button>
        </div>
    )
}
