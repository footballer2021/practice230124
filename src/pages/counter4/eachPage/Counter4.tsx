import Header from '../../../components/Header'
import Frame from '../../../components/Frame'
import Counter4Part from '../eachComponent/Counter4Part';
import { Provider } from 'react-redux';
import store from '../store/index';

const Counter4 = () => {
  return (
    <>
        <Header />
        <Frame>
            <Provider store={store}>
                <Counter4Part />
            </Provider>
        </Frame>
    </>
  )
}

export default Counter4