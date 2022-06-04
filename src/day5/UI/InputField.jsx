import React from 'react'

const input_basic_class = 'border-2 px-3 py-1 w-full col-span-2 focus:outline-none  rounded-lg'
const input_normal_class = `${input_basic_class} focus:border-cyan-300`
const input_danger_class = `${input_basic_class} focus:border-red-500 bg-red-100`
const InputField = (props) => {
  return (
    <div className='grid grid-cols-3 gap-1 mb-3'>
      <label htmlFor=''>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        className={props.isValid ? input_normal_class : input_danger_class}
      />
    </div>
  )
}

export default InputField
