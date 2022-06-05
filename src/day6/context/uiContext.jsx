import React from 'react'

const UIContext = React.createContext()

export const UIProvider = ({ children }) => {
  const [openModal, setOpenModal] = React.useState('')

  const openModalHandler = (open) => setOpenModal(open)

  const closeModalHandler = () => setOpenModal('')

  return <UIContext.Provider value={{ openModalHandler, closeModalHandler, openModal }}>{children}</UIContext.Provider>
}

export const useUIContext = () => React.useContext(UIContext)

export default UIContext
