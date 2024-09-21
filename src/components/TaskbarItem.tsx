import styled from "styled-components"
import { DialogBoxInterface } from "../interfaces/default"
import { useEffect } from "react";

export default function TaskbarItem(props: {dialog: DialogBoxInterface, setOpenedDialogBoxes: Function}) {

    function toggleMinimizeDialogBox() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.dialog.title) {
                    if (dialog.isFocused) {
                        return {...dialog, isFocused: false, status: "minimized"};
                    } else {
                        return {...dialog, isFocused: true, status: "open"};
                    }
                }
                return {...dialog, isFocused: false};
            })
        })
    }

    // console.log(props.dialog);

    // useEffect(() => {
    //     console.log(props.dialog.title, props.dialog.isFocused);
    // }, [props.dialog.isFocused])

    return (
        <TaskBarItemContainer 
            className="title-bar" 
            onClick={toggleMinimizeDialogBox}
            $isFocused={props.dialog.isFocused}
        >
            <Title>{props.dialog.title}</Title>
        </TaskBarItemContainer>
    )
}

const TaskBarItemContainer = styled.div<{ $isFocused: boolean }>`
    width: 150px;
    height: 20px;
    // background-color: var(--xp-blue);
    filter: ${props => props.$isFocused ? `brightness(100%)` : `brightness(140%)`};
    box-shadow: ${props => props.$isFocused ? 
        `box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px !important;` :
        `box-shadow: none;`
    }
    margin-left: 0px;
    padding-left: 10px;
    border-radius: 5px;
    color: white;
    // background-color: var(--taskbar-default) !important;
    &:hover {
        filter: ${props => props.$isFocused? `100%;` : `brightness(160%) !important;`}   
    }
`

const Title = styled.p`
`