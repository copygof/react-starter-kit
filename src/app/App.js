import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from '../features/counter/Counter'
import Todo from '../features/todo/Todo'
import ProductList from '../features/product/ProductList'
import CartList from '../features/cart/CartList'

const CounterApp = () => (
  <div>
    TODO Counter App
    <Counter />
  </div>
)
const TodoApp = () => (
  <div>
    TODO Todo App
    <Todo />
  </div>
)
const ShoppingCartApp = () => (
  <div style={{ display: 'flex' }}>
    <section>
      <ProductList />
    </section>
    <div style={{ width: 100 }} />
    <section>
      <CartList />
    </section>
  </div>
)

export default function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CounterApp />
        <TodoApp /> */}
        <ShoppingCartApp />
      </div>
    </Provider>
  )
}
