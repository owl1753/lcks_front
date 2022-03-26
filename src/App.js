import React, { useState, useEffect } from 'react';
import Main from './pages/Main'
import History from './pages/History';
import Rank from './pages/Rank';
import Info from './pages/Info';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import drx from './assets/drx.png';
import dwg_kia from './assets/dwg_kia.png';
import fredit_brion from './assets/fredit_brion.png';
import geng from './assets/geng.png';
import hanwha_life_esports from './assets/hanwha_life_esports.png';
import kt_rolster from './assets/kt_rolster.png';
import kwangdong_freecs from './assets/kwangdong_freecs.png';
import liiv_sandbox from './assets/liiv_sandbox.png';
import ns_red_force from './assets/ns_red_force.png';
import t1 from './assets/t1.png';
import sk_telecom_t1 from './assets/sk_telecom_t1.png';
import skt_t1_k from './assets/skt_t1_k.png';
import skt_t1_s from './assets/skt_t1_s.png';
import azubu_blaze from './assets/azubu_blaze.png';


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
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);

  const fetchData = async () => {
    const response1 = await axios.get('/api/match/');
    const response2 = await axios.get('/api/team/');
    setMatches(response1.data);
    setTeams(response2.data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/history' element={<History matches={ matches } teams={ teams }/>} />
        <Route path='/rank' element={<Rank teams={ teams }/>} />
        <Route path='/info' element={<Info teams={ teams }/>} />
      </Routes>
    </div>
  );
}

export const getImage = (team_name) => {
  switch(team_name){
    case 'DRX': return drx;
    case 'DWG KIA': return dwg_kia;
    case 'Fredit BRION': return fredit_brion;
    case 'Gen.G eSports':
    case 'Gen.G Esports': return geng;
    case 'Hanwha Life Esports': return hanwha_life_esports;
    case 'T1': return t1;
    case 'KWANGDONG FREECS': return kwangdong_freecs;
    case 'kt Rolster':
    case 'kt rolster': return kt_rolster;
    case 'NS RED FORCE': return ns_red_force;
    case 'Liiv Sandbox': return liiv_sandbox;
    case 'SKT T1':
    case 'SK Telecom T1': return sk_telecom_t1;
    case 'SKT T1 K': return skt_t1_k;
    case 'SKT T1 S': return skt_t1_s;
    case 'Azubu Blaze': return azubu_blaze;
  }
  return '';
}

export default App;
