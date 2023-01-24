import React, { useReducer, createContext } from 'react'
import Header from '../../../components/Header'
import CounterPart from '../eachComponent/CounterPart'

type StateType = {
    calc:string,
    suica:number,
    toica:number,
    total:number
}

type ActionType = {
    calc:string,
    suica:number,
    toica:number
}

const myState = createContext({
    calc:"add",
    suica:0,
    toica:0,
    total:0
 });

 const myDispatch = createContext<React.Dispatch<ActionType>>( () => {} );

const Counter1 = () => {
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
        <Header/>
        <myState.Provider value={state}>
            <myDispatch.Provider value={dispatch}>
                <CounterPart />
            </myDispatch.Provider>
        </myState.Provider>
    </>
  )
}

export { Counter1, myState, myDispatch }