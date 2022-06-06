import React from 'react'

const Input = (props) => {
  const base_class =
    'border-2 focus:border-[3px] w-full px-3 py-[6px] rounded-2xl text-lg col-span-3 text-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-400/50 shadow '
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className={base_class + props.className}
      placeholder={props.placeholder}
    />
  )
}

export default Input
