import { useReducer, createContext, useContext } from 'react';
import { StateType, ActionType } from "../type/Counter4Type";

const stateContext = createContext( {
    paypay: 0,
    aupay: 0,
    total: 0,
    calc: "add"
  });

const dispatchContext = createContext<React.Dispatch<ActionType>>(() => {})

const reducer = (prev:StateType, {paypay,aupay,calc}:ActionType) => {
  switch(calc){
      case "add" : return { paypay, aupay, calc:"add", total: paypay + aupay }
      case "minus" : return { paypay, aupay, calc:"minus", total: paypay - aupay }
      case "multiple" : return { paypay, aupay, calc:"multiple", total: paypay * aupay }
      case "divide" : return { paypay, aupay, calc:"divide", total: paypay / aupay }
      default : return prev
  }
}

const Counter4Context = ({children}:{children:React.ReactNode}) => {
    let initialState = {
        paypay: 0,
        aupay: 0,
        total: 0,
        calc: "add"
      }
  
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
  return (
    <>
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>
        </stateContext.Provider>  
    </>
  )
}

const useContextState = () => useContext(stateContext);
const useContextDispatch = () => useContext(dispatchContext);

export { Counter4Context, useContextState, useContextDispatch } 