import React from 'react'
import Input from './UI/Input'
import Button from './UI/Button'
import { UseTaskContext } from './context/taskContext'

const EditTask = (props) => {
  const [title, setTitle] = React.useState(props.task.title)
  const { isLoading, error, editTask } = UseTaskContext()
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const saveTask = () => {
    const data = { ...props.task, title: title }

    editTask(data)
    setTimeout(() => {
      props.onCloseEdit()
    }, 1000)
  }

  return (
    <div className='w-full grid grid-cols-4 gap-1 items-center'>
      <Input type='text' onChange={handleTitleChange} value={title} />
      <Button onClick={saveTask} className='bg-[#b300b3]'>
        {!isLoading ? 'save' : 'loading....'}
      </Button>
    </div>
  )
}

export default EditTask
