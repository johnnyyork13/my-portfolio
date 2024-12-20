import { DialogIcon, DialogIcons, MainDialogIconContainer } from "../../styled-components/main"
import folderIcon from '../../assets/folder.png'
import { useEffect } from "react";

export default function MyDocumentsContent(props: {
    isMaximized: boolean,
    selectedIcon: string,
    handleIconClick: (e: any, name: string) => void,
    handleIconDoubleClick: (e: any, path: string[]) => void,
    setFileExplorerLoaded: Function
}) {

    useEffect(() => {
        props.setFileExplorerLoaded(true);
    }, [])

    return (
        <MainDialogIconContainer $maximized={props.isMaximized}>
            <DialogIcons>
                <DialogIcon
                    onClick={(e) => props.handleIconClick(e, 'My Projects')}
                    onDoubleClick={(e) => props.handleIconDoubleClick(e, ['My Computer', 'C:\\My Documents', 'C:\\My Documents\\My Projects'])}
                    $selected={props.selectedIcon === 'My Projects' ? true : false}>
                    <img src={folderIcon} alt="Folder" />
                    <p>My Projects</p>
                </DialogIcon>
            </DialogIcons>
        </MainDialogIconContainer>
    )
}