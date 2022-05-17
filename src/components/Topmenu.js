import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const TopmenuWrapper = styled.div`
    .topmenu{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        height: 80px;
        background-color: #0D0D0D;
    }
    .topmenu>div{
        height: 80px;
        display: flex;
    }
    .topmenu>div>div{
        width: 100px;
    }
    .Link{
        display: flex;
        justify-content: center;
        line-height: 86px;
        color: #E8E8E8;
        width: 100%;
    }
    .Link:hover{
        color: #4169E1 !important;
        cursor: pointer;
    }
`

const Topmenu = (props) => {
    const nowPage = useLocation();

    const clickLogOut = () => {
        props.setLogined(false);
        props.setAccounts([]);
    }

    return (
        <>
            <TopmenuWrapper>
                <div className="topmenu">
                    <div>
                        <div>
                            <Link to="/" className="Link" style={{color: '/' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>메인</Link>
                        </div>
                        <div>
                            <Link to="/history" className="Link"  style={{color: '/history' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>경기 기록</Link>
                        </div>
                        <div>
                            <Link to="/rank" className="Link"  style={{color: '/rank' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>순위</Link>
                        </div>
                        <div>
                            <Link to="/info" className="Link"  style={{color: '/info' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>팀별 정보</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            { !props.logined && <Link to="/login" className="Link">로그인</Link> }
                            { props.logined && 
                                <>
                                    <div className="Link" onClick={clickLogOut}>로그아웃</div> 
                                    <div>{ props.accounts.name }</div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </TopmenuWrapper>
            <Outlet />
        </>
        
    )
}

export default Topmenu;