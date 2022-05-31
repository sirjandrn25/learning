import React from 'react'

const Card = (props) => {
  const classes = props.className
  return <div className={`shadow-2xl  ${classes} rounded-[12px]`}>{props.children}</div>
}

export default Card
