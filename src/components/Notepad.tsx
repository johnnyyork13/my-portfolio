import styled from "styled-components"

export default function Notepad() {

    return (
        <NotepadContainer>
            <NotepadHeader>
                <NotepadHeaderItem>File</NotepadHeaderItem>
                <NotepadHeaderItem>Edit</NotepadHeaderItem>
                <NotepadHeaderItem>Format</NotepadHeaderItem>
                <NotepadHeaderItem>View</NotepadHeaderItem>
                <NotepadHeaderItem>Help</NotepadHeaderItem>
            </NotepadHeader>
            <NotepadBody></NotepadBody>
        </NotepadContainer>
    )
}

const NotepadContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const NotepadBody = styled.textarea`
    box-sizing: border-box;
    width: 98%;
    height: 500px;
    resize: none;
    overflow: scroll;
    padding: 5px;
`