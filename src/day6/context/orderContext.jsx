import React from 'react'
import useHttp from '../hooks/useHttp'

const OrderContext = React.createContext({
  orders: [],
})

const orderApi = 'http://localhost:4000/orders'

export const OrderProvider = ({ children }) => {
  const { isLoading: orderLoading, error: orderError, sendHttpRequest: httpOrderRequest } = useHttp()
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {}, [])

  const addOrderHandler = (item) => {
    const response = httpOrderRequest({
      url: orderApi,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: item,
    })

    response.then((data) => {
      if (data) {
        setOrders((prevState) => {
          return [data, ...prevState]
        })
      }
    })
  }

  return (
    <OrderContext.Provider value={{ orderLoading, orderError, orders, addOrderHandler }}>
      {children}
    </OrderContext.Provider>
  )
}

export const UseOrderContext = () => React.useContext(OrderContext)
