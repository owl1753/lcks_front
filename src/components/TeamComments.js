import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
        font-size: 18px;
        border: none;
        resize: none;
        font-family: 'OTWelcomeBA';
        -webkit-user-select:text; 
        -moz-user-select:text; 
        -ms-user-select:text; 
        user-select:text;
    }
    .Comment-content>textarea:focus {
        outline: none;
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
    .Comment-warning {
        display: flex;
        justify-content: center;
        color: #E8E8E8;
        font-size: 20px;
        padding-top: 5%;
        padding-bottom: 4%;
    }
    .Blank{
        bottom: 0;
        width: 100vw;
        height: 90px;
    }
`

const TeamComments = (props) => {
    const textFieldRef = useRef(null);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const response = await axios.get('/api/comment/');
        const tempArray = [];

        for (let i = 1; i <= response.data.length; i++) {
            if (response.data[response.data.length - i].team_name === props.team_name){
                tempArray.push(response.data[response.data.length - i])
            }
        }
        setComments(tempArray);
        textFieldRef.current.value = "";
        setNewComment('');
      };

    useEffect(() => {
        getComments();
        
    }, [props.team_name])

    const onChangeNewComment = (e) => {
        setNewComment(e.target.value);
    }

    const AddComment = async () => {
        if (newComment === ''){
            return;
        }

        const temp = {
            'author_email': props.accounts.email,
            'team_name': props.team_name,
            'contents': newComment,
        };
        await axios.post('/api/addComment/', temp);
        getComments();

    }

    return (
        <TeamCommentsWrapper>
            <div className="Comment-box">
                { typeof props.accounts.name !== 'undefined' && 
                    <>
                        <div className="Comment-author">
                            { props.accounts.name } &#40;{ props.accounts.email }&#41;
                        </div>
                        <div className="Comment-content">
                            <textarea ref={ textFieldRef }onChange={ onChangeNewComment }>
                            </textarea>
                            <div onClick={ AddComment }>
                                등록
                            </div>
                        </div>
                    </>
                }
                { typeof props.accounts.name === 'undefined' && <div className="Comment-warning">댓글 작성은 로그인 후 가능합니다</div>}
            </div>
            {
                comments.map((comment) => {
                    return (
                        <div className="Comment-box">
                            <div className="Comment-author">
                                { comment.author_name } &#40;{ comment.author_email }&#41;
                            </div>
                            <div className="Comment-content">
                                { comment.contents }
                            </div>
                        </div>
                    )
                })
            }
            <div className="Blank"></div>
            
        </TeamCommentsWrapper>
    )
}

export default TeamComments;