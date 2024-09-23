import styled from 'styled-components';
import startMenu from '../assets/start-menu.png';
import TaskbarItem from './TaskbarItem';

import { DialogBoxInterface} from '../interfaces/default';

export default function Footer(props: {setOpenedDialogBoxes: Function, openedDialogBoxes: DialogBoxInterface[]}) {

    const mappedTaskbarItems = props.openedDialogBoxes.map((dialog: DialogBoxInterface, index: number) => {
        return <TaskbarItem key={index} dialog={dialog} setOpenedDialogBoxes={props.setOpenedDialogBoxes} />
    })

    return (
        <FooterContainer className="window">
            <TaskBarItemsContainer className="title-bar">
                <TaskbarItems>
                    <StartMenu src={startMenu} alt="Start Menu" className="start-menu" />
                    {mappedTaskbarItems}
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
`

const TaskBarItemsContainer = styled.div`
    height: 25px;
`

const TaskbarItems = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
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