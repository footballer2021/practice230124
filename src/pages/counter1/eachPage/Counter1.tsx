import React, { useReducer } from 'react'
import Header from '../../../components/Header'

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

const Counter1 = () => {
 const CALC_OPTIONS = ["add", "minus", "multiple","divide"];
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

 const numSChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({...state, suica:Number(e.target.value)});
 };

 const numTChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({...state, toica:Number(e.target.value)});
 };

 const calcChange =(e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({...state, calc:e.target.value});
 };

  return (
    <>
        <Header/>
        <div>
            suica:<input type="number" name="suica" value={state.suica} onChange={numSChange} />
        </div>
        <div>
            toica:<input type="number" name="toica" value={state.toica} onChange={numTChange} />
        </div>
        <select name="calc" onChange={calcChange}>
            {
                CALC_OPTIONS.map(calc => <option key={calc} value={calc}>{calc}</option>)
            }
        </select>
        <h3>結果:{state.total}</h3>
    </>
  )
}

export default Counter1