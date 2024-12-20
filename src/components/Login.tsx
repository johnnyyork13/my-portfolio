import styled from "styled-components"
import userImageIcon from '../assets/start-menu/user-image.png';
import windowsLoginLogo from '../assets/xp-logo-transparent.png';
import shutdownIcon from '../assets/start-menu/turn-off.png';
import logoffSound from '../assets/sounds/logoff.wav';

export default function Login(props: {
    setShowLogin: Function,
    initialLogin: boolean,
    allowAudio: boolean,
}) {

    return (
        <LoginContainer>
            {!props.initialLogin && props.allowAudio && <audio src={logoffSound} autoPlay></audio>}
            <LargeBlueBorder></LargeBlueBorder>
            <GradientDivider />
            <LoginBody>
                <RadialGradient />
                <LoginSectionLeft>
                    <img src={windowsLoginLogo} alt="windows-login-logo" />
                    <p>To begin, click on your user name</p>
                </LoginSectionLeft>
                <Divider />
                <LoginSectionRight>
                    <User onClick={() => props.setShowLogin(false)}>
                        <img src={userImageIcon} alt="user" />
                        <p>Johnny York</p>
                    </User>
                </LoginSectionRight>
            </LoginBody>
            <GradientDivider />
            <LargeBlueBorder>
                <ShutdownButton>
                    <img src={shutdownIcon} alt="turn-off" />
                    <p>Turn off computer</p>
                </ShutdownButton>
                <div>
                    <p>All images and audio are property of Microsoft. </p>
                    <p>This application was designed to showcase my abilities and is not for profit. Happy Nostalgia!</p>
                </div>
            </LargeBlueBorder>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
`

const LargeBlueBorder = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgb(0, 47, 156);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    div {
        margin-right: 50px;
        p {
            font-size: .9rem;
            margin-top: 3px;
            text-align: right;
        }
    }
    position: relative;
    z-index: 2;
`

const LoginBody = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgb(91, 125, 221);
    display: flex;
    justify-content: space-between;
    position: relative;
`

const RadialGradient = styled.div`
    position: absolute;
    top: -80px;
    left: -80px;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgb(142, 175, 237) 0%, rgb(91, 125, 221) 70%, rgb(91, 125, 221) 100%);
`

const LoginSection = styled.div`
    width: 50%;
    display: flex;
    display: relative;
    z-index: 3;
`

const LoginSectionLeft = styled(LoginSection)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: white;
    img {
        height: 150px;
    }
    p {
        font-size: 1.1rem;
        margin-top: 15px;
        font-weight: bold;
    }
`

const LoginSectionRight = styled(LoginSection)`
    align-items: center;
`

const Divider = styled.div`
    height: 100%;
    width: 2px;
    margin-left: 50px;
    margin-right: 50px;
    background: linear-gradient(to bottom, rgba(190, 128, 218, 0.1) 0%, rgba(192, 220, 255, 0.5) 25%, rgba(168, 199, 255, 0.7) 50%, rgba(192, 220, 255, 0.5) 75%, rgba(90, 128, 218, 0.01) 100%) content-box;
`   
const GradientDivider = styled.div`
    height: 6px;
    background: linear-gradient(to right, rgb(90, 128, 218) 0%, rgb(192, 220, 255) 25%, rgb(168, 199, 255) 50%, rgb(192, 220, 255) 75%, rgb(90, 128, 218) 100%) content-box;
    position: relative;
    z-index: 2;
`

const User = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 10px;
    padding-right: 50px;
    border-radius: 10px;
    p {
        margin-left: 10px;
        font-size: 1.2rem;
        cursor: default;
    }
    img {
        border: 2px solid white;
        border-radius: 5px;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    &:active {
        transform: translate(1px, 1px);
    }
`

const ShutdownButton = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 30px;
        margin-right: 10px;
    }
    img:hover {
        filter: brightness(1.2);
    }
    img:active {
        transform: translate(1px, 1px);
    }
    p {
        font-size: 1.2rem;
    }
    margin-left: 50px;
`

