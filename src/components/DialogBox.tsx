import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function DialogBox(props: {title: string, setIsDragging: Function, children: any, setOpenedDialogBoxes: Function}) {

    const dialogRef = useRef<HTMLDivElement>(null);

    function handleCloseDialogBox() {
        props.setOpenedDialogBoxes((prev: string[]) => {
            return prev.filter((dialog: string) => dialog !== props.title);
        })
    }
    
    function handleStartMovingDialogBox(e: React.MouseEvent) {
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
                if (e.clientX - offsetX < 0 || e.clientY - offsetY < 0) return;
                if (e.clientX - offsetX + dialogRect.width > window.innerWidth - 10 || e.clientY - offsetY + dialogRect.height > window.innerHeight) return;
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

    return (
        <DialogBoxContainer 
            className="window dialog-email dialog-box" 
            draggable={false}
        >
            <div 
                className="title-bar" 
                ref={dialogRef} 
                onMouseDown={handleStartMovingDialogBox}
                draggable={false}
            >
                <TitleBarText className="title-bar-text">{props.title}</TitleBarText>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onClick={handleCloseDialogBox}></button>
                </div>
            </div>
            {props.children}
        </DialogBoxContainer>
    )
}

const DialogBoxContainer = styled.div`
    position: absolute;
    z-index: 101;
`

const TitleBarText = styled.div`
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`