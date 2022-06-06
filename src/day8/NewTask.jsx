import React from 'react'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'

import { UseTaskContext } from './context/taskContext'
const NewTask = () => {
  const [title, setTitle] = React.useState('')
  const { isLoading, error, addNewTask } = UseTaskContext()

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleAddNewTask = () => {
    const task = {
      id: Math.floor(Math.random() * 1000),
      title: title.trim(),
    }

    const response = addNewTask(task)
  }

  return (
    <Card className='bg-gray-900 grid grid-cols-4 gap-1 items-center  '>
      <Input
        type='text'
        value={title}
        className='col-span-3'
        onChange={handleChangeTitle}
        placeholder='create new task'
      />
      <Button onClick={handleAddNewTask} className='ml-5 bg-cyan-500'>
        {isLoading && 'loading....'}
        {!isLoading && 'Add New'}
      </Button>
    </Card>
  )
}

export default NewTask
