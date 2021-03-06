import { combineReducers } from 'redux'
import counter from 'features/counter/counterSlice'
import todos from 'features/todo/todoSlice'
import product from 'features/product/productSlice'
import cart from 'features/cart/cartSlice'

export default combineReducers({
  counter,
  todos,
  product,
  cart,
})