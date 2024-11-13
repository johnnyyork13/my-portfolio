import { useEffect } from "react"
import styled, { keyframes } from "styled-components"

export default function Popup(props: {
    popup: {show: boolean, text: string}
    setPopup: Function,
}) {

    useEffect(() => {
        setTimeout(() => {
            props.setPopup({show: false, text: ""});
        }, 10000)
    }, [])

    return (
        <PopupContainer>
            <PopupBody>
                <p>Double click here to bring back Clippy anytime.</p>
                <CloseButton onClick={() => props.setPopup((prev: {show: boolean, text: string}) => ({...prev, show: false}))}>X</CloseButton>
            </PopupBody>
            <TriangleShadow />
            <Triangle />
        </PopupContainer>
    )
}

const FadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const PopupContainer = styled.div`
    animation: ${FadeInOut} 10s ease;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 67px;
    right: 95px;
    background-color: rgb(233, 240, 174);
    border: 1px solid black;
    box-shadow: 3px 5px 1px 1px rgba(0, 0, 0, 0.5);
`

const PopupBody = styled.div`

`

const CloseButton = styled.div`
    position: absolute;
    top: 5px;
    right: 6px;
    background-color: rgba(210, 210, 210, .5);
    border: 1px solid rgba(210, 210, 210, 0.5);
    border-radius: 2px;
    color: rgba(130, 130, 130, 1);
    padding: 2px;
    cursor: default;
`

const Triangle = styled.div`
    position: absolute;
    bottom: -30px;
    left: 150px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 1px solid transparent;
    border-top: 30px solid rgb(233, 240, 174);
`

const TriangleShadow = styled(Triangle)`
    border-top: 30px solid rgba(0, 0, 0, 0.4);
    left: 153px;
`