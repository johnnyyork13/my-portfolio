import styled, { keyframes } from "styled-components"

export default function LoadingDialogBox(props: {
    setShowLoadingBox: Function,
}) {

    return (
        <LoadingContainer className="window">
            <div className="title-bar">
                <div className="title-bar-text">Sending Message</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => props.setShowLoadingBox(false)}></button>
                </div>
            </div>
            <div className="window-body">
                <LoadingMessageContainer>
                    <p>Sending message...</p>
                    <LoadingBar>
                        <LoadingSquareContainer>
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                            <LoadingSquare />
                        </LoadingSquareContainer>
                    </LoadingBar>
                </LoadingMessageContainer>
                <MessageSentContainer>
                    <p>Message sent successfully!</p>
                    <button onClick={() => props.setShowLoadingBox(false)}>Close</button>
                </MessageSentContainer>
            </div>
        </LoadingContainer>
    )
}

const loadingAnimation = keyframes`
    0% {
        width: 10px;
    }
    30% {
        width: 20px;
    }
    70% {
        width: 70px;
    }
    100% {
        width: 170px;
    }
`

const showComplete = keyframes`
    0% {
        display: none;
    }
    99% {
        display: none;
    }
    100% {
        display: flex;
    }
`

const removeLoading = keyframes`
    0% {
        display: block;
    }
    98% {
        display: block;
    }
    100% {
        display: none;
    }
`

const LoadingMessageContainer = styled.div`
    animation: ${removeLoading} 5s forwards;
`

const LoadingContainer = styled.div`
    position: absolute;
    z-index: 102;
    left: 0;
    right: 0;
    top: 40%;
    margin-inline: auto;
    width: fit-content;
`

const LoadingBar = styled.div`
    height: 12px;
    width: 145px;
    border: 1px solid black;
    background-color: white;
    margin-top: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
`

const LoadingSquareContainer = styled.div`
    margin-top: 2px;
    height: 100%;
    overflow: hidden;
    animation: ${loadingAnimation} 5s forwards;
`

const LoadingSquare = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 1px;
    background: linear-gradient(to bottom, #ABEDAC 10%, #7BE37D 30%, #4EDA50 40%, #2ED331 70%, #75E277 100%);
`

const MessageSentContainer = styled.div`
    width: 100%;
    animation: ${showComplete} 5s forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin-top: 5px;
    }
    button {
        margin-top: 8px;
    }
`