import React from 'react'

const TaskBanner = (props) => (
    <h4 className=" text-dark text-center p-1">
        Tasks ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)

export default TaskBanner;
