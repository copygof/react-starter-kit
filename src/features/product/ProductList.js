import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import productSelector from './productSelector'

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(productSelector.selectProductList)

  const handleOnAddToCart = useCallback(
    (product) => {
      dispatch(addToCart({
        productId: product.id,
        productName: product.name
      }))
    },
    [dispatch],
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {products.map(product => (
        <div key={product.id} style={{display: 'flex', flexDirection: 'row' }}>
          <span style={{ flex: 1  }}>
            Product name: {product.name}
          </span>
          <button onClick={() => handleOnAddToCart(product)}>Add to carts</button>
        </div>
      ))}
    </div>
  )
}
