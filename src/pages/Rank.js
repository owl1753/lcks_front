import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getImage } from '../App';
import Topmenu from '../components/Topmenu';

const RankWrapper = styled.div`
    .Rank {
      display: flex;
      justify-content: center;
      color: #E8E8E8;
    }
    .Rank>div {
      display: flex;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 40px;
      width: 1200px;
    }
    .Rank>div>.Team_Logo {
      width: 60px;
      height: 60px;
      min-width: 60px;
      min-height: 60px;
    }
    .Rank>div>div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .Rank>div>.Team_Rank {
      font-size: 30px;
      width: 140px;
      min-width: 140px;
      padding-left: 4%;
    }
    .Rank>div>div>div {
      display: flex;
      height: 100%;
    }
    .Rank>div>div>div>div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
    }
    .Rank>div>div>div>div:first-child {
      margin-left: 96px;
      width: 250px;
    }
`

const Rank = (props) => {

  const Plus = (v_point) => {
    if (v_point > 0) {
      return '+';
    }
    else {
      return '';
    }
  };

  const [teams, setTeams] = useState([]);

  const compareByRank = () => {
    return (a, b) => {
      const x = parseInt(a.rank);
      const y = parseInt(b.rank);

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };
  }

  useEffect(() => {
    let arrayCopy = [...props.teams];
    arrayCopy.sort(compareByRank());
    setTeams(arrayCopy);
  }, [props])

  return (
    <>
      <Topmenu nowPage='Rank'/>
      <RankWrapper>
        <div className="Rank">
          <div id="first">
            <div className="Team_Rank"></div>
            <div className="Team_Logo"></div>
            <div>
              <div>
                <div>팀 이름</div>
                <div>승</div>
                <div>패</div>
                <div>승점</div>
              </div>
              <div></div>
            </div>        
          </div>
        </div>
        {
          teams.map((team) => {
            return (
              <>
                <div className="Rank">
                  <div>
                    <div className="Team_Rank">{ team.rank }</div>
                    <img className="Team_Logo" src={ getImage(team.name) } alt={ team.name }/>
                    <div>
                      <div>
                        <div>{ team.name }</div>     
                        <div>{ team.win }</div>
                        <div>{ team.defeat }</div>
                          <div>
                            { Plus(team.v_point) }
                            { team.v_point }
                          </div>
                        </div>
                    </div>  
                  </div>
                </div>
                <hr />
              </>
            );
          })
        }
      </RankWrapper>
    </>
  )
}

export default Rank;