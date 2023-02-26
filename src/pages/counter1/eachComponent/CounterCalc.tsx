import React from 'react'
import { useContextDispatch, useContextState } from '../context/CounterContext'
import CounterInput from './CounterInput';

const CounterCalc = () => {
 const CALC_OPTIONS = ["add", "minus", "multiple","divide"];
 const dispatch= useContextDispatch();
 const state= useContextState();
  return (
    <>
        <CounterInput name="suica"/>
        <CounterInput name="toica"/>
        <select name="calc" onChange={(e) => { dispatch({...state, calc:e.target.value});}}>
            { CALC_OPTIONS.map(calc => <option key={calc} value={calc}>{calc}</option>) }
        </select>
    </>
  )
}

export default CounterCalc