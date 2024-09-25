import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";


import DialogHeader from "./DialogHeader";
import DialogSidebar from "./DialogSidebar";
import { DialogBoxBodyContainer, DialogIcon, DialogIcons, DialogIconsHeader, MainDialogIconContainer } from "../styled-components/main";
import ProjectsContent from "./dialog-content/ProjectsContent";

export default function ProjectsDialogBox(props: {
    openedDialogBoxes: DialogBoxInterface[],
    currentPath: string[],
    setCurrentPath: Function,
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string>("");

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Projects")?.maximize || false);
    }, [props.openedDialogBoxes])

    useEffect(() => {
        props.setCurrentPath(["C:\\My Documents\\My Projects"]);
    }, [])

    function handleProjectIconClick(e: any, name: string) {
        e.stopPropagation();
        setSelectedIcon(name);
    }

    return (
        <ProjectContainer onClick={() => setSelectedIcon("")}>
            <DialogHeader currentPath={props.currentPath} setCurrentPath={props.setCurrentPath}/>
            <DialogBoxBodyContainer>
                <DialogSidebar />
                <ProjectsContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleProjectIconClick={handleProjectIconClick} />
            </DialogBoxBodyContainer>
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
//     padding-bottom: ${props => props.$maximized ? "0px" : "100px"};
// `

// const ProjectIcons = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
// `

// const ProjectIconHeader = styled.div`
//     p {
//         font-size: .8rem;
//         font-weight: bold;
//         margin: 5px;
//         margin-bottom: 2px;
//     }
//     div {
//         height: 1px;
//         background: linear-gradient(to right, rgb(112, 191, 255) 0px, rgb(255, 255, 255) 100%);
//     }
// `

// const ProjectIcon = styled.div<{ $selected?: boolean }>`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 5px;
//     margin-top: 10px;
//     p {
//         margin-top: 5px;
//         padding: 5px;
//         color: ${props => props.$selected ? "white" : "black"};
//         background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
//         cursor: default;
//     }
//     img {
//         padding: 5px;
//         width: 48px;
//         height: 48px;
//         background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
//     }
    
// `