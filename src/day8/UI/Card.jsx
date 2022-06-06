import React from 'react'

const Card = (props) => {
  const base_class = 'rounded-lg shadow p-6 '
  return <div className={base_class + props.className}>{props.children}</div>
}

export default Card
