import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { StateType } from "../type/Counter4Type";

const Counter4Calc = () => {
  const state = useSelector((state:StateType) => state)
  const myDispatch = useDispatch();
 
  const CALC_OPTIONS = ["add", "minus", "multiple", "divide"];

  const paypayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    myDispatch({...state ,paypay:Number(e.target.value),type:null});
  }

  const aupayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    myDispatch({...state, aupay:Number(e.target.value),type:null});
  }

  const calcChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    myDispatch({...state, calc:e.target.value,type:null});
  }

  return (
    <>
        <div>
            paypay:<input type="number" name="paypay" onChange={ paypayChange }  />
        </div>
        <div>
            aupay:<input type="number" name="aupay" onChange={ aupayChange } />
        </div>
        <select name="calc" onChange={calcChange}>
            {CALC_OPTIONS.map(mark => <option value={mark} key={mark}>{mark}</option>)}
        </select>
    </>
  )
}

export default Counter4Calc