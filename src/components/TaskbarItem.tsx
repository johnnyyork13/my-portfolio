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
    // box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 3px;
    box-shadow: ${props => props.$isFocused ? '' : 'rgba(0, 0, 0, 0.3) -1px 0px inset, rgba(255, 255, 255, 0.2) 1px 1px 1px inset'};
    filter: brightness(110%);
    width: 150px;
    height: 20px;
    background: none;
    background-color: ${props => props.$isFocused ? `rgb(30, 82, 183)` : 'rgb(60, 129, 243)'};
    margin-left: 0px;
    padding-left: 10px;
    border-radius: 5px;
    color: white;
    &:hover {
        // background-color: rgb(53, 118, 243);
        cursor: default;  
    }
    ${props => props.$isFocused ? 'border-left: 2px solid rgba(0,0,0,.4);' : ''}
`

const Title = styled.p`
`