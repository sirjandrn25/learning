import React, { useEffect } from 'react'
import { data } from './data'
import useHttp from '../hooks/useHttp'

const FoodContext = React.createContext({
  foods: [],
})

const foodApi = 'http://localhost:4000/meals'

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = React.useState([])

  const [orders, setOrders] = React.useState([])

  const { isLoading: foodLoading, error: foodError, sendHttpRequest: httpFoodRequest } = useHttp()

  // const { isLoading: orderLoading, error: orderError, sendHttpRequest: httpOrderRequest } = useHttp()
  useEffect(() => {
    const response = httpFoodRequest({ url: foodApi })
    response.then((resp) => {
      if (resp) {
        setFoods([...resp])
      }
    })
  }, [])

  return <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>
}

export const useFoodContext = () => {
  //   const { foods } = React.useContext(FoodContext)
  //   return { foods }
  return React.useContext(FoodContext)
}

export default FoodContext
