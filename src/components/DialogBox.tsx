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
    fileExplorerLoaded?: boolean,
    setFileExplorerLoaded?: Function,
}) {

    const mainRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [offsetPosition, setOffsetPosition] = useState({x: 0, y: 0});
    const [showDialogBox, setShowDialogBox] = useState(false);

    //delay update to prevent flickering
    useEffect(() => {
        setTimeout(() => {
            setShowDialogBox(true);
        }, 150);
    }, [])

    //sets the position of the dialog box when it is opened to the center of the screen
    useEffect(() => {
        if (mainRef.current && dialogRef.current) {
                const dialog = props.openedDialogBoxes.find(dialog => dialog.title === props.title);
                if (dialog?.position.x !== 0 && dialog?.position.y !== 0) {
                    setOffsetPosition(props.openedDialogBoxes.find(dialog => dialog.title === props.title)!.position);
                } else {
                    const x = (window.innerWidth - mainRef.current!.clientWidth) / 2;
                    const y = (window.innerHeight - mainRef.current!.clientHeight) / 2;
                    const stagger = props.openedDialogBoxes.length * 15;
                    //delay update to allow time for children to render so the dialog box width can be calculated
                    setTimeout(() => {
                        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
                        return prev.map((dialog: DialogBoxInterface) => {
                            if (dialog.title === props.title) {
                                return {...dialog, position: {
                                    x: x + stagger,
                                    y: y + stagger
                                }}
                            }
                            return dialog;
                            });
                        })
                    }, 100);
                if (props.fileExplorerLoaded !== undefined && props.setFileExplorerLoaded !== undefined) props.setFileExplorerLoaded(false); //resets the file explorer loaded state if it was used so the file explorer width can be recalculated
            }
        }
    }, [props.openedDialogBoxes, props.fileExplorerLoaded])

    function handleCloseDialogBox() {
        if (props.isError) {
            props.setIsError && props.setIsError(false);
        }
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.filter((dialog: DialogBoxInterface) => dialog.title !== props.title);
        })
    }
    
    //handles moving the dialog box around the screen
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
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            function handleMouseMove(e: MouseEvent) {
                const PADDING = 15;
                if (e.clientX - offsetX < 0 || e.clientY - offsetY < 0) return;
                if (e.clientX - offsetX + dialogRect.width > window.innerWidth - PADDING || e.clientY - offsetY + dialogRect.height > window.innerHeight - PADDING) return;
                dialog!.style.left = e.clientX - offsetX + "px";
                dialog!.style.top = e.clientY - offsetY + "px";
                x = e.clientX - offsetX;
                y = e.clientY - offsetY;
            }

            function handleMouseUp() {
                props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
                    return prev.map((dialog: DialogBoxInterface) => {
                        if (dialog.title === props.title) {
                            return {...dialog, position: {x: x, y: y}};
                        }
                        return dialog;
                    })
                })
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
    }

    //minimizes the dialog box to the taskbar
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

    //maximizes the dialog box to fit the screen
    function handleMaximizeDialogBox() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            return prev.map((dialog: DialogBoxInterface) => {
                if (dialog.title === props.title) {
                    return {...dialog, maximize: !dialog.maximize}
                }
                return dialog;
            })
        })
        // if (dialogRef.current) {
        //     const dialog = dialogRef.current.parentElement;
        //     if (dialog) {
        //         if (dialog.style.width === "100%") {
        //             dialog.style.width = "fit-content";
        //             dialog.style.height = "fit-content";
        //             dialog.style.left = "25%";
        //             dialog.style.top = "25%";
        //         } else {
        //             dialog.style.width = `100%`;
        //             dialog.style.height = `${window.innerHeight - 30}px`;
        //             dialog.style.left = "0";
        //             dialog.style.top = "0";
        //         }
        //     }
        // }
    }

    //focuses the dialog box when it is clicked on
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

    //sets the focus of the dialog box when it is opened
    useEffect(() => {
        if (props.openedDialogBoxes.length > 0) {
            setIsFocused(props.openedDialogBoxes.find(dialog => dialog.title === props.title)!.isFocused);
        }
    }, [props.openedDialogBoxes])

    return (
        <DialogBoxContainer 
            ref={mainRef}
            className="window dialog-email dialog-box"
            draggable={false}
            onClick={handleFocusDialogBox}
            $isFocused={isFocused}
            $offsetPosition={offsetPosition}
            $visible={showDialogBox}
        >
            <TitleBar 
                className="title-bar" 
                ref={dialogRef} 
                onMouseDown={handleStartMovingDialogBox}
                draggable={false}
                $isFocused={isFocused}
            >
                <TitleBarText className="title-bar-text">
                    <img src={props.titleImage} draggable={false} alt={props.title} />{props.title}
                </TitleBarText>
                <div className="title-bar-controls" draggable={false}>
                    {!props.isError && <button aria-label="Minimize" onClick={handleMinimizeDialogBox}></button>}
                    {!props.isError && <button aria-label="Maximize" onClick={handleMaximizeDialogBox}></button>}
                    <button aria-label="Close" onClick={handleCloseDialogBox}></button>
                </div>
            </TitleBar>
            {props.children}
        </DialogBoxContainer>
    )
}

const DialogBoxContainer = styled.div<{ $isFocused: boolean, $offsetPosition: {x: number, y: number}, $visible: boolean}>`
    position: absolute;
    left: ${props => props.$offsetPosition.x}px;
    top: ${props => props.$offsetPosition.y}px;
    z-index: ${props => props.$isFocused ? 100 : 99} !important;
    visibility: ${props => props.$visible ? "visible" : "hidden"};
    display: flex;
    flex-direction: column;
`

const TitleBar = styled.div<{ $isFocused: boolean }>`
    background: ${props => props.$isFocused ? ";" : `linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%);`}
    mouse-events: none;
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
