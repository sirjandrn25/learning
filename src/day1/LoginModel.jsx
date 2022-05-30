import React from 'react'

const user = {
  email: 'user@example.com',
  password: 'user123',
}

const LoginModel = (props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [status, setStatus] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        setStatus('success')
        setEmail('')
        setPassword('')
        props.handleToggle()
      } else {
        setStatus('failed')
      }
    }, 2000)
  }

  const renderLoading = () => {
    return <p className='text-green-500 text-[20px] font-bold'>loading ....</p>
  }

  const renderError = () => {
    return <p className='text-red-600 text-[16px] font-bold'>email id or password does not matched !!</p>
  }

  return (
    <div
      className={`bg-black/60 w-screen h-screen absolute flex justify-center items-center transition-all duration-200 ease-linear ${
        props.toggle ? 'visible' : 'invisible'
      } `}
      onClick={props.handleToggle}>
      <div
        className='bg-white border-2 border-white shadow h-auto w-[500px] p-6 rounded-xl'
        onClick={(e) => e.stopPropagation()}>
        <p className='text-center text-2xl font-bold text-sky-400 p-3 border-2 border-teal-300 rounded-lg mb-5'>
          Login Here
        </p>
        <form action='' onSubmit={handleSubmit} method='post'>
          <div className='mb-3'>
            <label htmlFor='id_email' className='text-gray-500 block mb-1'>
              Email Address
            </label>
            <input
              type='email'
              className='w-full border-2 border-gray-600 focus:border-sky-500 rounded-xl h-[40px] px-3 text-gray-700 focus:outline-none'
              placeholder='Enter email address'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='id_password' className='text-gray-500 block mb-1'>
              Password
            </label>
            <input
              type='password'
              className='w-full border-2 border-gray-600 focus:border-sky-500 rounded-xl h-[40px] px-3 text-gray-700 focus:outline-none'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className='flex flex-row items-center'>
            <button
              type='submit'
              className={`${
                status === 'loading' ? 'bg-teal-400' : 'bg-teal-600'
              } px-6 py-2 text-white font-normal rounded-xl mr-5`}
              disabled={status === 'loading'}>
              Login
            </button>

            {status === 'loading' ? renderLoading() : status === 'failed' ? renderError() : ''}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModel
