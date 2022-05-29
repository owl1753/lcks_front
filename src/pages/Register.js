import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
    &{
        color: #E8E8E8;
        font-size: 20px;
    }
    .RegisterBox{
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
    .RegisterBox>div:not(:last-child){
        margin-bottom: 2em;
    }
    .RegisterBox>div:not(:last-child)>div{
        padding-left: 5px;
        padding-bottom: 5px;
    }
    .RegisterBox>div>input{
        border: 0px;
        width: 300px;
        height: 30px;
        font-size: 22px;
        -webkit-user-select:text; 
        -moz-user-select:text; 
        -ms-user-select:text; 
        user-select:text
    }
    .RegisterBox>div>input:focus{
        outline: none;
    }
    .RegisterBox>div:last-child{
        display: flex;
        justify-content: flex-end;
    }
    .RegisterBox>div:last-child{
        display: flex;
        justify-content: center;
    }
    .RegisterBox>div:last-child>div{
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

const Register = (props) => {
    const [userAccount, setUserAccount] = useState(
        {
            email: '',
            name: '',
            password: '',
            re_password: '',
        }
    );

    const [error, setError] = useState(
        {
            email: '',
            name: '',
            password: '',
            re_password: '',
        }
    );

    const navigate = useNavigate();

    const onChangeAccount = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value,
        });
    }

    const fetchRegister = async () => {
        await axios.post('/accounts/register/', userAccount)
        .then((response) => {
            props.setAccount(response.data);
            props.setLogined(true);
            sessionStorage.setItem("userAccount", JSON.stringify(response.data));
            navigate('/')
        }).catch((e) => {
            setError(e.response.data);
        });
    }

    return (
        <RegisterWrapper>
            <div className="RegisterBox">
                <div>
                    <div>이메일</div>
                    <input name="email" type="email" spellCheck={ false } onChange={ onChangeAccount }/>
                    { error.email !== '' && <div className="error-message">{ error.email }</div>}
                </div>
                <div>
                    <div>닉네임</div>
                    <input name="name" type="text" spellCheck={ false } onChange={ onChangeAccount }/>
                    { error.name !== '' && <div className="error-message">{ error.name }</div>}
                </div>
                <div>   
                    <div>비밀번호</div>
                    <input name="password" type="password" onChange={ onChangeAccount }/>
                    { error.password !== '' && <div className="error-message">{ error.password }</div>}
                </div>
                <div>   
                    <div>비밀번호 확인</div>
                    <input name="re_password" type="password" onChange={ onChangeAccount }/>
                    { error.re_password !== '' && <div className="error-message">{ error.re_password }</div>}
                </div>
                <div>
                    <div>
                        <button className="Button" onClick={ fetchRegister }>회원가입</button>
                        <Link className="Link" to="/login"><button className="Button">로그인하기</button></Link>
                    </div>
                </div>
            </div>
        </RegisterWrapper>
    )
}

export default Register;