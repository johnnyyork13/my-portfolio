import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";

export default function Notepad(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(() => {
        return props.openedDialogBoxes.find(dialog => dialog.title === "Notepad")?.maximize || false;
    });

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "Notepad")?.maximize || false);
    }, [props.openedDialogBoxes])

    return (
        <NotepadContainer $maximized={isMaximized}>
            <NotepadHeader>
                <NotepadHeaderItem>File</NotepadHeaderItem>
                <NotepadHeaderItem>Edit</NotepadHeaderItem>
                <NotepadHeaderItem>Format</NotepadHeaderItem>
                <NotepadHeaderItem>View</NotepadHeaderItem>
                <NotepadHeaderItem>Help</NotepadHeaderItem>
            </NotepadHeader>
            <NotepadBody $maximized={isMaximized}></NotepadBody>
        </NotepadContainer>
    )
}

const NotepadContainer = styled.div<({$maximized: boolean})>`
    min-width: 800px;
    height: ${props => props.$maximized ? "100%" : "500px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

const NotepadHeader = styled.div`
    width: 100%;
    height: 20px;
    margin-left: 15px;
    display: flex;
    padding: 6px;
    padding-bottom: 3px;
`

const NotepadHeaderItem = styled.p`
    font-size: .9rem;
    margin-right: 10px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
`

const NotepadBody = styled.textarea<({$maximized: boolean})>`
    position: relative;
    box-sizing: border-box;
    width: 99%;
    height: 100%;
    resize: none;
    overflow: scroll;
    padding: 5px;
`