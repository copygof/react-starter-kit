import React from 'react'
import { useDispatch } from 'react-redux'

import {
  increase,
  decrease,
  increaseWithNumber,
  decreaseWithNumber,
} from './counterSlice'

export default function CounterButton() {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <button onClick={() => dispatch(increaseWithNumber(5))}>increaseWithNumber</button>
      <button onClick={() => dispatch(decreaseWithNumber(2))}>decreaseWithNumber</button>
    </div>
  )
}
