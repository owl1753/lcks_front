import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Topmenu from '../components/Topmenu';

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

    .SelectYear{
        display: flex;
        color: #E8E8E8;
        font-size: 14px;
        margin-top: 10px;
    }
    .SelectYear>div{
        display: flex;
    }
    .SelectYear>div>div:nth-child(1){
        display: flex;
        height: 20px;
        justify-content: center;
        align-items: center;
        padding-right: 10px;
        padding-left: 10px;
        cursor: pointer;
    }
    .SelectYear>div>div:nth-child(1):hover{
        color: #4169E1 !important;
    }
    .SelectYear>div>div:nth-child(2){
        width: 2px;
        background-color: white;
    }
    .SelectYear>div:last-child>div:nth-child(2){
        display: none;
    }
`

const History = (props) => {
    const [state, setState] = useState(
        {
            years: ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012'],
            nowYear: '2022',
            matches: [],
        }
    );

    useEffect(() => { 
        if (typeof props.matches === 'undefined' || props.matches === null){
            return;
        }
        if (props.matches.length === 0){
            return;
        }
        const array = [];
        for (let i = 0; i < props.matches.length; i++){
            if (props.matches[i].match_date.substr(0, 4) === state.nowYear){
                array.push(props.matches[i]);
            }
        }
        setState({
            years: [...state.years],
            nowYear: state.nowYear,
            matches: [...array],
        });
    }, [props, state.nowYear])

    return (
        <>
            <Topmenu nowPage='History'/>
            <HistoryWrapper>
                <div className='SelectYear'>
                    {
                        state.years.map((year) => {
                            return (
                                <div>
                                    <div style={{color: year === state.nowYear ? '#4169E1' : '#E8E8E8'}} 
                                    onClick={() => {                   
                                        setState({
                                            years: [...state.years],
                                            nowYear: year,
                                            matches: [], 
                                        });
                                    }}>
                                        { year }
                                    </div>
                                    <div></div>
                                </div>
                            )
                        })
                    }
                </div>
                
                {
                    state.matches.map((match) => {
                        return (
                            <>
                            <div className="Match">
                                <div className="Match_Date">{ match.match_date.substr(0, 10) } { match.match_set }</div>
                                <div>
                                    <div className="Match_Score">{ match.team_1_score }</div>
                                        <div className="Match_Team">
                                            <div>{ match.team_1_name }</div>
                                            <img src={ '' } alt={ match.team_1_name } />
                                        </div>
                                        <div>
                                            <div className="Match_VS">vs</div>
                                        </div>
                                        <div className="Match_Team">
                                            <div>{ match.team_2_name }</div>
                                            <img src={ '' } alt={ match.team_2_name } />
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
        </>
    )
}

export default History;
