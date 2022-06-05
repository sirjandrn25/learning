import React from 'react'
import Button from '../UI/Button'
import { useFoodContext } from '../context/foodContext'
import { useUIContext } from '../context/uiContext'
import Item from '../UI/Item'

const FoodItem = (props) => {
  const [qty, setQty] = React.useState(1)
  const { addNewFoodInCart } = useFoodContext()
  const { openModalHandler } = useUIContext()

  const handleAddNewFood = () => {
    const item = {
      id: Math.floor(Math.random() * 100),
      food: props.food,
      qty: qty,
    }
    addNewFoodInCart(item)
    openModalHandler('cart')
  }

  return (
    <>
      <Item className='p-5'>
        <div className='flex flex-col '>
          <span className='text-xl font-bold capitalize'>{props.food.title}</span>
          <span className='text-gray-600 italic text-sm'>{props.food.description}</span>

          <span className='text-[#800026] text-lg font-bold'>${props.food.price}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row items-center mb-2'>
            <span className='font-bold'>Amount</span>
            <input
              type='number'
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              min={1}
              className='border-2 ml-3 w-16 text-sm py-1 rounded-lg px-3 '
            />
          </div>
          <Button onClick={handleAddNewFood} className='hover:bg-[#4d0017]  text-sm bg-[#99002e] active:bg-[#c13e3e]'>
            +Add
          </Button>
        </div>
      </Item>
      <hr />
    </>
  )
}

export default FoodItem
