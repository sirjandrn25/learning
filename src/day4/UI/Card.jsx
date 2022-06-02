import React from 'react'

const Card = (props) => {
  return <div className={`p-6 rounded-lg shadow ${props.className}`}>{props.children}</div>
}

export default Card
