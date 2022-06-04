import React from 'react'
import { data } from './data'

const FoodContext = React.createContext({
  foods: [],
  carts: [],
})

const dymmyCarts = [
  {
    id: 1,
    food: data[0],
    qty: 5,
  },
  {
    id: 2,
    food: data[1],
    qty: 2,
  },
]

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = React.useState([...data])

  const [carts, setCarts] = React.useState([...dymmyCarts])

  const addNewFoodInCart = (item) => {
    setCarts((prevState) => {
      return [item, ...prevState]
    })
  }

  const incrementQty = (item) => {
    setCarts((prevState) => {
      return prevState.map((cart) => {
        if (cart.id === item.id) {
          cart.qty += 1
        }
        return cart
      })
    })
  }
  const decrementQty = (item) => {
    console.log(item.qty)
    if (item.qty <= 1) {
      setCarts((prevState) => {
        return prevState.filter((cart) => cart.id !== item.id)
      })
    } else {
      setCarts((prevState) => {
        return prevState.map((cart) => {
          if (cart.id === item.id) {
            cart.qty = cart.qty - 1
          }
          return cart
        })
      })
    }
  }

  return (
    <FoodContext.Provider value={{ foods, carts, addNewFoodInCart, decrementQty, incrementQty }}>
      {children}
    </FoodContext.Provider>
  )
}

export const useFoodContext = () => {
  //   const { foods } = React.useContext(FoodContext)
  //   return { foods }
  return React.useContext(FoodContext)
}

export default FoodContext
