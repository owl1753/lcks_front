import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getImage } from '../App';

const HistoryWrapper = styled.div`
    & {
        padding-top: 80px;
    }
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
    .Match>div>div:not(:nth-child(3))>div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
    }
    .Match>div>div>div>img {
        width: 80px;
    }
    .Match_VS {
        display: flex;
        width: 5%;
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
        width: 60%;
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
    .Page_Number>div>div{
        width: 50px;
        height: 30px;
        border: 1px solid #E8E8E8; 
    }
    .Page_Number>div>div:hover{
        cursor: pointer;
        background-color: #E8E8E8;
    }
    .Page_Number>div>div:hover>div{
        color: #1C1C1C;
    }
    .Page_Number>div>div:not(:last-child){
        margin-right: 10px;
    }
    .Page_Number>div>div>div{
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
    const years = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012'];
    const [nowYear, setNowYear] = useState('2022');
    const [matches, setMatches] = useState([]);
    const [filter_matches, set_Filter_matches] = useState([]);
    const [page_numbers, setPage_numbers] = useState([]);
    const [now_page_number, setNow_page_number] = useState(1);

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const select_page = (page_number, e) => {
        setNow_page_number(page_number);
        console.log(page_number);
    }

    useEffect(() => { 
        if (typeof props.matches === 'undefined' || props.matches === null){
            return;
        }
        if (props.matches.length === 0){
            return;
        }
        const array = [];
        for (let i = 0; i < props.matches.length; i++){
            if (props.matches[i].match_date.substr(0, 4) === nowYear){
                array.push(props.matches[i]);
            }
        }
        setMatches(array);
        
    }, [props, nowYear])

    useEffect(() => {
        if ((((now_page_number - 1) * 10) + 10) > matches.length){
            set_Filter_matches(matches.slice(((now_page_number - 1) * 10), matches.length));
        }
        else{
            set_Filter_matches(matches.slice(((now_page_number - 1) * 10), (((now_page_number - 1) * 10) + 10)));
        }

        let max_page_number = parseInt(matches.length / 10);
        if (matches.length % 10 !== 0){
            max_page_number += 1;
        }

        if (now_page_number < 5){
            if (max_page_number < now_page_number + 4){
                setPage_numbers(range(1, max_page_number));
            }
            else{
                setPage_numbers(range(1, now_page_number + 4));
            }
        }
        else if (now_page_number + 4 > max_page_number){
            setPage_numbers(range(now_page_number - 4, max_page_number))
        }
        else{
            setPage_numbers(range(now_page_number - 4, now_page_number + 4))
        }
    }, [matches, now_page_number])

    return (
        <>
            <HistoryWrapper>
                <div className='SelectYear'>
                    {
                        years.map((year) => {
                            return (
                                <div>
                                    <div style={{color: year === nowYear ? '#4169E1' : '#E8E8E8'}} 
                                    onClick={() => {     
                                        setNowYear(year); 
                                        setNow_page_number(1);         
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
                    filter_matches.map((match) => {
                        return (
                            <>
                                <div className="Match">
                                    <div className="Match_Date">{ match.match_date.substr(0, 10) } { match.match_set }</div>
                                    <div>
                                        <div className="Match_Score">{ match.team_1_score }</div>
                                            <div className="Match_Team">
                                                <div>{ match.team_1_name }</div>
                                                <div>
                                                    <img src={ getImage(match.team_1_name) } alt={ match.team_1_name } />
                                                </div>
                                                
                                            </div>
                                            <div>
                                                <div className="Match_VS">vs</div>
                                            </div>
                                            <div className="Match_Team">
                                                <div>{ match.team_2_name }</div>
                                                <div>
                                                    <img src={ getImage(match.team_2_name) } alt={ match.team_2_name } />
                                                </div>
                                            </div>
                                        <div className="Match_Score">{ match.team_2_score }</div>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })
                }    
                <div className="Page_Number">
                    <div>
                        {
                            page_numbers.map((page_number) => {
                                return (
                                    <>
                                        <div id={ page_number === now_page_number ? "Now_Page" : "" } onClick={ (e) => select_page(page_number, e) }>
                                            <div>{ page_number }</div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </HistoryWrapper>
        </>
    )
}

export default History;
