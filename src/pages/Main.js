import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  & {
    padding-top: 80px;
  }

  .Main {
    font-family: 'S-CoreDream-9Black';
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    color: #cf1b1b;
    font-size: 12em;
    letter-spacing: 8px;
    cursor: pointer;
  }

  span::before {
    content: "LCKS";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0;
    z-index: -1;
    transition: 1s;
  }

  span::after {
    content: "LCKS";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }

  span:hover:before {
    top: 10px;
    left: 10px;
  }

  span:hover:after {
    top: -10px;
    left: -10px;
  } 
`

const Main = () => {
  return (
    <>
      <MainWrapper>
        <div className="Main">
          <span>LCKS</span>
        </div>
      </MainWrapper>  
    </>
  )
}

export default Main;
