import React from 'react'
import LoginModel from './LoginModel'

const LoginContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div className='h-screen relative w-screen bg-white flex justify-center items-center '>
      <button className='bg-sky-600 px-3 absolute py-1 rounded-lg  text-white font-bold' onClick={handleOpen}>
        click me
      </button>
      <LoginModel toggle={open} handleToggle={handleOpen} />
    </div>
  )
}

export default LoginContainer
