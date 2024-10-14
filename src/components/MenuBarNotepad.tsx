import styled from "styled-components"
import {DialogBoxHeader, Divider } from "../styled-components/main"

export default function MenuBarNotepad() {

    return (
        <NotepadDialogBoxHeader>
                <HeaderSection>
                    <p>File</p>
                    <HeaderDropdown>
                        <p>New</p>
                        <p>Open...</p>
                        <p>Save</p>
                        <p>Save As...</p>
                        <DividerHorizontal />
                        <p>Page Setup...</p>
                        <p>Print...</p>
                        <DividerHorizontal />
                        <p>Exit</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Edit</p>
                    <HeaderDropdown>
                        <p>Undo</p>
                        <DividerHorizontal />
                        <p>Cut</p>
                        <p>Copy</p>
                        <p>Paste</p>
                        <p>Delete</p>
                        <DividerHorizontal />
                        <p>Find...</p>
                        <p>Find Next</p>
                        <p>Replace...</p>
                        <p>Go To...</p>
                        <DividerHorizontal />
                        <p>Select All</p>
                        <p>Time/Date</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Format</p>
                    <HeaderDropdown>
                        <p>Word Wrap</p>
                        <p>Font...</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>View</p>
                    <HeaderDropdown>
                        <p>Status Bar</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Help</p>
                    <HeaderDropdown>
                        <p>Help Topics</p>
                        <p>About Notepad</p>                    
                    </HeaderDropdown>
                </HeaderSection>
            </NotepadDialogBoxHeader>
    )
}

const NotepadDialogBoxHeader = styled(DialogBoxHeader)`
    margin-left: 5px;
    margin-bottom: 0px;
`


const HeaderSection = styled.div`
    position: relative;
    &:hover div {
        visibility: visible;
    }
`

const HeaderDropdown = styled.div`
    visibility: hidden;
    position: absolute;
    background-color: white;
    z-index: 100;
    box-shadow: 1px 1px 0px 2px rgba(0,0,0,0.4);
    width: fit-content;
    p {
        display: flex;
        align-items: center;
        text-wrap: nowrap;
        padding-left: 15px;
        padding-right: 15px;
        color: rgb(160,160,160);
    }
    p, > div {
        &:hover {
            background-color: var(--xp-blue) !important;
            color: rgb(160,160,160);
        }
    }
`

const DividerHorizontal = styled(Divider)`
    width: 100%;
    height: 1px;
    background-color: rgb(200,200,200);
`