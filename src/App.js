import React, { useState, useEffect } from 'react';
import Main from './Main';
import History from './History';
import Rank from './Rank';
import Info from './Info';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import Topmenu from './Topmenu';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'OTWelcomeBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'S-CoreDream-9Black';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-9Black.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  body {
    font-family: 'OTWelcomeBA';
    margin: 0;
    padding: 0;
    background-color: #1C1C1C;
    min-height: 100vh;
    overflow-x: hidden;
  }

  hr {
    color: #E8E8E8;
  }
  hr:last-child {
    display: none;
  }

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`

function App() {
  const [state, setState] = useState({
    matches : [],
    teams : [],
  });

  const fetchData = async () => {
    const response1 = await axios.get('/api/match/');
    const response2 = await axios.get('/api/team/');
    setState({
      matches: response1.data,
      teams: response2.data,
    })
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <Topmenu />
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/history' element={<History matches={ state.matches } teams={ state.teams } />} />
        <Route path='/rank' element={<Rank teams={ state.teams }/>} />
        <Route path='/info' element={<Info teams={ state.teams }/>} />
      </Routes>
    </div>
  );
}

export default App;
