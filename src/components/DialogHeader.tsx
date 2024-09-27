import styled from "styled-components"
import { DialogBoxHeader } from "../styled-components/main"
import navBackIcon from '../assets/dialog-icons/nav_back.png'
import navForwardIcon from '../assets/dialog-icons/nav_forward.png'
import navParentIcon from '../assets/dialog-icons/nav_parent_dir.png'
import searchIcon from '../assets/dialog-icons/search.png'
import foldersIcon from '../assets/dialog-icons/folders.png'
import viewsIcon from '../assets/dialog-icons/views.png'
import monitorIcon from '../assets/dialog-icons/monitor.png'
import goIcon from '../assets/dialog-icons/go.png'
import selectArrow from '../assets/dialog-icons/select-arrow.png'

export default function DialogHeader(props: {
    currentPath: string[],
    setCurrentPath: Function,
    pathHistory: string[],
    setPathHistory: Function,
    pathIndex: number,
    setPathIndex: Function,
}) {

    function handleNavigateParent() {
        if (props.currentPath.length > 1) {
            props.setPathIndex((prev: number) => prev + 1);
            props.setPathHistory((prev: string[]) => [...prev, props.currentPath.slice(0, props.currentPath.length - 1)]);
            props.setCurrentPath((prev: string[]) => prev.slice(0, prev.length - 1));
        }
    }

    function handleNavigateBack() {
        if (props.pathIndex - 1 >= 0) {
            props.setCurrentPath(props.pathHistory[props.pathIndex - 1]);
            props.setPathIndex((prev: number) => prev - 1);
        }
    }

    function handleNavigateForward() {
        if (props.pathIndex + 1 <= props.pathHistory.length - 1) {
            props.setCurrentPath(props.pathHistory[props.pathIndex + 1]);
            props.setPathIndex((prev: number) => prev + 1);
        }
    }


    return (
        <DialogHeaderContainer>
            <ProjectHeader>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Favorites</p>
                <p>Tools</p>
                <p>Help</p>
            </ProjectHeader>
            <IconContainer>
                <Icon className={props.pathIndex > 0 ? "" : 'grayscale'} onClick={handleNavigateBack}>
                    <img src={navBackIcon} alt="back" />
                    <p>Back</p>
                </Icon>
                <DropDownArrow />
                <Icon className={props.pathIndex + 1 <= props.pathHistory.length -1 ? '' : 'grayscale'} onClick={handleNavigateForward}>
                    <img src={navForwardIcon} alt="forward" />
                    <p>Forward</p>
                </Icon>
                <DropDownArrow />
                <Icon className={props.currentPath.length > 1 ? "" : 'grayscale'} onClick={handleNavigateParent}>
                    <img src={navParentIcon} alt="parent"/>
                </Icon>
                <Divider />
                <Icon className="grayscale">
                    <img src={searchIcon} alt="search" />
                    <p>Search</p>
                </Icon>
                <Icon className="grayscale">
                    <img src={foldersIcon} alt="folders" />
                    <p>Folders</p>
                </Icon>
                <Divider />
                <Icon className="grayscale">
                    <img src={viewsIcon} alt="views" />
                    <DropDownArrow />
                </Icon>
            </IconContainer>
            <AddressBar>
                <p className="grayscale">Address</p>
                <FilePath>
                    <div>
                        <img src={monitorIcon} alt="monitor" />
                        <p>{props.currentPath[props.currentPath.length - 1]}</p>
                    </div>
                    <img src={selectArrow} alt="select" />
                </FilePath>
                <AddressIcon>
                    <img src={goIcon} alt="go" />
                    <p>Go</p>
                </AddressIcon>
            </AddressBar>
        </DialogHeaderContainer>
    )
}

const DialogHeaderContainer = styled.div`

`

const ProjectHeader = styled(DialogBoxHeader)`

`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`

const Icon = styled.div`
    border: 1px solid rgb(0,0,0,0.01);
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    img {
        margin-right: 5px;
    }
    &:hover {
        border: 1px solid rgb(0,0,0,0.1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 1px inset;
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
    > img {
        &:hover {
            filter: brightness(110%);
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