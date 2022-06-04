import React from 'react'
import ReactDom from 'react-dom'

const Modal = ({ children, open, onCloseModal }) => {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className='fixed bg-black/40 top-0 left-0 right-0 bottom-0 z-50' />
      <div className='flex flex-col z-50 justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-40 w-80 bg-white  '>
        <button onClick={onCloseModal} className='border-2 border-cyan-400 rounded-lg bg-white '>
          close modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
