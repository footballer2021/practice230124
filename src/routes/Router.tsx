import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Counter1 from '../pages/counter1/eachPage/Counter1';
import Counter2 from '../pages/counter2/eachPage/Counter2';
import Counter3 from '../pages/counter3/eachPage/Counter3';

const activeTabContext = createContext("");
const setActiveTabContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});

const Router = () => {
  const [ activeTab, setActiveTab ] = useState("Home");
  return (
    <activeTabContext.Provider value={activeTab}>
      <setActiveTabContext.Provider value={setActiveTab}>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Counter1" element={<Counter1 />}/>
          <Route path="/Counter2" element={<Counter2 />}/>
          <Route path="/Counter3" element={<Counter3 />}/>
        </Routes>
      </setActiveTabContext.Provider>
    </activeTabContext.Provider>
  )
}

export { Router, activeTabContext, setActiveTabContext }