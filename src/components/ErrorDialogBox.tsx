import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default";
import errorSound from '../assets/sounds/error.wav';

export default function ErrorDialogBox(props: {
    openedDialogBoxes: DialogBoxInterface[],
    setOpenedDialogBoxes: Function,
    setIsError: Function,
    message: string,
    errorRef: any,
    allowAudio: boolean,
}) {

    function handleErrorPropagation(e: any) {
        e.stopPropagation()
    }

    function removeErrorFromDialogBoxes() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.filter((dialog: DialogBoxInterface) => dialog.title !== 'Error');
        })
        props.setIsError(false);
    }

    return (
        <ErrorContainer onClick={(e) => handleErrorPropagation(e)}>
            {props.allowAudio && <audio ref={props.errorRef} src={errorSound} autoPlay></audio>}
            <Error>
                <p>{props.message}</p>
                <button onClick={removeErrorFromDialogBoxes}>Ok</button>
            </Error>
        </ErrorContainer>
    )
}

const ErrorContainer = styled.div`
    
`

const Error = styled.div`
    max-width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: 15px;
    }
`
