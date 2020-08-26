import React from 'react'

export const VisibilityControl = ({ description, isChecked, callback }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={isChecked}
                onChange={e => callback(e.target.checked)}
            />

            <label htmlFor="form-check-label">
                show {description}
            </label>
        </div>
    )
}
