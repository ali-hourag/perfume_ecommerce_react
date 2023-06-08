import { Products } from './components/products'
import { ShoppingCart } from './components/shoppingCart'
import './css/shopApp.css'

export function ShopApp() {

  return (
    <div className="shop-container_div">
      <Products />
      <ShoppingCart />
    </div>
  )
}
