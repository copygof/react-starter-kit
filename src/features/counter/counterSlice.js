import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1
    },
    decrease(state, action) {
      return state - 1
    },
    increaseWithNumber(state, action) {
      return state + action.payload
    },
    decreaseWithNumber(state, action) {
      return state - action.payload
    },
  }
})

const {
  decrease,
  increase,
  increaseWithNumber,
  decreaseWithNumber,
} = counterSlice.actions

export {
  decrease,
  increase,
  increaseWithNumber,
  decreaseWithNumber,
}

export default counterSlice.reducer
