import React from 'react'
import { useContextState } from '../context/CounterContext'

const CounterResult = () => {
 const state = useContextState();
  return <h3>結果:{state.total}</h3>
}

export default CounterResult