import React, { useState } from "react";
import styled from "styled-components";
import { getImage } from "../App";

const InfoContentsWrapper = styled.div`
    &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 40px;
        color: #E8E8E8;
    }
    .Info_Left{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
    }
    .Info_Left>img{
        width: 100px;
        height: 100px;
    }
    .Info_Left>div{
        margin-top: 20px;
    }
    .Info_Right{
        padding-right: 3%;
    }
    .Info_Right>pre{
        font-family: 'OTWelcomeBA';
        line-height : 200%;
    }
`



const InfoContents = (props) => {

    const [loaded, setLoad] = useState(false);

    return (
        <InfoContentsWrapper>
            <div>
                <div className="Info_Left">
                    <img style={ loaded ? {} : { visibility: 'hidden' }} onLoad={ () => setLoad(true) } src={ getImage(props.team.name) } alt={ props.team.name }/>
                    <div>{ props.team.name }</div>
                </div>
                <div className="Info_Right">
                    <pre>{ props.team.info }</pre>
                </div>
            </div>
        </InfoContentsWrapper>
    )
}

export default InfoContents;