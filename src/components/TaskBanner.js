import React from 'react'

export const TaskBanner = ({ userName, taskItems }) => {
    
    const taskNotDone = () =>{
        return taskItems.filter(t => !t.done).length 
    }

    return (
        <h4 className="bg-primary text-white text-center p-4">
            {userName} Task's app ({taskNotDone()} task to do)
        </h4>
    )
}
