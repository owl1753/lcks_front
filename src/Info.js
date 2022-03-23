import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    .Info>div{
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

const Info = (props) => {
    return (
        <InfoWrapper>
            {
                props.teams.map((team) => {
                    return (
                      <>
                      <div className="Info">
                        <div>
                            <div className="Info_Left">
                                <img src={ team.logo_url } alt={ team.name }/>
                                <div>{ team.name }</div>
                            </div>
                            <div className="Info_Right">
                                <pre>{ team.info }</pre>
                            </div>
                        </div>
                      </div>
                      <div></div>
                      <hr />
                      </>
                    )
                })
            }    
        </InfoWrapper>
    )
}

export default Info;