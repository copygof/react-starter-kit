import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, remoteCartItem, clearCart, fetchCartList } from './cartSlice'
import cartSelector from './cartSelector'

export default function CartList() {
  const dispatch = useDispatch()
  const carts = useSelector(cartSelector.selectCarts)
  const { isFetching } = useSelector(cartSelector.selectFetchCarts)

  const handleUpdateQty = useCallback(
    ({ id, quantity }) => {
      dispatch(updateQuantity({ id, quantity }))
    },
    [dispatch],
  )
  const handleRemoteItem = useCallback(
    (id) => {
      dispatch(remoteCartItem(id))
    },
    [dispatch],
  )
  const handleClearCarts = useCallback(
    () => {
      dispatch(clearCart())
    },
    [dispatch],
  )
  const handleOnLoadCarts = useCallback(
    () => {
      dispatch(fetchCartList())
    },
    [dispatch],
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isFetching ? 'Loading...' : carts.map(cart => (
        <div key={cart.id} style={{ marginBottom: 24, display: 'flex', flexDirection: 'column' }}>
          <span>
            Product name: {cart.productName}
          </span>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button onClick={() => handleUpdateQty({
              id: cart.id,
              quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity
            })}>-</button>
            <span style={{ flex: 1, textAlign: 'center' }}>
              Qty: {cart.quantity}
            </span>
            <button onClick={() => handleUpdateQty({
              id: cart.id,
              quantity: cart.quantity + 1
            })}>+</button>
          </div>
          <button style={{ flex: 1, display: 'flex', justifyContent: 'center' }}  onClick={() => handleRemoteItem(cart.id)}>Remote this item</button>
        </div>
      ))}
      <button onClick={handleClearCarts}>Clear cart</button>
      <button onClick={handleOnLoadCarts}>Load cart list</button>
    </div>
  )
}
