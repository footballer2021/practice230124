import React from 'react'
import Header from '../../../components/Header'
import Frame from '../../../components/Frame';
import Upper from '../eachComponent/Upper';
import Main from '../eachComponent/Main';
import { RadioContext } from '../context/RadioContext';

const Counter2 = () => {
  return (
    <>
      <Header />
      <Frame>
        <RadioContext>
          <Upper />
          <Main />
        </RadioContext>
      </Frame>
    </>
  )
    
}

export default Counter2