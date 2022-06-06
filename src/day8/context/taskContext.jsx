import React from 'react'
import useHttp from '../hooks/useHttp'

const TaskContext = React.createContext()

const protocol = window.location.protocol
// const api = 'http://localhost:4000/tasks'
const api = `${protocol}//${window.location.hostname}:4000/tasks`

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([])
  const { isLoading, error, sendHttpRequest } = useHttp()

  React.useEffect(() => {
    const addTasks = (items) => {
      console.log(items)
      setTasks(items)
    }

    sendHttpRequest({ url: api }, addTasks)
  }, [])
  const insertTask = React.useCallback((data) => {
    setTasks((prevState) => {
      return [data, ...prevState]
    })
  }, [])
  const addNewTask = async (task) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: task,
    }
    return await sendHttpRequest({ url: api, ...config }, insertTask)
  }

  const editTask = (task) => {
    const updateTasks = (data) => {
      setTasks((prevState) => {
        return prevState.map((task) => (task.id !== data.id ? task : data))
      })
    }
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: task,
    }
    sendHttpRequest({ url: `${api}/${task.id}`, ...config }, updateTasks)
  }

  const deleteTask = (task_id) => {
    const removeTasks = (obj) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== task_id)
      })
    }
    const config = {
      method: 'DELETE',
    }
    sendHttpRequest({ url: `${api}/${task_id}`, ...config }, removeTasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, addNewTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const UseTaskContext = () => React.useContext(TaskContext)

export default TaskContext
