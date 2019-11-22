import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default function Todo() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  )
}
