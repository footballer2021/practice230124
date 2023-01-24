import React, { useContext} from 'react'
import { myState } from '../eachPage/Counter1'

const CounterResult = () => {
 const state = useContext(myState);
  return <h3>結果:{state.total}</h3>
}

export default CounterResult