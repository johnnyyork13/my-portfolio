import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Icon(props: {
    img: string, 
    name: string, 
    coords: number[], 
    setIsDragging: Function, 
    isDragging: {dragging: boolean, icon: string, coords: number[]},
    selected: any
    setOpenedDialogBoxes: Function
}) {

    const iconRef = useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {setIsFocused(true)};
    const onBlur = () => {setIsFocused(false)};

    const [iconSelected, setIconSelected] = useState(false);

    useEffect(() => {
        // console.log('selected', props.selected);
        setIconSelected(() => {
            for (const key in props.selected) {
                if (props.selected[key].name === props.name) {
                    return true;
                }
            }
            return false;
        })
    }, [props.selected])

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

    function handleIconDoubleClick(e: MouseEvent) {
        props.setOpenedDialogBoxes((prev: string[]) => {
            if (!prev.includes(props.name)) {
                return [...prev, props.name];
            } else {
                return prev;
            }
        })
    }

    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.addEventListener("dragstart", handleMouseDragEvent)
            // iconRef.current.addEventListener("mouseup", () => {
            //     iconRef.current?.removeEventListener("mousedown", handleMouseDragEvent);
            // })
            iconRef.current.addEventListener("dblclick", handleIconDoubleClick);
        }
        return () => {
            iconRef.current?.removeEventListener("dblclick", handleIconDoubleClick)
        }
    }, [])

    return (
        <IconContainer 
            className={(isFocused || iconSelected) ? 'icon-focused' : ""} 
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
    text-align: center;
    align-items: center;
    cursor: default;
    position: relative;
    z-index: 100;
    p {
        margin-top: 10px;
        color: white;
        text-shadow: 1px 1px 1px black;
        padding: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        line-height: 15px;
    }
`