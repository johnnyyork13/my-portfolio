import styled, { keyframes } from "styled-components"
import windowsLoginLogo from '../assets/xp-logo-transparent.png';

export default function WindowsLoadingScreen() {



    return (
        <LoadingContainer>
            <LogoContainer>
                <img src={windowsLoginLogo} alt="windows-login-logo" />
                <LoadingBar>
                    <LoadingSquare $offset={0}></LoadingSquare>
                    <LoadingSquare $offset={11}></LoadingSquare>
                    <LoadingSquare $offset={22}></LoadingSquare>
                </LoadingBar>
            </LogoContainer>
            <Footer>
                <p>Copyright © Microsoft Corporation</p>
                <p>Microsoft<span>®</span></p>
            </Footer>
        </LoadingContainer>
    )
}

const loadingAnimation = keyframes`
    0%{
        transform: translateX(-30px);
    }
    100% {
        transform: translateX(170px);
    }
    
`

const LoadingContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 300px;
        margin-bottom: 50px;
    }
`

const LoadingBar = styled.div`
    height: 12px;
    width: 170px;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const LoadingSquare = styled.div<({$offset: number})>`
    width: 10px;
    height: 10px;
    margin-left: 1px;
    background-color: white;
    border-radius: 1px;
    background: linear-gradient(to bottom, #919AFF, #737CF1, #302EB5);
    animation: ${loadingAnimation} 3s infinite steps(24);
`

const Footer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
        margin-left: 20px;
        margin-right: 20px;
    }
    p:first-child {
        font-size: 1rem;
    }
    p:last-child {
        font-size: 1.5rem;
        display: flex;
        span {
            font-size: .5rem;
        }
        font-weight: bold;
    }
`