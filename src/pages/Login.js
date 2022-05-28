import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginWrapper = styled.div`
    &{
        color: #E8E8E8;
        font-size: 20px;
    }
    .LoginBox{
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
    .LoginBox>div:not(:last-child){
        margin-bottom: 2em;
    }
    .LoginBox>div:not(:last-child)>div{
        padding-left: 5px;
        padding-bottom: 5px;
    }
    .LoginBox>div>input{
        border: 0px;
        width: 300px;
        height: 30px;
        font-size: 22px;
        -webkit-user-select:text; 
        -moz-user-select:text; 
        -ms-user-select:text; 
        user-select:text
    }
    .LoginBox>div>input:focus{
        outline: none;
    }
    .LoginBox>div:last-child{
        display: flex;
        justify-content: flex-end;
    }
    .LoginBox>div:last-child{
        display: flex;
        justify-content: center;
    }
    .LoginBox>div:last-child>div{
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
    .error-message{
        color: red;
        font-size: 14px;
    }
`

const Login = (props) => {
    const navigate = useNavigate();

    const [userAccount, setUserAccount] = useState(
        {
            email: '',
            password: '',
        }
    );

    const [error, setErorr] = useState('');

    const onChangeAccount = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value,
        });
    };

    const fetchLogin = async () => {
        await axios.post('/accounts/login/', userAccount)
        .then((response) => {
            props.setAccount(response.data);
            props.setLogined(true);
            sessionStorage.setItem("userAccount", JSON.stringify(response.data));
            navigate('/')
        }).catch((e) => {
            setErorr(e.response.data.message);
        });
    }

    return (
        <LoginWrapper>
            <div className="LoginBox">
                <div>
                    <div>이메일</div>
                    <input name="email" type="email" spellCheck={ false } onChange={ onChangeAccount }/>
                    { error === 'EmailDoesNotExist' && <div className="error-message">해당 이메일로 가입한 계정이 없습니다.</div>}
                </div>
                <div>   
                    <div>비밀번호</div>
                    <input name="password" type="password" onChange={ onChangeAccount }/>
                    { error === 'PassWordIsIncorrect' && <div className="error-message">비밀번호가 틀렸습니다.</div>}
                </div>
                <div>
                    <div>
                        <button className="Button" onClick={ fetchLogin }>로그인</button>
                        <Link className="Link" to="/register"><button className="Button">회원가입하기</button></Link>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    )
}

export default Login;