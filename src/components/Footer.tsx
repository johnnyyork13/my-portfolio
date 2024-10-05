import styled from 'styled-components';
import startMenu from '../assets/start-menu.png';
import TaskbarItem from './TaskbarItem';

import { DialogBoxInterface} from '../interfaces/default';

export default function Footer(props: {
    setOpenStartMenu: Function,
    setOpenedDialogBoxes: Function, 
    openedDialogBoxes: DialogBoxInterface[]
}) {

    function handleStartMenuClick(e: React.MouseEvent) {
        e.stopPropagation();
        props.setOpenStartMenu((prev: boolean) => !prev);
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                return {
                    ...dialog,
                    isFocused: false
                }
            })
        })
    }

    const mappedTaskbarItems = props.openedDialogBoxes.map((dialog: DialogBoxInterface, index: number) => {
        return <TaskbarItem 
                    key={index} 
                    dialog={dialog} 
                    setOpenedDialogBoxes={props.setOpenedDialogBoxes}  
                />
    })

    return (
        <FooterContainer className="window">
            <TaskBarItemsContainer className="title-bar">
                <TaskbarItems className="taskbar-container">
                    <StartMenu src={startMenu} alt="Start Menu" className="start-menu" onClick={handleStartMenuClick}/>
                    <TabContainer>
                        {mappedTaskbarItems}
                    </TabContainer>
                </TaskbarItems>
            </TaskBarItemsContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: -2px;
    left: -10px;
    width: 110%;
    z-index: 100;
`

const TaskBarItemsContainer = styled.div`
    height: 25px;
`

const TaskbarItems = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    width: 100%;
`

const TabContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    @media (min-width: 1400px) {
        display: flex;
        div {
            width: 200px;
        }
    }
`

const StartMenu = styled.img`
    height: 35px;
    margin-bottom: 0px; 
    margin-right: 8px;
    &:hover {
        filter: brightness(107%);
    }
    ::active {
    filter: brightness(85%);    
    }
`