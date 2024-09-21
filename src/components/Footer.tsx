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
            <div className="title-bar">
                <TaskbarItems>
                    <img src={startMenu} alt="Start Menu" className="start-menu" />
                    {mappedTaskbarItems}
                </TaskbarItems>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: -2px;
    left: -10px;
    width: 110%;
`

const TaskbarItems = styled.div`
    display: flex;
    height: 40px;
    position: relative;
    z-index: 1;
    align-items: center;
`