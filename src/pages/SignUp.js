import styled from "styled-components";
import { Link } from 'react-router-dom';

const SignUpWrapper = styled.div`
    &{
        color: #E8E8E8;
        font-size: 20px;
    }
    .SignUpBox{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: black;
        padding-top: 2em;
        padding-left: 2em;
        padding-right: 2em;
        border: 4px solid #E8E8E8;
    }
    .SignUpBox>div:not(:last-child){
        margin-bottom: 2em;
    }
    .SignUpBox>div:not(:last-child)>div{
        padding-left: 5px;
        padding-bottom: 5px;
    }
    .SignUpBox>div>input{
        border: 0px;
        width: 300px;
        height: 30px;
        font-size: 22px;
    }
    .SignUpBox>div>input:focus{
        outline: none;
    }
    .SignUpBox>div:last-child{
        display: flex;
        justify-content: flex-end;
    }
    .SignUpBox>div:last-child{
        display: flex;
        justify-content: center;
    }
    .SignUpBox>div:last-child>div{
        display: flex;
        padding-bottom: 1.5em;
    }
    .Link{
        width: 110px;
    }
    .Button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 40px;
        font-family: 'OTWelcomeBA';
        font-size: 16px;
        border: 3px solid #E8E8E8;
        background-color: black;
        color: #E8E8E8;
    }
    .Button:first-child{
        margin-right: 2em;
    }
    .Button:active{
        background-color: #E8E8E8;
        color: black;
    }
`

const SignUp = (props) => {
    return (
        <SignUpWrapper>
            <div className="SignUpBox">
                <div>
                    <div>아이디</div>
                    <input type="text" spellCheck={ false }/>
                </div>
                <div>   
                    <div>비밀번호</div>
                    <input type="password"/>
                </div>
                <div>   
                    <div>비밀번호 확인</div>
                    <input type="password"/>
                </div>
                <div>
                    <div>
                        <button className="Button">회원가입</button>
                        <Link className="Link" to="/login"><button className="Button">로그인하기</button></Link>
                    </div>
                </div>
            </div>
        </SignUpWrapper>
    )
}

export default SignUp;