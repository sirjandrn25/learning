import React from 'react'

const UIContext = React.createContext()

export const UIProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const toggleCartOpen = () => setIsCartOpen((prevState) => !prevState)

  return <UIContext.Provider value={{ isCartOpen, toggleCartOpen }}>{children}</UIContext.Provider>
}

export const useUIContext = () => React.useContext(UIContext)

export default UIContext
