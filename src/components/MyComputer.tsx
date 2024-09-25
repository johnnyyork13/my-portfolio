import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import DialogHeader from "./DialogHeader"
import DialogSidebar from "./DialogSidebar"
import { useEffect, useState } from "react";
import { DialogBoxBodyContainer, DialogIcon, DialogIcons, DialogIconsHeader, MainDialogIconContainer } from "../styled-components/main";
import MyComputerContent from "./dialog-content/MyComputerContent";
import MyDocumentsContent from "./dialog-content/MyDocumentsContent";
import ProjectsContent from "./dialog-content/ProjectsContent";

export default function MyComputer(props: {
    openedDialogBoxes: DialogBoxInterface[],
    currentPath: string[],
    setCurrentPath: Function,
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string>("");

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Computer")?.maximize || false);
    }, [props.openedDialogBoxes])

    useEffect(() => {
        props.setCurrentPath(["My Computer"]);
    }, [])

    function handleIconClick(e: any, name: string) {
        e.stopPropagation();
        setSelectedIcon(name);
    }

    function handleIconDoubleClick(e: any, path: string) {
        e.stopPropagation();
        props.setCurrentPath((prev: string[]) => [...prev, path]);
    }

    return (
        <MyComputerContainer onClick={() => setSelectedIcon('')}>
            <DialogHeader currentPath={props.currentPath} setCurrentPath={props.setCurrentPath}/>
            <DialogBoxBodyContainer>
                <DialogSidebar/>
                {props.currentPath[props.currentPath.length - 1] === "My Computer" && <MyComputerContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleIconClick={handleIconClick} handleIconDoubleClick={handleIconDoubleClick}/>}
                {props.currentPath[props.currentPath.length - 1] === `C:\\My Documents` && <MyDocumentsContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleIconClick={handleIconClick} handleIconDoubleClick={handleIconDoubleClick} />}
                {props.currentPath[props.currentPath.length - 1] === "C:\\My Documents\\My Projects" && <ProjectsContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleProjectIconClick={handleIconClick} />}
            </DialogBoxBodyContainer>
        </MyComputerContainer>
    )
}

const MyComputerContainer = styled.div`
    padding: 4px;
    padding-bottom: 0px;
    padding-top: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    * {
        cursor: default;
    }
`

// const MainContainer = styled.div`
//     display: flex;
//     height: 100%;
//     border-top: 2px solid rgb(200,200,200);
// `

// const Main = styled.div<{ $maximized: boolean }>`
//     width: 100%;
//     height: 100%;
//     background-color: white;
//     // padding-bottom: ${props => props.$maximized ? "0px" : "100px"};
// `