import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Selection(props: {
    isDragging: {dragging: boolean, icon: string, coords: number[]}
    isSelecting: boolean,
    setIsSelecting: Function,
    selectionStart: number[],
    setSelectionStart: Function,
    currentSelectionPosition: number[],
    setCurrentSelectionPosition: Function,
}) {

    const boxRef = useRef<HTMLDivElement>(null);
    // const [stopSelection, setStopSelection] = useState(false);
    // const [startPosition, setStartPosition] = useState<number[]>([]);
    // const [currentPosition, setCurrentPosition] = useState<number[]>([]);
    // const [adjustPosition, setAdjustPosition] = useState({
    //     width: 0,
    //     height: 0,
    //     left: 0 as any,
    //     top: 0 as any,
    // });
    // const [stopPosition, setStopPosition] = useState<number[]>([]);


    function getMouseClickPosition(e: MouseEvent) {
        props.setIsSelecting(true);
        props.setSelectionStart([e.clientX, e.clientY]);
        boxRef.current!.style.visibility = "visible";
        // boxRef.current!.style.display = "block";
        // console.log("START", [e.clientX, e.clientY]);
        // return [e.clientX, e.clientY]
    }

    function getMouseMovePosition(e: MouseEvent) {
        props.setCurrentSelectionPosition([e.clientX, e.clientY]);
        // console.log("MOVING", [e.clientX, e.clientY]);
        // return [e.clientX, e.clientY]
    }

    function getStopSelectionPosition(e: MouseEvent) {
        props.setIsSelecting(false);
        props.setSelectionStart([]);
        props.setCurrentSelectionPosition([]);
        boxRef.current!.style.width = "0px";
        boxRef.current!.style.height = "0px";
        boxRef.current!.style.left = "0px";
        boxRef.current!.style.top = "0px";
        boxRef.current!.style.visibility = "hidden";
        // console.log("STOP", [e.clientX, e.clientY]);
        // return [e.clientX, e.clientY]
    }

    useEffect(() => {
        if (boxRef.current && !props.isDragging.dragging) {
            document.addEventListener("mousedown", getMouseClickPosition);
            if (props.isSelecting) {
                document.addEventListener("mousemove", getMouseMovePosition);
                document.addEventListener("mouseup", getStopSelectionPosition);
            }
        } else if (props.isDragging.dragging) {
            boxRef.current!.style.visibility = "hidden";
            props.setSelectionStart([]);
            props.setCurrentSelectionPosition([]);
            // boxRef.current!.style.visibility = "hidden";
        }
        return () => {
            document.removeEventListener("mousedown", getMouseClickPosition);
            document.removeEventListener("mousemove", getMouseMovePosition);
            document.removeEventListener("mouseup", getStopSelectionPosition);
        }
    }, [props.isDragging.dragging, props.isSelecting])

    useEffect(() => {
        if (!props.isDragging.dragging) {
            let adjustPosition = ({
                width: 0,
                height: 0,
                left: 0 as any,
                top: 0 as any,
            });
            if (props.selectionStart.length > 0 && props.currentSelectionPosition[0] > 2 && props.currentSelectionPosition[1] > 2 &&
                props.currentSelectionPosition[0] < window.innerWidth - 2 && props.currentSelectionPosition[1] < window.innerHeight - 2
            ) {
                const [x, y] = props.selectionStart;
                boxRef.current!.style.left = x + "px";
                boxRef.current!.style.top = y + "px";
                
            }
            if (props.currentSelectionPosition.length > 0 && props.currentSelectionPosition[0] > 2 && props.currentSelectionPosition[1] > 2 &&
                props.currentSelectionPosition[0] < window.innerWidth - 2 && props.currentSelectionPosition[1] < window.innerHeight - 2
            ) {
                const [x, y] = props.currentSelectionPosition;
                if (x > props.selectionStart[0] && y > props.selectionStart[1]) {
                    adjustPosition = ({
                        width: x - props.selectionStart[0],
                        height: y - props.selectionStart[1],
                        left: false,
                        top: false,
                    })
                } else if (x < props.selectionStart[0] && y < props.selectionStart[1]) {
                    adjustPosition = ({
                        width: props.selectionStart[0] - x,
                        height: props.selectionStart[1] - y,
                        left: x,
                        top: y, 
                    })
                } else if (x < props.selectionStart[0] && y > props.selectionStart[1]) {
                    adjustPosition = ({
                        width: props.selectionStart[0] - x,
                        height: y - props.selectionStart[1],
                        left: x,
                        top: false,
                    })
                } else if (x > props.selectionStart[0] && y < props.selectionStart[1]) {
                    adjustPosition = ({
                        width: x - props.selectionStart[0],
                        height: props.selectionStart[1] - y,
                        left: false,
                        top: y,
                    })
                }
                boxRef.current!.style.width = adjustPosition.width + "px";
                boxRef.current!.style.height = adjustPosition.height + "px";
                if (adjustPosition.left) {
                    boxRef.current!.style.left = adjustPosition.left + "px";
                }
                if (adjustPosition.top) {
                    boxRef.current!.style.top = adjustPosition.top + "px";
                }
            }
        } 
        
    }, [props.selectionStart, props.currentSelectionPosition])

    

    // useEffect(() => {
    //     const selectionBox = document.createElement("div");
    //     selectionBox.classList.add("selection-box");
    //     document.body.appendChild(selectionBox);
    //     return () => {
    //         document.body.removeChild(selectionBox);
    //     }
    // }, [])

    // console.log("CHECK", startPosition, currentPosition);

    return (
        <Box ref={boxRef} className="selection-box">
        
        </Box>
    )
}

const Box = styled.div`

`