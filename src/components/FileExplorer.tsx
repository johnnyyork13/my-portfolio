import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect, useState } from "react";
import DialogHeader from "./DialogHeader";
import { DialogBoxBodyContainer } from "../styled-components/main";
import DialogSidebar from "./DialogSidebar";
import MyComputerContent from "./dialog-content/MyComputerContent";
import MyDocumentsContent from "./dialog-content/MyDocumentsContent";
import ProjectsContent from "./dialog-content/ProjectsContent";


export default function FileExplorer(props: {
    openedDialogBoxes: DialogBoxInterface[],
    startPath: string[],
    reference: string,
    setOpenedDialogBoxes: Function,
    setIsError?: Function,
}) {

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string>("");
    const [pathHistory, setPathHistory] = useState<any>([]);
    const [currentPath, setCurrentPath] = useState<string[]>([]);
    const [pathIndex, setPathIndex] = useState<number>(0);

    function handleIconClick(e: any, name: string) {
        e.stopPropagation();
        setSelectedIcon(name);
    }

    function handleIconDoubleClick(e: any, path: string[]) {
        e.stopPropagation();
        setCurrentPath(path);
        setPathHistory((prev: string[]) => {
            const trimPath = prev.slice(0, pathIndex + 1);
            return [...trimPath, path];
        });
        setPathIndex((prev: number) => prev + 1);
    }

    useEffect(() => {
        if (props.reference === "My Computer") {
            setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Computer")?.maximize || false);
        } else if (props.reference === "My Projects") {
            setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "My Projects")?.maximize || false);
        }
    }, [props.openedDialogBoxes])

    useEffect(() => {
        setCurrentPath(props.startPath);
        setPathHistory([props.startPath]);
    }, [])

    return (
        <FileExplorerContainer onClick={() => setSelectedIcon("")}>
            <DialogHeader setPathIndex={setPathIndex} pathIndex={pathIndex} currentPath={currentPath} setCurrentPath={setCurrentPath} pathHistory={pathHistory} setPathHistory={setPathHistory}/>
            <DialogBoxBodyContainer>
                <DialogSidebar/>
                {currentPath[currentPath.length - 1] === "My Computer" && 
                    <MyComputerContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleIconClick={handleIconClick} handleIconDoubleClick={handleIconDoubleClick} setOpenedDialogBoxes={props.setOpenedDialogBoxes} setIsError={props.setIsError}/>}
                {currentPath[currentPath.length - 1] === `C:\\My Documents` && 
                    <MyDocumentsContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleIconClick={handleIconClick} handleIconDoubleClick={handleIconDoubleClick} />}
                {currentPath[currentPath.length - 1] === "C:\\My Documents\\My Projects" && 
                    <ProjectsContent isMaximized={isMaximized} selectedIcon={selectedIcon} handleIconClick={handleIconClick} />}
            </DialogBoxBodyContainer>
        </FileExplorerContainer>
    )
}

const FileExplorerContainer = styled.div`
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