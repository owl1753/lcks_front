import React, { useState, useEffect } from 'react';
import Main from './pages/Main'
import History from './pages/History';
import Rank from './pages/Rank';
import Info from './pages/Info';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
import none from './assets/none.png';
import azubu_frost from './assets/azubu_frost.png';
import cj_entus from './assets/cj_entus.png';
import kt_rolster_b from './assets/kt_rolster_b.png';
import kt_rolster_a from './assets/kt_rolster_a.png';
import team_op from './assets/team_op.png';
import xenics_storm from './assets/xenics_storm.png';
import afreeca_freecs from './assets/afreeca_freecs.png';
import dragonx from './assets/dragonx.png';
import damwon_gaming from './assets/damwon_gaming.png';
import team_dynamics from './assets/team_dynamics.png';
import seolhaeone_prince from './assets/seolhaeone_prince.png';
import sandbox_gaming from './assets/sandbox_gaming.png';
import griffin from './assets/griffin.png';
import apk_prince from './assets/apk_prince.png';
import kingzone_dragonx from './assets/kingzone_dragonx.png';
import jinair_greenwings from './assets/jinair_greenwings.png';
import mvp from './assets/mvp.png';
import bbq_olivers from './assets/bbq_olivers.png';
import ksv from './assets/ksv.png';
import kongdoo_monster from './assets/kongdoo_monster.png';
import rox_tigers from './assets/rox_tigers.png';
import longzhu_gaming from './assets/longzhu_gaming.png';
import samsung_galaxy from './assets/samsung_galaxy.png';
import ever_8_winners from './assets/ever_8_winners.png';
import esc_ever from './assets/esc_ever.png';
import emfire from './assets/emfire.png';
import koo_tigers from './assets/koo_tigers.png';
import incredible_miracle from './assets/incredible_miracle.png';
import ge_tigers from './assets/ge_tigers.png';
import samsung_blue from './assets/samsung_blue.png';
import samsung_white from './assets/samsung_white.png';
import jinair_stealths from './assets/jinair_stealths.png';
import najin_b_sword from './assets/najin_b_sword.png';
import najin_w_shield from './assets/najin_w_shield.png';
import cj_entus_blaze from './assets/cj_entus_blaze.png';
import cj_entus_frost from './assets/cj_entus_frost.png';
import jinair_falcons from './assets/jinair_falcons.png';
import incredible_miracle_1 from './assets/incredible_miracle_1.png';
import incredible_miracle_2 from './assets/incredible_miracle_2.png';
import bigfile_miracle from './assets/bigfile_miracle.png';
import midas_fio from './assets/midas_fio.png';
import prime_optimus from './assets/prime_optimus.png';
import Topmenu from './components/Topmenu';

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
  const [accounts, setAccount] = useState([]);
  const [logined, setLogined] = useState(false);

  const fetchData = async () => {
    const response1 = await axios.get('/api/match/');
    const response2 = await axios.get('/api/team/');
    setMatches(response1.data);
    setTeams(response2.data);
  };

  const getStrogeAccount = async () => {
    const account = await sessionStorage.getItem("userAccount");
    if (account !== null){
      setAccount(JSON.parse(account));
      setLogined(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    getStrogeAccount();
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      
      <Routes>
        <Route path="/login" element={<Login setAccount={ setAccount } setLogined={ setLogined }/> }/>
        <Route path="/signup" element={<SignUp /> }/>
        <Route path="/*" element={<Topmenu logined={ logined } accounts={ accounts } setLogined={ setLogined } setAccount={ setAccount }/>}>
          <Route path='' element={<Main />} />
          <Route path='history' element={<History matches={ matches } teams={ teams }/>} />
          <Route path='rank' element={<Rank teams={ teams }/>} />
          <Route path='info' element={<Info teams={ teams }/>} />
        </Route>
      </Routes>
    </div>
  );
}

export const getImage = (team_name) => {
  if (typeof team_name === 'undefined'){
    return '';
  }

  switch(team_name){
    case 'DRX': return drx;
    case 'DWG KIA': return dwg_kia;
    case 'Fredit BRION': return fredit_brion;
    case 'Gen.G':
    case 'Gen.G eSports':
    case 'Gen.G Esports': return geng;
    case '한화생명':
    case 'Hanwha Life Esports': return hanwha_life_esports;
    case 'T1': return t1;
    case 'KWANGDONG FREECS': return kwangdong_freecs;
    case 'KT Rolster':
    case 'KT 롤스터':
    case 'kt 롤스터':
    case 'kt Rolster':
    case 'kt rolster': return kt_rolster;
    case 'NS RED FORCE': return ns_red_force;
    case 'Liiv Sandbox': return liiv_sandbox;
    case 'SKT T1':
    case 'SK telecom T1':
    case 'SK Telecom T1': return sk_telecom_t1;
    case 'SKT T1 K': return skt_t1_k;
    case 'SKT T1 S': return skt_t1_s;
    case 'Azubu Blaze': return azubu_blaze;
    case 'Azubu Frost': return azubu_frost;
    case 'CJ 엔투스':
    case 'CJ ENTUS':
    case 'CJ Entus': return cj_entus;
    case 'KT Bullets':
    case 'KT Rolster B': return kt_rolster_b;
    case 'KT Arrows':
    case 'KT Rolster A': return kt_rolster_a;
    case '(구)TeamOP':
    case 'TeamOP': return team_op;
    case 'Xenics Storm': return xenics_storm;
    case '아프리카 프릭스':
    case 'Afreeca Freecs': return afreeca_freecs;
    case 'DragonX': return dragonx;
    case 'DAMWON Gaming': return damwon_gaming;
    case 'Team Dynamics': return team_dynamics;
    case 'SeolHaeOne Prince': return seolhaeone_prince;
    case 'SANDBOX Gaming': return sandbox_gaming;
    case 'Griffin': return griffin;
    case 'APK Prince': return apk_prince;
    case '킹존 드래곤X':
    case 'KING-ZONE DragonX': return kingzone_dragonx;
    case '진에어 그린윙스':
    case 'Jin Air GreenWings': return jinair_greenwings;
    case 'MVP': return mvp;
    case 'bbq olivers': return bbq_olivers;
    case 'KSV': return ksv;
    case '콩두 몬스터': return kongdoo_monster;
    case 'ROX 타이거즈': return rox_tigers;
    case '롱주 게이밍': return longzhu_gaming;
    case 'Samsung Galaxy':
    case '삼성':
    case '삼성 갤럭시': return samsung_galaxy;
    case 'EVER 8 Winners': return ever_8_winners;
    case 'ESC Ever': return esc_ever;
    case 'Najin e-mFire':
    case '나진 e엠파이어':
    case 'e엠파이어': return emfire;
    case '쿠 타이거즈': return koo_tigers;
    case 'Incredible Miracle':
    case '롱주 IM': return incredible_miracle;
    case 'GE Tigers': return ge_tigers;
    case 'Samsung Blue':
    case 'SAMSUNG Blue': return samsung_blue;
    case 'SAMSUNG Ozone':
    case 'Samsung Ozone':
    case 'SAMSUNG White': return samsung_white;
    case 'Jin Air Stealths': return jinair_stealths;
    case 'NaJin B Sword': return najin_b_sword;
    case 'NaJin W Shield': return najin_w_shield;
    case 'CJ Entus Blaze': return cj_entus_blaze;
    case 'CJ Entus Frost': return cj_entus_frost;
    case 'Jin Air Falcons': return jinair_falcons;
    case 'IM #1': return incredible_miracle_1;
    case 'IM #2': return incredible_miracle_2;
    case 'Bigfile Miracle': return bigfile_miracle;
    case 'Midas FIO': return midas_fio;
    case 'Prime Optimus': return prime_optimus;
    default: return none;
  }
}

export default App;
