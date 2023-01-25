import React, { useState, createContext, useContext } from 'react'

const activeTabContext = createContext("");
const setActiveTabContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});

const TopContext = ({children}:{children:React.ReactNode}) => {
  const [ activeTab, setActiveTab ] = useState("Home");
  return (
    <>
    <activeTabContext.Provider value={activeTab}>
      <setActiveTabContext.Provider value={setActiveTab}>
        { children }
      </setActiveTabContext.Provider>
    </activeTabContext.Provider>
    </>
  )
}

const useActiveTabContext = () => useContext(activeTabContext);
const useSetActiveTabContext = () => useContext(setActiveTabContext);

export { TopContext, useActiveTabContext, useSetActiveTabContext }