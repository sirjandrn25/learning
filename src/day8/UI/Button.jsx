import React from 'react'

const Button = (props) => {
  const base_class = 'border-lg px-5 py-2 shadow shadow-gray-500  text-white rounded-3xl font-medium   '
  return (
    <button onClick={props.onClick} className={base_class + props.className}>
      {props.children}
    </button>
  )
}

export default Button
