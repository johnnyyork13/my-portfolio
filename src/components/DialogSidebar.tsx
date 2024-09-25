import styled from "styled-components"

import viewSystemIcon from '../assets/dialog-icons/paper-check.ico'
import addRemoveIcon from '../assets/dialog-icons/add-remove-programs.png'
import controlPanelIcon from '../assets/dialog-icons/control-panel.png'
import networkPlacesIcon from '../assets/dialog-icons/network-places.png'
import myDocumentsIcon from '../assets/dialog-icons/my-documents.png'
import sharedDocumentsIcon from '../assets/dialog-icons/shared-documents.png'
import sidebarDropdownArrowIcon from '../assets/dialog-icons/sidebar-dropdown-arrow.png'

export default function DialogSidebar(){

    return (
        <Sidebar>
            <SidebarSection>
                <SidebarSectionHeader>
                    <p>System Tasks</p>
                    <img src={sidebarDropdownArrowIcon} alt="dropdown arrow" />
                </SidebarSectionHeader>
                <SidebarSectionBody>
                    <SidebarSectionItem>
                        <img src={viewSystemIcon} alt="view system" />
                        <p>View system information</p>
                    </SidebarSectionItem>
                    <SidebarSectionItem>
                        <img src={addRemoveIcon} alt="add remove programs" />
                        <p>Add or remove programs</p>
                    </SidebarSectionItem>
                    <SidebarSectionItem>
                        <img src={controlPanelIcon} alt="control panel" />
                        <p>Change a setting</p>
                    </SidebarSectionItem>
                </SidebarSectionBody>
            </SidebarSection>
            <SidebarSection>
                <SidebarSectionHeader>
                    <p>Other Places</p>
                    <img src={sidebarDropdownArrowIcon} alt="dropdown arrow" />
                </SidebarSectionHeader>
                <SidebarSectionBody>
                    <SidebarSectionItem>
                        <img src={networkPlacesIcon} alt="network places" />
                        <p>Network places</p>
                    </SidebarSectionItem>
                    <SidebarSectionItem>
                        <img src={myDocumentsIcon} alt="my documents" />
                        <p>My documents</p>
                    </SidebarSectionItem>
                    <SidebarSectionItem>
                        <img src={sharedDocumentsIcon} alt="shared documents" />
                        <p>Shared documents</p>
                    </SidebarSectionItem>
                    <SidebarSectionItem>
                        <img src={controlPanelIcon} alt="control panel" />
                        <p>Control panel</p>
                    </SidebarSectionItem>
                </SidebarSectionBody>
            </SidebarSection>
        </Sidebar>
    )
}

const Sidebar = styled.div`
    width: 210px;
    background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SidebarSection = styled.div`
    width: 90%;
    margin-top: 7px;
`

const SidebarSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    width: 100%;
    height: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: linear-gradient(to right, rgb(240, 240, 255) 0px, rgb(240, 240, 255) 30%, rgb(168, 188, 255) 100%);
    p {
        margin-left: 5px;
    }
    img {
        margin-right: 5px;
    }
`

const SidebarSectionBody = styled.div`
    background: linear-gradient(to right, rgb(180, 200, 251) 0%, rgb(164, 185, 251) 50%, rgb(180, 200, 251) 100%) rgba(198, 211, 255, 0.87);
    padding: 5px;
`

const SidebarSectionItem = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
    p {
        text-wrap: nowrap;
        margin-left: 5px;
        color: rgb(12, 50, 125);
        &:hover {
            filter: brightness(1.2);
            text-decoration: underline;
            cursor: pointer;
        }
    }
`