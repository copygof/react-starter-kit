import { createSlice, combineReducers } from '@reduxjs/toolkit'
import uuidv4 from 'uuid/v4'

const cartAPISlice = createSlice({
  name: 'cart',
  initialState: {
    isFetching: false,
    isSuccess: false,
    error: null,
  },
  reducers: {
    fetchCartRequest(state, action) {
      state.isFetching = true
      state.isSuccess = false
      state.error = null
    },
    fetchCartSuccess(state, action) {
      state.isFetching = false
      state.isSuccess = true
      state.error = action.error
    },
    fetchCartFailure(state, action) {
      state.isFetching = false
      state.isSuccess = false
      state.error = action.payload
    },
  }
})


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: {
      reducer(state, action) {
        const { id, productId, productName, quantity } = action.payload
        const cartItemByProductId = state.find(cart => cart.productId === productId)
        const hasProductIncart = !!cartItemByProductId

        if (hasProductIncart) {
          cartItemByProductId.quantity++
        } else {
          state.push({ id, productId, productName, quantity })
        }
      },
      prepare({ productId, productName }) {
        return { payload: { id: uuidv4(), productId, productName, quantity: 1 } }
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const cartItemByProductId = state.find(cart => cart.id === id)
      
      cartItemByProductId.quantity = quantity
    },
    remoteCartItem(state, action) {
      return state.filter(cart => cart.id !== action.payload)
    },
    clearCart() {
      return []
    },
  },
  extraReducers: {
    [cartAPISlice.actions.fetchCartSuccess](state, action) {
      return action.payload.data
    }
  }
})

const demoData = [
  {
    id: "2d0a9c9f-bea7-44b6-9b2a-cf13ac335b84",
    productId: 4,
    productName: "armour 4",
    quantity: 3,
  },
  {
    id: "03020530-f52c-457f-818d-0013928e384b",
    productId: 3,
    productName: "puma 3",
    quantity: 2,
  },
  {
    id: "f60ed0eb-606f-4ccf-b6c4-0499ba18cbbf",
    productId: 2,
    productName: "adidas 2",
    quantity: 1,
  },
  {
    id: "21313949-98ad-4266-b572-bb2dae253933",
    productId: 1,
    productName: "nike 1",
    quantity: 1,
  }
]
const sleep = (callback) => {
  setTimeout(callback, 3000)
}

const {
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
} = cartAPISlice.actions

const fetchCartList = () => (dispatch) => {
  dispatch(fetchCartRequest())
  sleep(() => dispatch(fetchCartSuccess({ data: demoData })))
}

const {
  addToCart,
  remoteCartItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions

export {
  addToCart,
  remoteCartItem,
  updateQuantity,
  clearCart,
  fetchCartList,
}

export default combineReducers({
  cart: cartSlice.reducer,
  fetchCart: cartAPISlice.reducer
})
