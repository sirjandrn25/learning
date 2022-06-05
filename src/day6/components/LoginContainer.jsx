import React from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useUIContext } from '../context/uiContext'
import { useUserAuthContext } from '../context/userContext'

const LoginContainer = () => {
  const { openModal, closeModalHandler } = useUIContext()
  const { handleLogin } = useUserAuthContext()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmailChange = (val) => {
    setEmail(val.trim())
  }
  const handlePasswordChange = (val) => {
    setPassword(val.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')

    handleLogin()
    closeModalHandler('')
  }
  return (
    <Modal open={openModal === 'login' ? true : false} onClose={closeModalHandler}>
      <form action='' method='post' onSubmit={handleSubmit} className='w-[400px] p-5'>
        <Input
          value={email}
          onChange={handleEmailChange}
          className='my-5'
          type='email'
          label='Email Address'
          placeholder='enter your email address'
          required={true}
        />
        <Input
          value={password}
          onChange={handlePasswordChange}
          className='my-5'
          type='password'
          label='password'
          placeholder='enter your password'
          required={true}
        />

        <Button className='bg-teal-400 w-[120px] hover:bg-teal-500 '>Login</Button>
      </form>
    </Modal>
  )
}

export default LoginContainer
