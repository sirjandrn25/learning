import { FoodProvider } from './foodContext'
import { CartProvider } from './cartContext'

import { UIProvider } from './uiContext'
import { UserAuthProvider } from './userContext'
import { OrderProvider } from './orderContext'

const FoodRootProvider = ({ children }) => {
  console.log('providers')
  return (
    <FoodProvider>
      <CartProvider>
        <UserAuthProvider>
          <OrderProvider>
            <UIProvider>{children}</UIProvider>
          </OrderProvider>
        </UserAuthProvider>
      </CartProvider>
      {/* {children} */}
    </FoodProvider>
  )
}

export default FoodRootProvider
