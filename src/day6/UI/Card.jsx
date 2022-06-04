import React from 'react'

const Card = (props) => {
  const base_class = 'shadow p-6 rounded-lg '
  return <div className={base_class + props.className}>{props.children}</div>
}

export default Card
