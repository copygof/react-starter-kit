import { createSlice } from '@reduxjs/toolkit'

let uuid = 0

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({
          id: id,
          task: text,
          completed: false
        })
      },
      prepare(text) {
        return { payload: { id: uuid++, text } }
      }
    },
    toggleTodo(state, action) {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    },
    deleteTodo(state, action) {
      state.filter(todo =>  todo.id !== action.payload)
    },
  }
})

const {
  addTodo,
  toggleTodo,
  deleteTodo,
} = todoSlice.actions

export {
  addTodo,
  toggleTodo,
  deleteTodo,
}

export default todoSlice.reducer
