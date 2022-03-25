import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfoContents from '../components/InfoContents';
import Topmenu from '../components/Topmenu';

const InfoWrapper = styled.div`
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
    const [state, setState] = useState({
        nowTeam: {},
    });

    useEffect(() => {
        if (typeof props.teams === 'undefined' || props.teams === null){
            return;
        }
        if (props.teams.length === 0){
            return;
        }
        const team = props.teams[0];
        setState({
            nowTeam: team,
        });

      }, [props])

    return (
        <>
            <Topmenu nowPage='Info'/>
            <InfoWrapper>
                <div className='SelectTeam'>
                    {
                        props.teams.map((team) => {
                            return (
                                <div>
                                    <div style={{color: team.name === state.nowTeam.name ? '#4169E1' : '#E8E8E8'}} 
                                    onClick={() => {
                                        setState({
                                            nowTeam: team,
                                        });
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
            <InfoContents team={ state.nowTeam }/>
        </>
    )
}

export default Info;