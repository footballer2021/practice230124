import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>Hello World!</h1>
        <div>
            <Link to="/Counter1">Counter1</Link>
        </div>
    </>
  )
}

export default Home