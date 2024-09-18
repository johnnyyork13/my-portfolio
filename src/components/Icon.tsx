import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Icon(props: {
    img: string, 
    name: string, 
    coords: number[], 
    setIsDragging: Function, 
    isDragging: {dragging: boolean, icon: string, coords: number[]}}) {

    const iconRef = useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {setIsFocused(true)};
    const onBlur = () => {setIsFocused(false)};

    function handleMouseDragEvent(e: any) {
        const img = new Image();
        img.src = props.img;
        e.dataTransfer.setDragImage(img, 0, 0);
        // e.dataTransfer.clearData();
        // e.dataTransfer.setData("text/plain", <p>{props.name}</p>);
        // e.dataTransfer.setData("text", props.name);
        props.setIsDragging({
            dragging: true,
            icon: props.name,
            img: props.img,
            coords: props.coords,
        })
    }

    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.addEventListener("dragstart", handleMouseDragEvent)
            // iconRef.current.addEventListener("mouseup", () => {
            //     iconRef.current?.removeEventListener("mousedown", handleMouseDragEvent);
            // })
        }
    }, [])

    return (
        <IconContainer 
            className={isFocused ? 'icon-focused' : ""} 
            tabIndex={0}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={iconRef}
            draggable="true"
        >
            <img src={props.img} alt={props.name} draggable="false"/>
            <p>{props.name}</p>
            
        </IconContainer>
    )
}

const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: default;
    p {
        margin-top: 10px;
        color: white;
        text-shadow: 1px 1px 1px black;
        padding: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
`