import React from 'react'

const Item = (props) => {
  return (
    <li className={'flex flex-row w-full justify-between items-center border-b-[1px] p-2 ' + props.className}>
      {props.children}
    </li>
  )
}

export default Item
