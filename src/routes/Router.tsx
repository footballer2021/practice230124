import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Counter1 } from '../pages/counter1/eachPage/Counter1';

const Router = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path="/Counter1" element={<Counter1 />}/>
    </Routes>
  )
}

export default Router