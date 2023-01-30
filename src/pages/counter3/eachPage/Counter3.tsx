import React from 'react'
import Header from '../../../components/Header'
import Frame from '../../../components/Frame'
import Todo from '../components/Todo'

const Counter3 = () => {
  return (
    <>
      <Header />
      <Frame>
        <h2>todoリスト</h2>
        <Todo />
      </Frame>
    </>
  )
}

export default Counter3