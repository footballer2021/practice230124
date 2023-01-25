import Header from '../../../components/Header'
import CounterPart from '../eachComponent/CounterPart'
import { CounterContext } from '../context/CounterContext'
import Frame from '../../../components/Frame'

const Counter1 = () => {
  return (
    <>
        <Header/>
        <Frame >
        <CounterContext >
                <CounterPart />
        </CounterContext>
        </Frame>
    </>
  )
}

export default Counter1