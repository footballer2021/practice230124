import React, { useReducer, createContext, useContext } from 'react'
import { StateType, ActionType }  from '../type/CounterType';

const myState = createContext({
    calc:"add",
    suica:0,
    toica:0,
    total:0
 });

const myDispatch = createContext<React.Dispatch<ActionType>>( () => {} );

const CounterContext = ({children}:{children:React.ReactNode}) => {
    const initPoint = {
        calc:"add",
        suica:0,
        toica:0,
        total:0
     }
    
     const calcReducer = (prev:StateType, {calc, suica, toica}:ActionType) => {
        switch(calc){
            case "add" : return {calc:"add", suica, toica, total:suica + toica}
            case "minus" : return {calc: "minus", suica, toica, total:suica - toica}
            case "multiple" : return {calc: "multiple", suica, toica, total:suica * toica}
            case "divide" : return {calc: "divide", suica, toica, total:suica / toica}
            default : return prev;
        }
     }
    
     const [state, dispatch ] = useReducer(calcReducer,initPoint);

  return (
    <>
        <myState.Provider value={state}>
            <myDispatch.Provider value={dispatch}>
                {children}
            </myDispatch.Provider>
        </myState.Provider>
    </>
  )
}

const useContextState = () => useContext(myState);
const useContextDispatch = () => useContext(myDispatch);

export { CounterContext, useContextState, useContextDispatch }