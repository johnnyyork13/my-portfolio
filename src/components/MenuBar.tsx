import styled from "styled-components"
import { BlackRightArrow, DialogBoxHeader, Divider } from "../styled-components/main"

export default function MenuBar() {

    return (
        <DialogBoxHeader>
                <HeaderSection>
                    <p>File</p>
                    <HeaderDropdown>
                        <p>Create Shortcut</p>
                        <p>Delete</p>
                        <p>Rename</p>
                        <p>Properties</p>
                        <DividerHorizontal />
                        <p>Close</p>
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
                        <p>Paste Shortcut</p>
                        <DividerHorizontal />
                        <p>Copy to Folder...</p>
                        <p>Move to Folder...</p>
                        <DividerHorizontal />
                        <p>Select All</p>
                        <p>Invert Selection</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>View</p>
                    <HeaderDropdown>
                        <DropdownWithArrow>
                            <p>Toolbars</p>
                            <BlackRightArrow />
                        </DropdownWithArrow>
                        <p>Status Bar</p>
                        <DropdownWithArrow>
                            <p>Explorer Bar</p>
                            <BlackRightArrow />
                        </DropdownWithArrow>
                        <DividerHorizontal />
                        <p>Thumbnails</p>
                        <p>Tiles</p>
                        <p>Icons</p>
                        <p>List</p>
                        <p>Details</p>
                        <DividerHorizontal />
                        <DropdownWithArrow>
                            <p>Arrange Icons By</p>
                            <BlackRightArrow />
                        </DropdownWithArrow>
                        <DividerHorizontal />
                        <p>Choose Details...</p>
                        <DropdownWithArrow>
                            <p>Go To</p>
                            <BlackRightArrow />
                        </DropdownWithArrow>
                        <p>Refresh</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Favorites</p>
                    <HeaderDropdown>
                        <p>Add to Favorites...</p>
                        <p>Organize Favorites...</p>
                        <DividerHorizontal />
                        <DropdownWithArrow>
                            <p>Links</p>
                            <BlackRightArrow />
                        </DropdownWithArrow>
                        <p>Johnnyyork.dev</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Tools</p>
                    <HeaderDropdown>
                        <p>Map Network Drive...</p>
                        <p>Disconnect Network Drive...</p>
                        <DividerHorizontal />
                        <p>Synchronize</p>
                        <p>Folder Options...</p>
                    </HeaderDropdown>
                </HeaderSection>
                <HeaderSection>
                    <p>Help</p>
                    <HeaderDropdown>
                        <p>Help and Support Center</p>
                        <DividerHorizontal />
                        <p>About Windows XP</p>
                    </HeaderDropdown>
                </HeaderSection>
            </DialogBoxHeader>
    )
}

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

const DropdownWithArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        margin-right: 20px;
    }
`