import React from 'react'

const TaskBanner = (props) => (
    <h4 className="bg-dark text-white text-center p-4">
       Tasks ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)

export default TaskBanner;
