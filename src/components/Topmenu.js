import React from 'react';
import styled from "styled-components";

const TopmenuWrapper = styled.div`
    .topmenu{
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
    .topmenu>div>div>a{
        display: flex;
        justify-content: center;
        line-height: 86px;
        color: #E8E8E8;
        width: 100%;
    }
    .topmenu>div>div>a:hover{
        color: #4169E1 !important;
    }
`

const Topmenu = (props) => {
    return (
        <TopmenuWrapper>
            <div className="topmenu">
                <div>
                    <div>
                        <a style={{color: 'Main' === props.nowPage ? '#4169E1' : '#E8E8E8'}} href='/'>메인</a>
                    </div>
                    <div>
                        <a style={{color: 'History' === props.nowPage ? '#4169E1' : '#E8E8E8'}} href='/history'>경기 기록</a>
                    </div>
                    <div>
                        <a style={{color: 'Rank' === props.nowPage ? '#4169E1' : '#E8E8E8'}} href='/rank'>순위</a>
                    </div>
                    <div>
                        <a style={{color: 'Info' === props.nowPage ? '#4169E1' : '#E8E8E8'}} href='/info'>팀별 정보</a>
                    </div>
                </div>
            </div>
        </TopmenuWrapper>
    )
}

export default Topmenu;