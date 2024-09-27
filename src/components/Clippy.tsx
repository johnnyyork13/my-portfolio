import styled, { keyframes } from 'styled-components';
import clippy from '../assets/clippy.png';
import { useEffect, useRef, useState } from 'react';

export default function Clippy(props: {
    url: string,
    setMovingClippy: Function,
    setShowClippy: Function,
}) {

    interface Message {
        role: string,
        content: string,
    }

    const clippyRef = useRef<HTMLImageElement>(null);


    const [userInput, setUserInput] = useState('');
    const [sendUserInput, setSendUserInput] = useState(true);
    const [updatedMessages, setUpdatedMessages] = useState<Message[]>([]); 
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        try {
            if (sendUserInput) {
                setUserInput('');
                setShowLoading(true);
                async function sendUserInputToAssistant() {
                    const url = props.url + "/clippy";
                    await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({updatedMessages: updatedMessages}),
                    }).then((res) => res.json())
                    .then((res) => {
                        setUpdatedMessages(res.updatedMessages);
                        setSendUserInput(false);
                        setShowLoading(false);
                    }).catch((err) => {
                        console.log(err)
                        setSendUserInput(false);
                    });
                }
                sendUserInputToAssistant();
            }
        } catch(err) {
            console.log(err);
        }
    }, [sendUserInput]) 
    

    function handleStartMovingDialogBox(e: React.MouseEvent) {
        props.setMovingClippy(true);
        if (clippyRef.current) {
            const dialog = clippyRef.current;
            const dialogRect = dialog!.getBoundingClientRect();
            const offsetX = e.clientX - dialogRect.left;
            const offsetY = e.clientY - dialogRect.top;

            function handleMouseMove(e: MouseEvent) {
                const PADDING = 15;
                if (e.clientX - offsetX < 0 || e.clientY - offsetY < 0) return;
                if (e.clientX - offsetX + dialogRect.width > window.innerWidth - PADDING || e.clientY - offsetY + dialogRect.height > window.innerHeight - PADDING) return;
                dialog!.style.left = e.clientX - offsetX + "px";
                dialog!.style.top = e.clientY - offsetY + "px";
            }

            function handleMouseUp() {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
    }

    function handleUserSubmitMessage() {
        setUpdatedMessages([...updatedMessages, {role: 'user', content: userInput}]);
        setSendUserInput(true);
    }

    const mappedResponse = updatedMessages.filter((response: {role: string, content: string}) => {
        return response.role === 'assistant';
    })

    return (
        <ClippyContainer ref={clippyRef} onMouseDown={handleStartMovingDialogBox}>
            <ChatContainer>
                <CloseClippy onClick={() => props.setShowClippy(false)}>X</CloseClippy>
                <ClippyText>
                    {!showLoading && mappedResponse.length > 0 && mappedResponse[mappedResponse.length - 1].content}
                    {showLoading && <p className="clippy-loading">
                        <div className="clippy-dot-one clippy-dot"></div>
                        <div className="clippy-dot-two clippy-dot"></div>
                        <div className="clippy-dot-three clippy-dot"></div>
                    </p>}
                </ClippyText>
                <UserInputContainer onSubmit={(e) => e.preventDefault()} onClick={(e) => console.log('here')}>
                    <UserInput tabIndex={0} value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                    <button type="submit" tabIndex={1} onClick={handleUserSubmitMessage}>Send</button>
                </UserInputContainer>
            </ChatContainer>
            <ClippyImage src={clippy} draggable={false} alt="Clippy"/>
        </ClippyContainer>
    )
}

const ClippyContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 11;
`

const ClippyImage = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
    z-index: 1;
`

const ChatContainer = styled.div`
    position: relative;
    z-index: 2;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    background-color: rgb(233, 240, 174);
    border-radius: 10px;
    box-shadow: rgb(114, 173, 233) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.5) 2px 3px 3px;
    margin-bottom: 20px;
`

const CloseClippy = styled.button`
    position: absolute;
    right: -20px;
    top: 0;
    background: none;
    border: none;
    font-weight: bolder;
    font-size: 1rem;
    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.01) !important;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.01) !important;
    }
    &:active {
        border: 1px solid rgba(0, 0, 0, 0.01) !important;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.01) !important;
        background: none !important;
    }
`

const UserInputContainer = styled.form`
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    input {
        width: 100%;
        border-bottom-left-radius: 10px;
    }
    button {
        border: .5px solid black;
        border-left: 0px solid black;
        border-bottom-right-radius: 10px;
        background: none;
        background-color: rgb(213, 220, 154);
    }
`

const ClippyText = styled.p`
    margin: 10px;
    font-weight: bolder;
`

const UserInput = styled.input`
    border: .5px solid black;
    padding-left: 5px;
`