import React from 'react'
import styled from 'styled-components'
import { useContextColor } from '../context/RadioContext';

const Main = () => {
  const color = useContextColor();
  return (
    <>
        <MDiv className={`main-${color}`}>
          <h2>Radio style</h2>
        </MDiv>
    </>
  )
}

export default Main

const MDiv = styled.div`
  text-align:center;
  &.main-red {
    background-color:#FF3399;
  }

  &.main-blue {
    background-color:#00CCFF;
  }

  &.main-green {
    background-color:#00FF99;
  }
`;