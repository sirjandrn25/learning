import React from 'react'
import Card from './UI/Card'
import TaskItem from './TaskItem'
import useHttp from './hooks/useHttp'
import { UseTaskContext } from './context/taskContext'

const TaskList = (props) => {
  const { isLoading, error, tasks } = UseTaskContext()

  //   console.log(props.tasks)
  let content = <p className='text-white'>tasks are not available</p>
  if (isLoading) {
    content = <p className='text-cyan-300'>loading.......</p>
  }
  if (error) {
    content = <p className='text-red-500'>{error}</p>
  }

  if (tasks.length) {
    content = (
      <ul className='w-full'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    )
  }
  return <Card className='bg-gray-900 mt-5 '>{content}</Card>
}

export default TaskList
