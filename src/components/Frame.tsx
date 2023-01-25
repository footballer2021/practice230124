import React from 'react'
import styled from "styled-components"

const Frame = ({children}:{children:React.ReactNode}) => {
  return (
    <SDiv>
        {children}
    </SDiv>
  )
}

export default Frame

const SDiv = styled.div`
    width: 400px;
    padding: 20px;
    margin-right: auto;
    margin-left: auto;
`;