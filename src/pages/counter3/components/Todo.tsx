import React from 'react'
import { TodoProvider } from '../context/TodoProvider'
import List from './List'
import Form from './Form'

const Todo = () => {
  

  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  )
}

export default Todo