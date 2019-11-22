import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

export default function AddTodo() {
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  const handleOnChange = e => setTodoText(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    if (!todoText.trim()) {
      return
    }
    dispatch(addTodo(todoText))
    setTodoText('')
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={todoText} onChange={handleOnChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
