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
`

const Topmenu = (props) => {
    return (
        <TopmenuWrapper>
            <div className="topmenu">
                <div>
                    <div>
                        <a href='/'>메인</a>
                    </div>
                    <div>
                        <a href='/history'>경기 기록</a>
                    </div>
                    <div>
                        <a href='/rank'>순위</a>
                    </div>
                    <div>
                        <a href='/info'>팀별 정보</a>
                    </div>
                </div>
            </div>
        </TopmenuWrapper>
    )
}

export default Topmenu;