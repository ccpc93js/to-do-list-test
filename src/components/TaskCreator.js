import React, { useState } from 'react'

const TaskCreator = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const updateNewTaskValue = (e) => setNewTaskTitle(e.target.value)

    const [error, setError] = useState(false)

    const createNewTask = () => {
        if (newTaskTitle.trim() === '') {
            setError(true)
        } else {
            setError(false)
        }
        props.callBack(newTaskTitle)
        setNewTaskTitle('')
    }

    const validation = () => {
        if (error) {
            return (
                <div class="alert alert-danger text-center my-4">
                    add a title
                </div>
            )
        }
    }


    return (
        <div className="my-4">
            <input
                id="input"
                placeholder="Add a task..."
                type="text"
                className="form-control"
                value={newTaskTitle}
                onChange={updateNewTaskValue}
            />
            {validation()}
            <div className="text-center">

                <button
                    className="btn btn-primary text-center mt-4"
                    onClick={createNewTask}
                >
                    ADD TASK
                </button>
            </div>

        </div>
    )
}

export default TaskCreator;
