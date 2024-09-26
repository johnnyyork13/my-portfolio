import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default";
import { createElement, useEffect, useRef } from "react";

export default function ErrorDialogBox(props: {
    openedDialogBoxes: DialogBoxInterface[],
    setOpenedDialogBoxes: Function,
    setIsError: Function,
}) {

    function handleErrorPropagation(e: any) {
        e.stopPropagation()
    }

    function removeErrorFromDialogBoxes() {
        props.setIsError && props.setIsError(false);
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.filter((dialog: DialogBoxInterface) => dialog.title !== 'Error');
        })
    }

    return (
        <ErrorContainer onClick={(e) => handleErrorPropagation(e)}>
            <Error>
                <p>There was an error. Please try again.</p>
                <button onClick={removeErrorFromDialogBoxes}>Ok</button>
            </Error>
        </ErrorContainer>
    )
}

const ErrorContainer = styled.div`
    
`

const Error = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: 15px;
    }
`
