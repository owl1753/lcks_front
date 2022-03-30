import styled from "styled-components";

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
    .LoginBox>div:first-child{
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
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }
    .LoginBox>div:last-child>div>button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        font-family: 'OTWelcomeBA';
        font-size: 16px;
        border: 3px solid #E8E8E8;
        background-color: black;
        color: #E8E8E8;
    }
    .LoginBox>div:last-child>div>button:first-child{
        margin-right: 2em;
    }
    .LoginBox>div:last-child>div>button:active{
        background-color: #E8E8E8;
        color: black;
    }
`

const Login = (props) => {
    return (
        
        <LoginWrapper>
            <div className="LoginBox">
                <div>
                    <div>아이디</div>
                    <input type="text" spellCheck={ false }/>
                </div>
                <div>   
                    <div>비밀번호</div>
                    <input type="password"/>
                </div>
                <div>
                    <div>
                        <button>로그인</button>
                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    )
}

export default Login;