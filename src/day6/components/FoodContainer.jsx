import React from 'react'
import Card from '../UI/Card'
import FoodItem from './FoodItem'
import { useFoodContext } from '../context/foodContext'

const FoodContainer = () => {
  const { foods } = useFoodContext()

  return (
    <Card className='bg-slate-50 h-auto w-[900px]'>
      <ul className='w-full flex flex-col '>
        {foods.map((food) => {
          return <FoodItem food={food} key={food.id} />
        })}
      </ul>
    </Card>
  )
}

export default FoodContainer
