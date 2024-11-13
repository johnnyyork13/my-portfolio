import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import MenuBarNotepad from "./MenuBarNotepad";

export default function NotepadEmpty(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "Notepad")?.maximize || false);
    }, [props.openedDialogBoxes])


    return (
        <NotepadContainer $maximized={isMaximized}>
            <MenuBarNotepad />
            <NotepadBody $maximized={isMaximized} defaultValue={""} style={{fontFamily: "Courier Prime"}}></NotepadBody>
        </NotepadContainer>
    )
}

const NotepadContainer = styled.div<({$maximized: boolean})>`
    width: ${props => props.$maximized ? "100%" : "700px"};
    height: ${props => props.$maximized ? "100%" : "400px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    @media (max-width: 1025px) {
        width: ${props => props.$maximized ? "100%" : "550px"};
        height: ${props => props.$maximized ? "100%" : "300px"};
    }
`

const NotepadBody = styled.textarea<({$maximized: boolean})>`
    position: relative;
    box-sizing: border-box;
    width: ${props => props.$maximized ? "99.5%" : "99%"};
    height: 100%;
    resize: none;
    overflow: scroll;
    padding: 5px;
    font-size: 1.2rem;
`