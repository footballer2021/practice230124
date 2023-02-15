import { createStore } from 'redux';
import { StateType, ActionType } from "../type/Counter4Type";

const initState:StateType = {
    paypay: 0,
    aupay: 0,
    total: 0,
    calc: "add"
  }

const reducer = (prev = initState, {paypay,aupay,calc}:ActionType) => {
    switch(calc){
        case "add" : return { paypay, aupay, calc:"add", total: paypay + aupay }
        case "minus" : return { paypay, aupay, calc:"minus", total: paypay - aupay }
        case "multiple" : return { paypay, aupay, calc:"multiple", total: paypay * aupay }
        case "divide" : return { paypay, aupay, calc:"divide", total: paypay / aupay }
        default : return prev
    }
  }

const store= createStore<any,any,any,any>(reducer)

export default store;