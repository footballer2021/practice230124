import { useSelector } from 'react-redux';
import { StateType } from "../type/Counter4Type";

const Counter4Result = () => {
const state = useSelector((state:StateType) => state);
  return (
    <>
        <h2>結果:{state.total}</h2>
    </>
  )
}

export default Counter4Result