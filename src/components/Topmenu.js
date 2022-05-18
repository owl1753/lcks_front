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
        min-width: 100px;
    }
    .topmenu-item{
        display: flex;
        justify-content: center;
        line-height: 86px;
        color: #E8E8E8;
        width: 100%;
    }
    .topmenu-item:hover{
        color: #4169E1 !important;
        cursor: pointer;
    }
    #user-name:hover{
        color: #E8E8E8 !important;
        cursor: auto;
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
                            <Link to="/" className="topmenu-item" style={{color: '/' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>메인</Link>
                        </div>
                        <div>
                            <Link to="/history" className="topmenu-item"  style={{color: '/history' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>경기 기록</Link>
                        </div>
                        <div>
                            <Link to="/rank" className="topmenu-item"  style={{color: '/rank' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>순위</Link>
                        </div>
                        <div>
                            <Link to="/info" className="topmenu-item"  style={{color: '/info' === nowPage.pathname ? '#4169E1' : '#E8E8E8'}}>팀별 정보</Link>
                        </div>
                    </div>
                    <div>
                        { !props.logined && 
                            <div>
                                <Link to="/login" className="topmenu-item">로그인</Link>
                            </div>
                        }
                        { props.logined && 
                            <>
                                <div>
                                    <div className="topmenu-item" id="user-name">{ props.accounts.name }</div>
                                </div>
                                <div>
                                    <div className="topmenu-item" onClick={clickLogOut}>로그아웃</div> 
                                </div>
                            </> 
                        }
                    </div>
                </div>
            </TopmenuWrapper>
            <Outlet />
        </>
        
    )
}

export default Topmenu;