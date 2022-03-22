import React from 'react';

const Info = (props) => {
    return (
        <>
            {
                props.teams.map((team) => {
                    return (
                      <>
                      <div className="Info">
                        <div>
                            <div className="Info_Left">
                                <img src={ team.logo_url } />
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
            
        </>
    )
}

export default Info;