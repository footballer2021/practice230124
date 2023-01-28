import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../../../components/Header'
import Frame from '../../../components/Frame';

const Counter2 = () => {
  const COLORS = ["red", "blue", "green"];
  const [color, setColor ] = useState("red");

  const changeColor = (e:React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value);

  return (
    <>
      <Header />
      <Frame>
        <SDiv className={`content-${color}`}>
        {COLORS.map(_color => 
          <label key={_color}>
            <input type="radio" checked={color === _color} value={_color} onChange={changeColor}/>{_color}
          </label>
        )}
        </SDiv>
        <MDiv className={`main-${color}`}>
          <h2>Radio style</h2>
        </MDiv>
      </Frame>
    </>
  )
    
}

export default Counter2

const SDiv = styled.div`
  text-align: center;
  &.content-red {
    background-color:#FF0000;
    color:white;
  }

  &.content-blue {
    background-color:#00008B;
    color:white;
  }


  &.content-green {
    background-color:#009900;
    color:white;
  }
  
  label:not(:last-of-type) {
    margin-right:30px;
  }
`;

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