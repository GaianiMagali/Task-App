import React from 'react'

export const TaskRow = ({ name, done, toggleTask }) => {

    return (
        <tr key={name}>
            <td>
                {name}
            </td>

            <td>
                <input
                    type="checkbox" checked={done} onChange={() => toggleTask(name) }
                />
            </td>
        </tr>
    )
}
