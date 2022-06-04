import React from 'react'

const Button = (props) => {
  const base_class = 'border-lg px-6 py-2 shadow text-white rounded-2xl font-medium text-[16px] '
  return (
    <button onClick={props.onClick} className={base_class + props.className}>
      {props.children}
    </button>
  )
}

export default Button
