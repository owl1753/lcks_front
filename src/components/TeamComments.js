import React, { useState } from "react";
import styled from "styled-components";

const TeamCommentsWrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Comment-box {
        border: 0.5px solid #E8E8E8;
        background-color: #0D0D0D;
        width: 50%;
    }
    .Comment-box:first-child {
        border-top: 0.5px solid #E8E8E8 !important;
    }
    .Comment-box:last-child {
        border-top: none;
    }
    .Comment-author {
        padding: 2%;
        color: #E8E8E8;
        font-size: 18px;
        padding-top: 3%;
        padding-bottom: 0.5%;
    }
    .Comment-content {
        display: flex;
        padding: 2%;
        color: #E8E8E8;
        justify-content: space-between;
        align-items: center;
    }
    .Comment-content>textarea {
        width: 90.5%;
        height: 60px;
        font-size: 17px;
        border: none;
        resize: none;
        font-family: 'OTWelcomeBA';
        -webkit-user-select:text; 
        -moz-user-select:text; 
        -ms-user-select:text; 
        user-select:text
    }
    .Comment-content>div {
        display: flex;
        width: 65px;
        height: 60px;
        font-family: 'OTWelcomeBA';
        border: 2px solid #E8E8E8;
        justify-content: center;
        align-items: center;
        padding-top: 0.5%;
    }
    .Comment-content>div:hover {
        cursor: pointer;
        background-color: #E8E8E8;
        color: #0D0D0D;
        border: 2px solid #0D0D0D;
    }
`

const TeamComments = (props) => {
    return (
        <TeamCommentsWrapper>
            <div className="Comment-box">
                <div className="Comment-author">
                    블루드래곤
                </div>
                <div className="Comment-content">
                    <textarea className>
                    </textarea>
                    <div>
                        등록
                    </div>
                </div>
            </div>
            <div className="Comment-box">
                <div className="Comment-author">
                    전능하신아카라트여영원한빛으로날보호하소서
                </div>
                <div className="Comment-content">
                    전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서전능하신아카라트여영원한빛으로날보호하소서
                </div>
            </div>
        </TeamCommentsWrapper>
    )
}

export default TeamComments;