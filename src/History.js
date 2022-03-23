import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
    .Match {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 40px;
        color: #E8E8E8;
    }
    #first {
        font-weight: bold;
    }
    .Match>div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 650px;
    }
    .Match_Date {
        margin-bottom: 30px;
    }
    .Match>div>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .Match>div>div>img {
        width: 80px;
        height: 80px;
    }
    .Match_VS {
        display: flex;
        width: 10%;
        margin-left: 20px;
        margin-right: 20px;
        justify-content: center;
    }
    .Match_Score {
        width: 15%;
        font-size: 30px;
    }
    .Match>div>div>div {
        margin-bottom: 10px;
    }
    .Match_Team {
        width: 30%;
        padding-right: 20px;
        padding-left: 20px;
    }

    .Page_Number{
        display: flex;
        margin-top: 45px;
        margin-bottom: 40px;
        justify-content: center;
    }
    .Page_Number>div{
        display: flex;
    }
    .Page_Number>div>a{
        width: 50px;
        height: 30px;
        border: 1px solid #E8E8E8; 
    }
    .Page_Number>div>a:not(:last-child){
        margin-right: 10px;
    }
    .Page_Number>div>a>div{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #E8E8E8;
        width: 100%;
        line-height: 35px;
    }
    #Now_Page{
        background-color: #E8E8E8;
    }
    #Now_Page>div{
        color: #1C1C1C;
    }
`

const History = (props) => {
    return (
        <HistoryWrapper>
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
                                        <img src={ props.teams[match.team_1 - 1].logo_url } alt={ props.teams[match.team_1 - 1].name } />
                                    </div>
                                    <div>
                                        <div className="Match_VS">vs</div>
                                    </div>
                                    <div className="Match_Team">
                                        <div>{ props.teams[match.team_2 - 1].name }</div>
                                        <img src={ props.teams[match.team_2 - 1].logo_url } alt={ props.teams[match.team_2 - 1].name } />
                                    </div>
                                <div className="Match_Score">{ match.team_2_score }</div>
                            </div>
                        </div>
                        <hr />
                        </>
                    )
                })
            }    
        </HistoryWrapper>
    )
}

export default History;
