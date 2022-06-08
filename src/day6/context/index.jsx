import { FoodProvider } from './foodContext'
import { CartProvider } from './cartContext'

import { UIProvider } from './uiContext'
import { UserAuthProvider } from './userContext'
const FoodRootProvider = ({ children }) => {
  return (
    <FoodProvider>
      <CartProvider>
        <UserAuthProvider>
          <UIProvider>{children}</UIProvider>
        </UserAuthProvider>
      </CartProvider>
      {/* {children} */}
    </FoodProvider>
  )
}

export default FoodRootProvider
