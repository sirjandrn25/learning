import React from 'react'

const Card = (props) => {
  const clasess = 'shadow p-3 rounded-lg ' + props.className
  return <div className={clasess}>{props.children}</div>
}

export default Card
