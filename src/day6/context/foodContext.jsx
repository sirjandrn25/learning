import React, { useEffect } from 'react'
import { data } from './data'
import useHttp from '../hooks/useHttp'

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

const foodApi = 'http://localhost:4000/meals'
const cartApi = 'http://localhost:4000/carts'

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = React.useState([])
  const { isLoading: foodLoading, error: foodError, sendHttpRequest: httpFoodRequest } = useHttp()
  const { isLoading: cartLoading, error: cartError, sendHttpRequest: httpCartRequest } = useHttp()
  useEffect(() => {
    const response = httpFoodRequest({ url: foodApi })
    response.then((resp) => {
      if (resp) {
        setFoods([...resp])
      }
    })
    const cart_response = httpCartRequest({ url: cartApi })
    cart_response.then((data) => {
      if (data) {
        setCarts([...data])
      }
    })
  }, [])

  const [carts, setCarts] = React.useState([])

  const checkAlreayPresetCart = (meal) => {
    const data = carts.find((cart) => cart.meal.id === meal.id)
    return data
  }

  const updateFoodCart = async (update_cart) => {
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: update_cart,
    }
    const response = httpCartRequest({
      url: `${cartApi}/${update_cart.id}`,
      ...config,
    })
    response.then((data) => {
      if (data) {
        setCarts((prevState) => {
          return prevState.map((cart) => (cart.id == data.id ? data : cart))
        })
      }
    })
  }

  const removeFromCart = async (cart_id) => {
    const response = httpCartRequest({
      url: `${cartApi}/${cart_id}`,
      method: 'DELETE',
    })
    response.then((resp) => {
      if (resp) {
        setCarts((prevState) => {
          return prevState.filter((cart) => cart.id !== cart_id)
        })
      }
    })
  }

  const addNewFoodInCart = (item) => {
    if (checkAlreayPresetCart(item.meal)) {
      const cart = carts.find((cart) => cart.meal.id == item.meal.id)

      updateFoodCart({ ...item, qty: cart.qty + item.qty, id: cart.id })
    } else {
      const response = httpCartRequest({
        url: cartApi,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          meal: item.meal,
          qty: item.qty,
        },
      })
      response.then((data) => {
        if (data) {
          setCarts((prevState) => {
            return [data, ...prevState]
          })
        }
      })
    }
  }

  const incrementQty = (item) => {
    updateFoodCart({ ...item, qty: item.qty + 1 })
  }

  const decrementQty = (item) => {
    if (item.qty <= 1) {
      removeFromCart(item.id)
    } else {
      updateFoodCart({ ...item, qty: item.qty - 1 })
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
