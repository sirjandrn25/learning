import React from 'react'

const UserContext = React.createContext()

export const UserAuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = React.useState(false)

  const handleLogout = () => setIsLogin(false)
  const handleLogin = () => setIsLogin(true)

  return <UserContext.Provider value={{ isLogin, handleLogin, handleLogout }}>{children}</UserContext.Provider>
}

export const useUserAuthContext = () => React.useContext(UserContext)

export default UserContext
