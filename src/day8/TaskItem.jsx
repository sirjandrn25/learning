import React from 'react'
import EditTask from './EditTask'
import Button from './UI/Button'
import { UseTaskContext } from './context/taskContext'
const TaskItem = (props) => {
  const [edit, setEdit] = React.useState(false)
  const { isLoading, error, deleteTask } = UseTaskContext()

  const toggleEdit = () => setEdit(!edit)

  const handleRemoveTask = () => {
    deleteTask(props.task.id)
  }
  let renderContent = (
    <div className='grid grid-cols-10 gap-1 w-full '>
      <p
        onClick={toggleEdit}
        className=' px-3 col-span-9 text-[22px] hover:bg-gray-500 rounded-lg shadow hover:cursor-pointer'>
        {props.task.title}
      </p>
      <Button onClick={handleRemoveTask} className='bg-red-600 hover:bg-red-700 '>
        X
      </Button>
    </div>
  )
  if (edit) {
    renderContent = <EditTask onCloseEdit={toggleEdit} task={props.task} />
  }

  return <li className='text-white w-full my-2'>{renderContent}</li>
}

export default TaskItem
