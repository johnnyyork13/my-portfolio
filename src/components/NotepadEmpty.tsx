import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import { DialogBoxHeader } from "../styled-components/main";

export default function NotepadEmpty(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);

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
            <NotepadBody $maximized={isMaximized} defaultValue={""}></NotepadBody>
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

const NotepadHeader = styled(DialogBoxHeader)`
    border-bottom: none;
    width: 100%;
    &:first-child {
        margin-left: 15px
    }
`

const NotepadHeaderItem = styled.p`
    font-size: .9rem;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
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