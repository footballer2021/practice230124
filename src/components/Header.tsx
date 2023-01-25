import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { useActiveTabContext, useSetActiveTabContext } from '../context/TopContext'

const Header = () => {
  const activeTab = useActiveTabContext();
  const setActiveTab = useSetActiveTabContext();
  
  return (
    <SHeader>
      <p className="logo">React練習用</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/Counter1" >
          <p          
            className={`${activeTab === "Counter1" ? "active" : ""}`}
            onClick={() => setActiveTab("Counter1")}
          >
            Counter1
          </p>
        </Link>
        <Link to="/Counter2">
          <p
            className={`${activeTab === "Counter2" ? "active" : ""}`}
            onClick={() => setActiveTab("Counter2")}
          >
            Counter2
          </p>
        </Link>
        <Link to="/Counter3">
          <p
            className={`${activeTab === "Counter3" ? "active" : ""}`}
            onClick={() => setActiveTab("Counter3")}
          >
            Counter3
          </p>
        </Link>
      </div>
    </SHeader>
  )
}

export default Header

const SHeader = styled.header`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 15px;

  p {
    float: left;
    color: black;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 18px;
    line-height: 15px;
    border-radius: 4px;

    @media screen and (max-width: 500px) {
      float: none;
      display: block;
      text-align: left;
    }

    &.logo {
      font-size: 25px;
      font-weight: bold;
      color: #5c5239;
    }

    &:hover {
      background-color: #ddd;
      color: #5d6770;
    }

    &.active {
      background-color: #917c46;
      color: white;
    }
  }

  .header-right {
    float: right;

    @media screen and (max-width: 500px) {
      float: none;
    }
  }
`;
