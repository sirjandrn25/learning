import React from 'react'
import ExpenseItem from './ExpenseItem'

const ItemContainer = (props) => {
  // console.log(props.items)

  const renderItems = () => {
    const items = props.items.filter((item) => item.date.getFullYear().toString() === props.filterYear)
    // const items = props.items()
    if (items.length) {
      return items.map((item) => <ExpenseItem expense={item} key={item.id} />)
    } else {
      return <p className='text-white font-bold text-[22px]'>Expenses Are not available</p>
    }
  }
  return <div className='h-auto w-full'>{renderItems()}</div>
}

export default ItemContainer
