import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DialogBoxInterface } from "../interfaces/default";

export default function DialogBox(props: {
    title: string, 
    titleImage: string,
    setIsDragging: Function, 
    children: any, 
    setOpenedDialogBoxes: Function,
    openedDialogBoxes: DialogBoxInterface[],
    currentPath? : string[],
    isError?: boolean,
    setIsError?: Function,
}) {

    const dialogRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    function handleCloseDialogBox() {
        if (props.isError) {
            props.setIsError && props.setIsError(false);
        }
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.filter((dialog: DialogBoxInterface) => dialog.title !== props.title);
        })
    }
    
    function handleStartMovingDialogBox(e: React.MouseEvent) {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.title) {
                    return {...dialog, isFocused: true};
                }
                return {...dialog, isFocused: false};
            })
        })
        if (dialogRef.current) {
            props.setIsDragging({
                dragging: true,
                icon: "dialog",
                coords: [-1, -1]
            });
            const dialog = dialogRef.current.parentElement;
            const dialogRect = dialog!.getBoundingClientRect();
            const offsetX = e.clientX - dialogRect.left;
            const offsetY = e.clientY - dialogRect.top;

            function handleMouseMove(e: MouseEvent) {
                const PADDING = 15;
                if (e.clientX - offsetX < 0 || e.clientY - offsetY < 0) return;
                if (e.clientX - offsetX + dialogRect.width > window.innerWidth - PADDING || e.clientY - offsetY + dialogRect.height > window.innerHeight - PADDING) return;
                dialog!.style.left = e.clientX - offsetX + "px";
                dialog!.style.top = e.clientY - offsetY + "px";
            }

            function handleMouseUp() {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
    }

    function handleMinimizeDialogBox() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.title) {
                    return {...dialog, status: "minimized", isFocused: false};
                }
                return dialog;
            })
        });
    }

    function handleMaximizeDialogBox() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.title) {
                    return {...dialog, maximize: !dialog.maximize}
                }
                return dialog;
            })
        })
        if (dialogRef.current) {
            const dialog = dialogRef.current.parentElement;
            if (dialog) {
                if (dialog.style.width === "100%") {
                    dialog.style.width = "fit-content";
                    dialog.style.height = "fit-content";
                    dialog.style.left = "25%";
                    dialog.style.top = "25%";
                } else {
                    dialog.style.width = `100%`;
                    dialog.style.height = `${window.innerHeight - 30}px`;
                    dialog.style.left = "0";
                    dialog.style.top = "0";
                }
            }
        }
    }

    function handleFocusDialogBox() {        
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.title && dialog.status !== "minimized") {
                    return {...dialog, isFocused: true};
                }
                return {...dialog, isFocused: false};
            })
        })
    }

    useEffect(() => {
        if (props.openedDialogBoxes.length > 0) {
            setIsFocused(props.openedDialogBoxes.find(dialog => dialog.title === props.title)!.isFocused);
        }
    }, [props.openedDialogBoxes])


    return (
        <DialogBoxContainer 
            className="window dialog-email dialog-box" 
            draggable={false}
            onClick={handleFocusDialogBox}
            $isFocused={isFocused}
        >
            <TitleBar 
                className="title-bar" 
                ref={dialogRef} 
                onMouseDown={handleStartMovingDialogBox}
                draggable={false}
                $isFocused={isFocused}
            >
                <TitleBarText className="title-bar-text"><img src={props.titleImage} alt={props.title} />{props.title}</TitleBarText>
                <div className="title-bar-controls">
                    {!props.isError && <button aria-label="Minimize" onClick={handleMinimizeDialogBox}></button>}
                    {!props.isError && <button aria-label="Maximize" onClick={handleMaximizeDialogBox}></button>}
                    <button aria-label="Close" onClick={handleCloseDialogBox}></button>
                </div>
            </TitleBar>
            {props.children}
        </DialogBoxContainer>
    )
}

const DialogBoxContainer = styled.div<{ $isFocused: boolean }>`
    position: absolute;
    z-index: ${props => props.$isFocused ? 100 : 99} !important;
    display: flex;
    flex-direction: column;
`

const TitleBar = styled.div<{ $isFocused: boolean }>`
    background: ${props => props.$isFocused ? ";" : `linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%);`}
`

const TitleBarText = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
`
