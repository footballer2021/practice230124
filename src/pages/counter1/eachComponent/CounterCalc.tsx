import React from 'react'
import { useContextDispatch, useContextState } from '../context/CounterContext'

const CounterCalc = () => {
 const CALC_OPTIONS = ["add", "minus", "multiple","divide"];
 const dispatch= useContextDispatch();
 const state= useContextState();
  return (
    <>
        <div>
            suica:<input type="number" name="suica" value={state.suica} onChange={(e) => {dispatch({...state, suica:Number(e.target.value)});} } />
        </div>
        <div>
            toica:<input type="number" name="toica" value={state.toica} onChange={(e) => {dispatch({...state, toica:Number(e.target.value)});} } />
        </div>
        <select name="calc" onChange={(e) => { dispatch({...state, calc:e.target.value});}}>
            { CALC_OPTIONS.map(calc => <option key={calc} value={calc}>{calc}</option>) }
        </select>
    </>
  )
}

export default CounterCalc