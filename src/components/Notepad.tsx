import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import MenuBarNotepad from "./MenuBarNotepad";

export default function Notepad(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "about-me.txt")?.maximize || false);
    }, [props.openedDialogBoxes])

    const aboutMeText = `Hey, I'm Johnny York, a growing full-stack developer. 

I enjoy building unique web applications that challenge my skills and creativity.

Currently, I am completing my final semester at Mercer University, where I am studying Software Application Development and Human-Computer Interaction.

When I'm not coding, I enjoy the playing the piano, guitar, riding my motorcycle, and woodworking.

I like to think of myself as an extremely driven person, and although I have a lot to learn, I feel confident that I can be a valuable asset to any team.

I look forward to connecting with you, and I hope you enjoy my Windows XP-style portfolio! Thanks!

- Johnny
    `


    return (
        <NotepadContainer $maximized={isMaximized}>
            <MenuBarNotepad />
            <NotepadBody $maximized={isMaximized} defaultValue={aboutMeText} style={{fontFamily: "Courier Prime"}}></NotepadBody>
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