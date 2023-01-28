import React, { useState, createContext, useContext } from 'react'

const colorPro = createContext("string");
const setColorPro = createContext<React.Dispatch<string>>(() => {})

const RadioContext = ({children}:{children:React.ReactNode}) => {
  const [color, setColor ] = useState("red");
  return (
    <>
        <colorPro.Provider value={color} >
            <setColorPro.Provider value={setColor}>
                {children}
            </setColorPro.Provider>
        </colorPro.Provider>
    
    </>
  )
}

const useContextColor = () => useContext(colorPro);
const useContextDispatch = () => useContext(setColorPro);

export { RadioContext, useContextColor, useContextDispatch }