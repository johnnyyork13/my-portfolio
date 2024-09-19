import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function DialogBoxHeader(props: {title: string}) {

    const dialogRef = useRef<HTMLDivElement>(null);

    const [startPosition, setStartPosition] = useState<Number[]>([]);
    const [newPosition, setNewPosition] = useState<Number[]>([]);

    const [movingBox, setMovingBox] = useState(false);

    function handleStartMovingDialogBox(e: MouseEvent) {
        console.log('begin moving');
        setMovingBox(true);
        setStartPosition([e.clientX, e.clientY]);
    }

    function handleMoveDialogBox(e: MouseEvent) {
        console.log("CHECK MOVE", movingBox);
        if (!movingBox) return;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const dialogBoxX = dialogRef.current!.offsetLeft;
        const dialogBoxY = dialogRef.current!.offsetTop;
        dialogRef.current!.style.left = `${dialogBoxX + mouseX - startPosition[0]}px`;
        dialogRef.current!.style.top = `${dialogBoxY + mouseY - startPosition[1]}px`;
    }

    function handleStopMovingDialogBox(e: MouseEvent) {
        console.log('stop moving');
        setMovingBox(false);
        setStartPosition([]);
    }

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.addEventListener("mousedown", handleStartMovingDialogBox)
            dialogRef.current.addEventListener("mousemove", handleMoveDialogBox)
            dialogRef.current.addEventListener("mouseup", handleStopMovingDialogBox)
        }

        return () => {
            if (dialogRef.current)
            {
                dialogRef.current!.removeEventListener("mousedown", handleStartMovingDialogBox)
                dialogRef.current!.removeEventListener("mousemove", handleMoveDialogBox)
                dialogRef.current!.removeEventListener("mouseup", handleStopMovingDialogBox)
            }
        }
    }, [movingBox])

    return (
        <div className="window dialog-email dialog-box" ref={dialogRef}>
            <div className="title-bar">
                <div className="title-bar-text">{props.title}</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}