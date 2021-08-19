import React from 'react'

const VisibilityControl = (props) => {
    return (
        <div className="">
            <input 
                type="checkbox" 
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callBack(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>
        </div>
    )
}

export default VisibilityControl;
