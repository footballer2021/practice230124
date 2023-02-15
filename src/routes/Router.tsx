import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Counter1 from '../pages/counter1/eachPage/Counter1';
import Counter2 from '../pages/counter2/eachPage/Counter2';
import Counter3 from '../pages/counter3/eachPage/Counter3';
import Counter4 from '../pages/counter4/eachPage/Counter4';
import { TopContext } from '../context/TopContext';

const Router = () => {
  return (
        <TopContext>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/Counter1" element={<Counter1 />}/>
            <Route path="/Counter2" element={<Counter2 />}/>
            <Route path="/Counter3" element={<Counter3 />}/>
            <Route path="/Counter4" element={<Counter4 />}/>
          </Routes>
        </TopContext>
  )
}

export { Router }