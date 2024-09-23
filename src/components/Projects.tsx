import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import { DialogBoxHeader } from "../styled-components/main";
import navBackIcon from '../assets/dialog-icons/nav_back.png'
import navForwardIcon from '../assets/dialog-icons/nav_forward.png'
import navParentIcon from '../assets/dialog-icons/nav_parent_dir.png'
import searchIcon from '../assets/dialog-icons/search.png'
import foldersIcon from '../assets/dialog-icons/folders.png'
import viewsIcon from '../assets/dialog-icons/views.png'
import monitorIcon from '../assets/dialog-icons/monitor.png'
import goIcon from '../assets/dialog-icons/go.png'
import selectArrow from '../assets/dialog-icons/select-arrow.png'
import htmlIcon from '../assets/dialog-icons/file_html.png'
import githubIcon from '../assets/dialog-icons/github-icon.svg'
import linkedInIcon from '../assets/dialog-icons/linkedin-icon.svg'

import DialogSidebar from "./DialogSidebar";

export default function Projects(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string>("");

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Projects")?.maximize || false);
    }, [props.openedDialogBoxes])

    function handleProjectIconClick(e: any, name: string) {
        e.stopPropagation();
        setSelectedIcon(name);
    }

    return (
        <ProjectContainer onClick={() => setSelectedIcon("")}>
            <ProjectHeader>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Favorites</p>
                <p>Tools</p>
                <p>Help</p>
            </ProjectHeader>
            <IconContainer>
                <Icon className="grayscale">
                    <img src={navBackIcon} alt="back" />
                    <p>Back</p>
                </Icon>
                <DropDownArrow />
                <Icon className="grayscale">
                    <img src={navForwardIcon} alt="forward" />
                    <p>Forward</p>
                </Icon>
                <DropDownArrow />
                <Icon>
                    <img src={navParentIcon} alt="parent" />
                </Icon>
                <Divider />
                <Icon>
                    <img src={searchIcon} alt="search" />
                    <p>Search</p>
                </Icon>
                <Icon className="grayscale">
                    <img src={foldersIcon} alt="folders" />
                    <p>Folders</p>
                </Icon>
                <Divider />
                <Icon>
                    <img src={viewsIcon} alt="views" />
                    <DropDownArrow />
                </Icon>
            </IconContainer>
            <AddressBar>
                <p className="grayscale">Address</p>
                <FilePath>
                    <div>
                        <img src={monitorIcon} alt="monitor" />
                        <p>C:\My Documents\My Projects</p>
                    </div>
                    <img src={selectArrow} alt="select" />
                </FilePath>
                <AddressIcon>
                    <img src={goIcon} alt="go" />
                    <p>Go</p>
                </AddressIcon>
            </AddressBar>
            <MainContainer>
                <DialogSidebar />
                <Main $maximized={isMaximized}>
                    <ProjectIconHeader>
                        <p>Project Links</p>
                        <div></div>
                    </ProjectIconHeader>
                    <ProjectIcons>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Ashley_Tarot.html')} 
                            onDoubleClick={() => window.open("https://ashleytarot.com/")}
                            $selected={selectedIcon === 'Ashley_Tarot.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Ashley_Tarot.html</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Bearbook.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/bearbook")}
                            $selected={selectedIcon === 'Bearbook.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Bearbook.html</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Vicewaves.html')} 
                            onDoubleClick={() => window.open("https://vicewaves.com")}
                            $selected={selectedIcon === 'Vicewaves.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Vicewaves.html</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Port_Folio.html')} 
                            onDoubleClick={() => window.open("")}
                            $selected={selectedIcon === 'Port_Folio.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Port_Folio.html</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Bloggy_AI.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/bloggyAI")}
                            $selected={selectedIcon === 'Bloggy_AI.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Bloggy_AI.html</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'Pokemon_Deck_Builder.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/pokemon-deck-builder")}
                            $selected={selectedIcon === 'Pokemon_Deck_Builder.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Pokemon_Deck_Builder.html</p>
                        </ProjectIcon>
                    </ProjectIcons>
                    <br />
                    <br />
                    <ProjectIconHeader>
                        <p>Social Links</p>
                        <div></div>
                    </ProjectIconHeader>
                    <ProjectIcons>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'GitHub.exe')} 
                            onDoubleClick={() => window.open("https://www.github.com/johnnyyork13")}
                            $selected={selectedIcon === 'GitHub.exe' ? true : false}>
                            <img src={githubIcon} alt="html" />
                            <p>GitHub.exe</p>
                        </ProjectIcon>
                        <ProjectIcon 
                            onClick={(e) => handleProjectIconClick(e, 'LinkedIn.exe')} 
                            onDoubleClick={() => window.open("https://www.linkedin.com/in/johnny-york")}
                            $selected={selectedIcon === 'LinkedIn.exe' ? true : false}>
                            <img src={linkedInIcon} alt="html" />
                            <p>LinkedIn.exe</p>
                        </ProjectIcon>
                    </ProjectIcons>
                </Main>
            </MainContainer>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    padding: 4px;
    padding-bottom: 0px;
    padding-top: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const ProjectHeader = styled(DialogBoxHeader)`

`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`

const Icon = styled.div`
    margin-right: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    img {
        margin-right: 5px;
    }
`

const DropDownArrow = styled.div`
    border-left: 3px solid rgb(200,200,200);
    border-bottom: 3px solid rgb(200,200,200);
    width: 4px;
    height: 4px;
    margin-left: 5px;
    margin-right: 5px;
    transform: rotate(-45deg);
    margin-left: 5px;
`

const Divider = styled.div`
    border-left: 1px solid rgb(200,200,200);
    width: 1px;
    height: 100%;
`

const AddressBar = styled.div`
    margin-top: 5px;
    padding-top: 3px;
    border-top: 1px solid rgb(200,200,200);
    height: 20px;
    display: flex;
    align-items: center;
    > p {
        margin-right: 5px;
        margin-left: 5px; 
    }
`

const FilePath = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    div {
        display: flex;
        align-items: center;
        img {
            height: 20px;
            width: 20px;
            margin-right: 7px;
        }
    }
`

const AddressIcon = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    img {
        margin-right: 5px;
    }
`

const MainContainer = styled.div`
    display: flex;
    height: 100%;
    border-top: 2px solid rgb(200,200,200);
`

const Main = styled.div<{ $maximized: boolean }>`
    width: 100%;
    height: 100%;
    background-color: white;
    padding-bottom: ${props => props.$maximized ? "0px" : "100px"};
`

const ProjectIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const ProjectIconHeader = styled.div`
    p {
        font-size: .8rem;
        font-weight: bold;
        margin: 5px;
        margin-bottom: 2px;
    }
    div {
        height: 1px;
        background: linear-gradient(to right, rgb(112, 191, 255) 0px, rgb(255, 255, 255) 100%);
    }
`

const ProjectIcon = styled.div<{ $selected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    margin-top: 10px;
    p {
        margin-top: 5px;
        padding: 5px;
        color: ${props => props.$selected ? "white" : "black"};
        background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
        cursor: default;
    }
    img {
        padding: 5px;
        width: 48px;
        height: 48px;
        background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
    }
    
`