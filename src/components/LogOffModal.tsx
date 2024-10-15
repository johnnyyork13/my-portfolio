import styled from "styled-components"
import switchUserButton from '../assets/switch-user.png';
import logOffButton from '../assets/log-off.png';
import shutdownButton from '../assets/turn-off-computer.png'
import restart from '../assets/restart.ico';
import windowsLogoSmall from '../assets/windows-logo-small.png';
import { useEffect } from "react";

export default function LogOffModal(props: {
    setMaxGrayscale: Function,
    setLogOffModal: Function,
    logOffModal: {show: boolean, modalType: string},
    setShowLogin: Function,
    setIsError: Function,
}) {

    useEffect(() => {
        props.setMaxGrayscale(true);
        return () => {
            props.setMaxGrayscale(false);
        }
    }, [])

    function handleButtonClick(showLogin: boolean) {
        props.setLogOffModal({show: false, modalType: ""});
        if (showLogin) {
            props.setShowLogin(true);
        }
    }

    function handleShutdownClick() {
        props.setIsError({status: true, message: "This feature is not available in my portfolio. Sorry!"});
    }

    return (
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Modal>
                <BlueBorder>
                    <p>Log Off Windows</p>
                    <img src={windowsLogoSmall} alt="windows-logo" />
                </BlueBorder>
                <Divider />
                {props.logOffModal.modalType === "logoff" && <ModalBody>
                    <ButtonContainer onClick={() => handleButtonClick(true)}>
                        <img src={switchUserButton} alt="switch-user" style={{border: '1px solid white'}}/>
                        <p>Switch User</p>
                    </ButtonContainer>
                    <ButtonContainer onClick={() => handleButtonClick(true)}>
                        <img src={logOffButton} alt="log-off" />
                        <p>Log Off</p>
                    </ButtonContainer>
                </ModalBody>}
                {props.logOffModal.modalType === "shutdown" && <ModalBody>
                    <ButtonContainer onClick={handleShutdownClick}>
                        <img src={shutdownButton} alt="standby" />
                        <p>Stand By</p>
                    </ButtonContainer>
                    <ButtonContainer onClick={handleShutdownClick}>
                        <img src={shutdownButton} alt="turn-off" />
                        <p>Turn Off</p>
                    </ButtonContainer>
                    <ButtonContainer onClick={handleShutdownClick}>
                        <img src={restart} alt="restart" />
                        <p>Restart</p>
                    </ButtonContainer>
                </ModalBody>}
                <Divider />
                <BlueBorder>
                    <div />
                    <button onClick={() => props.setLogOffModal({show: false, modalType: ""})}>Cancel</button>
                </BlueBorder>
            </Modal>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    mouse-events: none;
    * {
        filter: grayscale(0) !important;
    }
`

const Modal = styled.div`
    width: 300px;
    border: 1px solid black;
    background-color: rgb(91, 125, 221);
`

const BlueBorder = styled.div`
    background-color: rgb(0, 47, 156);
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: bolder;
    font-size: 1rem;
    padding-left: 10px;
    padding-right: 10px;
    img {
        height: 25px;
    }
    button {
        width: 50px !important;
        min-width: auto;
        min-height: auto;
        padding: 2px;
        border: 2px solid rgb(91, 125, 221);
    }
`

const Divider = styled.div`
    height: 2px;
    background: linear-gradient(to bottom, rgba(190, 128, 218, 0.1) 0%, rgba(192, 220, 255, 0.5) 25%, rgba(168, 199, 255, 0.7) 50%, rgba(192, 220, 255, 0.5) 75%, rgba(90, 128, 218, 0.01) 100%) content-box;
`

const ModalBody = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    margin-left: 25px;
    color: white;
    img {
        height: 25px;
        width: 25px;
        border-radius: 4px;
    }
    p {
        margin-top: 5px;
        font-weight: bold;
    }
    &:active {
        img {
            transform: translate(1px, 1px);
        }
    }
    img {
        &:hover {
            filter: brightness(1.2) !important;
        }
    }
`
