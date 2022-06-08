import React from 'react'
import useHttp from '../hooks/useHttp'

const CartContext = React.createContext({
  carts: [],
})

const cartApi = 'http://localhost:4000/carts'

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = React.useState([])
  const { isLoading: cartLoading, error: cartError, sendHttpRequest: httpCartRequest } = useHttp()
  React.useEffect(() => {
    const cart_response = httpCartRequest({ url: cartApi })
    cart_response.then((data) => {
      if (data) {
        setCarts([...data])
      }
    })
  }, [])
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
    <CartContext.Provider
      value={{ carts, cartLoading, cartError, carts, addNewFoodInCart, decrementQty, incrementQty }}>
      {children}
    </CartContext.Provider>
  )
}

export const UseCartContext = () => React.useContext(CartContext)
