import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import { DialogBoxHeader } from "../styled-components/main";

export default function Notepad(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "About_Me.txt")?.maximize || false);
    }, [props.openedDialogBoxes])

    const aboutMeText = `Hello! I'm Johnny York, and I am a growing full-stack developer. 

I enjoy building unique web applications that challenge my skills and creativity.

Currently, I am completing my final semester at Mercer University, where I am studying Software Application Development and Human-Computer Interaction.

When I'm not coding, I enjoy playing the piano, riding my motorcycle, and woodworking in my shop.

I look forward to connecting with you, and I hope you enjoy my portfolio! Thanks!

- Johnny
    `


    return (
        <NotepadContainer $maximized={isMaximized}>
            <NotepadHeader>
                <NotepadHeaderItem>File</NotepadHeaderItem>
                <NotepadHeaderItem>Edit</NotepadHeaderItem>
                <NotepadHeaderItem>Format</NotepadHeaderItem>
                <NotepadHeaderItem>View</NotepadHeaderItem>
                <NotepadHeaderItem>Help</NotepadHeaderItem>
            </NotepadHeader>
            <NotepadBody $maximized={isMaximized} defaultValue={aboutMeText}></NotepadBody>
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