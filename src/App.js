import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';
import History from './History';
import Rank from './Rank';
import Info from './Info';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';

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
      <div className="topmenu">
        <div>
            <div>
              <a href='/'>메인</a>
            </div>
            <div>
              <a href='/history'>경기 기록</a>
            </div>
            <div>
              <a href='/rank'>순위</a>
            </div>
            <div>
              <a href='/info'>팀별 정보</a>
            </div>
        </div>
      </div>
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
