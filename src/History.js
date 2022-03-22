import React from 'react';

const History = (props) => {
    return (
        <>
            {
                props.matches.map((match) => {
                    return (
                        <>
                        <div className="Match">
                            <div className="Match_Date">{ match.match_date.substr(0, 10) } { match.match_set }세트</div>
                            <div>
                                <div className="Match_Score">{ match.team_1_score }</div>
                                    <div className="Match_Team">
                                        <div>{ props.teams[match.team_1 - 1].name }</div>
                                        <img src={ props.teams[match.team_1 - 1].logo_url } />
                                    </div>
                                    <div>
                                        <div className="Match_VS">vs</div>
                                    </div>
                                    <div className="Match_Team">
                                        <div>{ props.teams[match.team_2 - 1].name }</div>
                                        <img src={ props.teams[match.team_2 - 1].logo_url } />
                                    </div>
                                <div className="Match_Score">{ match.team_2_score }</div>
                            </div>
                        </div>
                        <hr />
                        </>
                    )
                })
            }
            
        </>
    )
}

export default History;
