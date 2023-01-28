import React from 'react'
import styled from 'styled-components';
import { useContextColor, useContextDispatch } from '../context/RadioContext';

const Upper = () => {
  const COLORS = ["red", "blue", "green"];
  const color = useContextColor();
  const setColor = useContextDispatch();
  
  const changeColor = (e:React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value);
  
  return (
    <>
        <SDiv className={`content-${color}`}>
            {COLORS.map(_color => 
                <label key={_color}>
                    <input type="radio" checked={color === _color} value={_color} onChange={changeColor}/>{_color}
                </label>
            )}
        </SDiv>
    </>
  )
}

export default Upper

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
