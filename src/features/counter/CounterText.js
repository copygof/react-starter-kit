import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterText() {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      Counter: ${counter}
    </div>
  )
}
