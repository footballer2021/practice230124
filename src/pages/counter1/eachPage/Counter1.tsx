import Header from '../../../components/Header'
import CounterPart from '../eachComponent/CounterPart'
import { CounterContext } from '../context/CounterContext'

const Counter1 = () => {
  return (
    <>
        <Header/>
        <CounterContext >
                <CounterPart />
        </CounterContext>
    </>
  )
}

export default Counter1