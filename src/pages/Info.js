import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfoContents from '../components/InfoContents';
import TeamComments from '../components/TeamComments';

const InfoWrapper = styled.div`
    & {
        padding-top: 80px;
    }
    .SelectTeam{
        display: flex;
        font-size: 14px;
        margin-top: 10px;
    }
    .SelectTeam>div{
        display: flex;
    }
    .SelectTeam>div>div:nth-child(1){
        display: flex;
        height: 20px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
    }
    .SelectTeam>div>div:nth-child(1):hover{
        color: #4169E1 !important;
    }
    .SelectTeam>div>div:nth-child(2){
        width: 2px;
        background-color: white;
    }
    .SelectTeam>div:last-child>div:nth-child(2){
        display: none;
    }
`

const Info = (props) => {
    const [nowTeam, setNowTeam] = useState({});

    useEffect(() => {
        if (typeof props.teams === 'undefined' || props.teams === null){
            return;
        }
        if (props.teams.length === 0){
            return;
        }
        const team = props.teams[0];
        setNowTeam(team);
      }, [props])

    return (
        <>
            <InfoWrapper>
                <div className='SelectTeam'>
                    {
                        props.teams.map((team) => {
                            return (
                                <div>
                                    <div style={{color: team.name === nowTeam.name ? '#4169E1' : '#E8E8E8'}} 
                                    onClick={() => {
                                        setNowTeam(team);
                                    }}>
                                        { team.name }
                                    </div>
                                    <div></div>
                                </div>
                            )
                        })
                    }   
                </div>
            </InfoWrapper>
            <InfoContents team={ nowTeam }/>
            <TeamComments />
        </>
    )
}

export default Info;