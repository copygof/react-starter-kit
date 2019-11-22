import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from './todoSlice'

export default function TodoItem(props) {
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(toggleTodo(props.id))
  }

  return (
    <li onClick={handleOnClick}>
      <span style={{ textDecorationLine: props.completed ? 'line-through' : 'none' }}>{props.task}</span>
    </li>
  )
}
