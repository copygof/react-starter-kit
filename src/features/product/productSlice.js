import { createSlice } from '@reduxjs/toolkit'
import uuidv4 from 'uuid/v4'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    1: {
      id: 1,
      name: 'nike 1',
      price: 50
    },
    2: {
      id: 2,
      name: 'adidas 2',
      price: 32
    },
    3: {
      id: 3,
      name: 'puma 3',
      price: 413
    },
    4: {
      id: 4,
      name: 'armour 4',
      price: 12
    },
  },
  reducers: {
    addProduct: {
      reducer(state, action) {
        const { id, name, price } = action.payload
        state[id] = { id, name, price }
      },
      prepare({ name, price }) {
        return { payload: { id: uuidv4(), name, price } }
      }
    },
    editProduct(state, action) {
      if (state[action.payload.id]) {
        state[action.payload.id] = {
          ...state[action.payload.id],
          ...action.payload
        }
      }
    },
    deleteProduct(state, action) {
      delete state[action.payload.id]
    },
  }
})

const {
  addProduct,
  editProduct,
  deleteProduct,
} = productSlice.actions

export {
  addProduct,
  editProduct,
  deleteProduct,
}

export default productSlice.reducer
