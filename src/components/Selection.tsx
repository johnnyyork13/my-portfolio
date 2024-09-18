import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Selection() {

    const boxRef = useRef<HTMLDivElement>(null);
    const [stopSelection, setStopSelection] = useState(false);

    useEffect(() => {
        const selectionBox = boxRef.current;
        if (selectionBox) {
            let isDragging = false;
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;
            let offsetLeft = 0;
            let offsetTop = 0;

            document.addEventListener("mousedown", (e) => {
                selectionBox.style.display = "block";
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                offsetLeft = selectionBox.offsetLeft;
                offsetTop = selectionBox.offsetTop;
            })

            document.addEventListener("mousemove", (e) => {
                if (isDragging) {
                    endX = e.clientX;
                    endY = e.clientY;
                    selectionBox.style.left = `${Math.min(startX, endX) - offsetLeft}px`;
                    selectionBox.style.top = `${Math.min(startY, endY) - offsetTop}px`;
                    selectionBox.style.width = `${Math.abs(startX - endX)}px`;
                    selectionBox.style.height = `${Math.abs(startY - endY)}px`;
                }
            })

            document.addEventListener("mouseup", () => {
                setStopSelection(false);
                selectionBox.style.display = "none";
            })
        }
        return () => {
            document.removeEventListener("mousedown", () => {});
            document.removeEventListener("mousemove", () => {});
            document.removeEventListener("mouseup", () => {});
        }
    }, [stopSelection])

    // useEffect(() => {
    //     const selectionBox = document.createElement("div");
    //     selectionBox.classList.add("selection-box");
    //     document.body.appendChild(selectionBox);
    //     return () => {
    //         document.body.removeChild(selectionBox);
    //     }
    // }, [])

    return (
        <Box ref={boxRef} className="selection-box">
        
        </Box>
    )
}

const Box = styled.div`

`