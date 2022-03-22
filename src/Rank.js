import React, { useState, useEffect } from 'react';

const Rank = (props) => {

  const Plus = (v_point) => {
    if (v_point > 0) {
      return '+';
    }
    else {
      return '';
    }
  };

  const [state, setState] = useState({
    teams: [],
  });

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
    setState({
      teams: arrayCopy,
    });
  }, [props])

  return (
      <>
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
          state.teams.map((team) => {
            return (
              <>
                <div className="Rank">
                  <div>
                    <div className="Team_Rank">{ team.rank }</div>
                    <img className="Team_Logo" src={ team.logo_url } />
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
      </>
  )
}

export default Rank;