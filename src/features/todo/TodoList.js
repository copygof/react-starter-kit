import React from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useSelector(state => state.todos)
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
