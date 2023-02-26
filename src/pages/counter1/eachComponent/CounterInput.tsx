import React from 'react';
import { useContextDispatch, useContextState } from '../context/CounterContext'

const CounterInput = ({name}:{name:string}) => {
    const dispatch= useContextDispatch();
    const state= useContextState();
  return (
    <div>
        {name}:<input 
            type="number" 
            name={name} 
            value={state[name as keyof object]} 
            onChange={(e) => {dispatch({...state, [name]:Number(e.target.value)});} } />
    </div>
  )
}

export default CounterInput