
import folderIcon from '../../assets/folder.png'
import driveIcon from '../../assets/drive_disk.png'
import opticalIcon from '../../assets/drive_optical.png'

import { DialogBoxBodyContainer, DialogIcon, DialogIcons, DialogIconsHeader, MainDialogIconContainer } from "../../styled-components/main";
import { DialogBoxInterface } from '../../interfaces/default';
import { useEffect, useState } from 'react';

export default function MyComputerContent(props: {
    isMaximized: boolean,
    selectedIcon: string,
    handleIconClick: (e: any, name: string) => void,
    handleIconDoubleClick: (e: any, path: string[]) => void,
}) {

    return (
        <MainDialogIconContainer $maximized={props.isMaximized}>
                    <DialogIconsHeader>
                        <p>Files Stored on this Computer</p>
                        <div></div>
                    </DialogIconsHeader>
                    <DialogIcons>
                        {/* <DialogIcon
                            onClick={(e) => props.handleIconClick(e, 'Shared Documents')}
                            
                            $selected={props.selectedIcon === 'Shared Documents' ? true : false}>
                            <img src={folderIcon} alt="Folder" />
                            <p>Shared Documents</p>
                        </DialogIcon> */}
                        <DialogIcon
                            onClick={(e) => props.handleIconClick(e, 'My Documents')}
                            onDoubleClick={(e) => props.handleIconDoubleClick(e, ['My Computer', 'C:\\My Documents'])}
                            $selected={props.selectedIcon === 'My Documents' ? true : false}>
                            <img src={folderIcon} alt="Folder" />
                            <p>My Documents</p>
                        </DialogIcon>
                    </DialogIcons>
                    <DialogIconsHeader>
                        <p>Hard Disk Drives</p>
                        <div></div>
                    </DialogIconsHeader>
                    <DialogIcons>
                        <DialogIcon
                            onClick={(e) => props.handleIconClick(e, 'Local Disk')}
                            
                            $selected={props.selectedIcon === 'Local Disk' ? true : false}>
                            <img src={driveIcon} alt="Hard Drive" />
                            <p>{'Local Disk (C:)'}</p>
                        </DialogIcon>
                    </DialogIcons>
                    <DialogIconsHeader>
                        <p>Devices with Removable Storage</p>
                        <div></div>
                    </DialogIconsHeader>
                    <DialogIcons>
                        <DialogIcon
                            onClick={(e) => props.handleIconClick(e, 'CD Drive')}
                            
                            $selected={props.selectedIcon === 'CD Drive' ? true : false}>
                            <img src={opticalIcon} alt="CD Drive" />
                            <p>{'CD Drive (D:)'}</p>
                        </DialogIcon>
                    </DialogIcons>
                </MainDialogIconContainer>
    )
}