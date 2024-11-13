import styled from "styled-components"
import DialogHeader from "./DialogHeader"
import { DialogBoxInterface } from "../interfaces/default"
import { DialogBoxBodyContainer, DialogIcon, MainDialogIconContainer } from "../styled-components/main"
import DialogSidebar from "./DialogSidebar"
import { useEffect, useState } from "react"

import controlPanelIcon from '../assets/control-panel.png';
import adobeIcon from '../assets/skill-svgs/adobe.svg';
import apiIcon from '../assets/skill-svgs/api.svg';
import cssIcon from '../assets/skill-svgs/css.svg';
import expressIcon from '../assets/skill-svgs/express.svg';
import figmaIcon from '../assets/skill-svgs/figma.svg';
import htmlIcon from '../assets/skill-svgs/html.svg';
import javascriptIcon from '../assets/skill-svgs/javascript.svg';
import linkuxIcon from '../assets/skill-svgs/linux.svg';
import mongoIcon from '../assets/skill-svgs/mongo.svg';
import networkingIcon from '../assets/skill-svgs/networking.svg';
import nodeIcon from '../assets/skill-svgs/node.svg';
import pythonIcon from '../assets/skill-svgs/python.svg';
import reactIcon from '../assets/skill-svgs/react.svg';
import reduxIcon from '../assets/skill-svgs/redux.svg';
import sqlIcon from '../assets/skill-svgs/sql.svg';
import styledIcon from '../assets/skill-svgs/styled.svg';
import typescriptIcon from '../assets/skill-svgs/typescript.svg';

export default function MySkills(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string>("");
    const [defaultView, setDefaultView] = useState<boolean>(true);

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Skills")?.maximize || false);
    }, [props.openedDialogBoxes])


    function handleIconClick (e: any, name: string) {
        e.stopPropagation();
        setSelectedIcon(name);
    }


    return (
        <MySkillsContainer onClick={() => setSelectedIcon("")}>
            <DialogHeader currentPath={['Control Panel']} setCurrentPath={Function()} pathHistory={[]} setPathHistory={Function()} pathIndex={-1} setPathIndex={Function()}/>
            <DialogBoxBodyContainer>
                <DialogSidebar alternate={true} handlerFunction={setDefaultView} handlerValue={defaultView}/>
                {defaultView && <ControlPanelIconsContainer $maximized={isMaximized}>
                    <Icon onClick={(e) => handleIconClick(e, "HTML")} $selected={selectedIcon === "HTML" ? true : false}>
                        <img src={htmlIcon} alt="HTML"/>
                        <p>HTML</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "CSS")} $selected={selectedIcon === "CSS" ? true : false}>
                        <img src={cssIcon} alt="CSS"/>
                        <p>CSS</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "JavaScript")} $selected={selectedIcon === "JavaScript" ? true : false}>
                        <img src={javascriptIcon} alt="JavaScript"/>
                        <p>JavaScript</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "React")} $selected={selectedIcon === "React" ? true : false}>
                        <img src={reactIcon} alt="React"/>
                        <p>React</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Redux")} $selected={selectedIcon === "Redux" ? true : false}>
                        <img src={reduxIcon} alt="Redux"/>
                        <p>Redux</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Node")} $selected={selectedIcon === "Node" ? true : false}>
                        <img src={nodeIcon} alt="Node"/>
                        <p>Node</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Express")} $selected={selectedIcon === "Express" ? true : false}>
                        <img src={expressIcon} alt="Express"/>
                        <p>Express.js</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "MongoDB")} $selected={selectedIcon === "MongoDB" ? true : false}>
                        <img src={mongoIcon} alt="MongoDB"/>
                        <p>MongoDB</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "SQL")} $selected={selectedIcon === "SQL" ? true : false}>
                        <img src={sqlIcon} alt="SQL"/>
                        <p>SQL</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "TypeScript")} $selected={selectedIcon === "TypeScript" ? true : false}>
                        <img src={typescriptIcon} alt="TypeScript"/>
                        <p>TypeScript</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Python")} $selected={selectedIcon === "Python" ? true : false}>
                        <img src={pythonIcon} alt="Python"/>
                        <p>Python</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Networking")} $selected={selectedIcon === "Networking" ? true : false}>
                        <img src={networkingIcon} alt="Networking"/>
                        <p>Networking</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "APIs")} $selected={selectedIcon === "APIs" ? true : false}>
                        <img src={apiIcon} alt="APIs"/>
                        <p>APIs</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Adobe")} $selected={selectedIcon === "Adobe" ? true : false}>
                        <img src={adobeIcon} alt="Adobe"/>
                        <p>Adobe</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Figma")} $selected={selectedIcon === "Figma" ? true : false}>
                        <img src={figmaIcon} alt="Figma"/>
                        <p>Figma</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Linux")} $selected={selectedIcon === "Linux" ? true : false}>
                        <img src={linkuxIcon} alt="Linux"/>
                        <p>Linux</p>
                    </Icon>
                    <Icon onClick={(e) => handleIconClick(e, "Styled Components")} $selected={selectedIcon === "Styled Components" ? true : false}>
                        <img src={styledIcon} alt="Styled Components"/>
                        <p>Styled Components</p>
                    </Icon>
                </ControlPanelIconsContainer>}
                {!defaultView && <ControlPanelIconsContainerCategoryView $maximized={isMaximized}>
                    <Watermark src={controlPanelIcon} alt="Control Panel" draggable={false}/>
                    <CategoryViewHeader>Pick a category</CategoryViewHeader>
                    <CategoryViewIconContainer>
                        <IconColumn>
                            <IconAlternate onClick={(e) => handleIconClick(e, "HTML")} $selected={selectedIcon === "HTML" ? true : false}>
                            <img src={htmlIcon} alt="HTML"/>
                            <p>HTML</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "CSS")} $selected={selectedIcon === "CSS" ? true : false}>
                                <img src={cssIcon} alt="CSS"/>
                                <p>CSS</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "JavaScript")} $selected={selectedIcon === "JavaScript" ? true : false}>
                                <img src={javascriptIcon} alt="JavaScript"/>
                                <p>JavaScript</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "React")} $selected={selectedIcon === "React" ? true : false}>
                                <img src={reactIcon} alt="React"/>
                                <p>React</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Redux")} $selected={selectedIcon === "Redux" ? true : false}>
                                <img src={reduxIcon} alt="Redux"/>
                                <p>Redux</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Node")} $selected={selectedIcon === "Node" ? true : false}>
                                <img src={nodeIcon} alt="Node"/>
                                <p>Node</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Express")} $selected={selectedIcon === "Express" ? true : false}>
                                <img src={expressIcon} alt="Express"/>
                                <p>Express.js</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "MongoDB")} $selected={selectedIcon === "MongoDB" ? true : false}>
                                <img src={mongoIcon} alt="MongoDB"/>
                                <p>MongoDB</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "SQL")} $selected={selectedIcon === "SQL" ? true : false}>
                                <img src={sqlIcon} alt="SQL"/>
                                <p>SQL</p>
                            </IconAlternate>
                        </IconColumn>
                        <IconColumn>    
                            <IconAlternate onClick={(e) => handleIconClick(e, "TypeScript")} $selected={selectedIcon === "TypeScript" ? true : false}>
                            <img src={typescriptIcon} alt="TypeScript"/>
                            <p>TypeScript</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Python")} $selected={selectedIcon === "Python" ? true : false}>
                                <img src={pythonIcon} alt="Python"/>
                                <p>Python</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Networking")} $selected={selectedIcon === "Networking" ? true : false}>
                                <img src={networkingIcon} alt="Networking"/>
                                <p>Networking</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "APIs")} $selected={selectedIcon === "APIs" ? true : false}>
                                <img src={apiIcon} alt="APIs"/>
                                <p>APIs</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Adobe")} $selected={selectedIcon === "Adobe" ? true : false}>
                                <img src={adobeIcon} alt="Adobe"/>
                                <p>Adobe</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Figma")} $selected={selectedIcon === "Figma" ? true : false}>
                                <img src={figmaIcon} alt="Figma"/>
                                <p>Figma</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Linux")} $selected={selectedIcon === "Linux" ? true : false}>
                                <img src={linkuxIcon} alt="Linux"/>
                                <p>Linux</p>
                            </IconAlternate>
                            <IconAlternate onClick={(e) => handleIconClick(e, "Styled Components")} $selected={selectedIcon === "Styled Components" ? true : false}>
                                <img src={styledIcon} alt="Styled Components"/>
                                <p>Styled Components</p>
                            </IconAlternate>
                        </IconColumn>
                    </CategoryViewIconContainer>
                </ControlPanelIconsContainerCategoryView>}
            </DialogBoxBodyContainer>
        </MySkillsContainer>
    )
}

const MySkillsContainer = styled.div`
    padding: 3px;
    padding-bottom: 0px;
    padding-top: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    * {
        cursor: default;
    }
`

const ControlPanelIconsContainer = styled(MainDialogIconContainer)`
    display: grid;
    grid-template-columns: repeat(auto-fill, 75px);
    grid-auto-rows: 100px;
`


const ControlPanelIconsContainerCategoryView = styled(MainDialogIconContainer)`
    padding-left: 20px;
    background-color: rgb(103, 122, 225);
    overflow-y: auto;
`

const Icon = styled(DialogIcon)`
    display: flex;
    flex-direction: column; 
    align-items: center;
    img {
        width: 48px;
        height: 48px;
    }
    p {
        margin-top: 5px;
        text-align: center;
    }
`

const CategoryViewHeader = styled.p`
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.8;
    color: white;
    grid-column: 1 / 3;
    grid-row: 1;
    margin-top: 25px;
`

const Watermark = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0.07;
    width: 300px;
    height: 300px;
    pointer-events: none;
`   

const IconAlternate = styled(DialogIcon)`
    flex-direction: row;
    img, p {
        background-color: rgba(0,0,0,0.01);
    }
    img {
        width: 32px;
        height: 32px;
        padding: 5px;
    }
    p {
        font-size: .9rem;
        font-weight: bold;
        text-wrap: nowrap;
        color: white;    
        &:hover {
            text-decoration: underline;
        }
    }
`

const CategoryViewIconContainer = styled.div`
    margin-top: 10px;
    position: relative;
    z-index: 3;
    display: flex;
`

const IconColumn = styled.div`
    &:last-child {
        margin-left: 100px;
    }
    @media (max-width: 1025px) {
        &:last-child {
            margin-left: 30px;
        }
    }
`