import React from 'react'

import NewTask from './NewTask'

import TaskList from './TaskList'

const TaskContainer = () => {
  const [tasks, setTasks] = React.useState([])

  return (
    <div className='h-screen w-screen bg-gray-400 flex justify-center items-center'>
      <div className='flex flex-col w-[600px] h-auto'>
        <NewTask />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default TaskContainer
