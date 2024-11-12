import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DialogBoxInterface } from "../interfaces/default";
import myResume from '../assets/JohnnyYorkResume.pdf';

export default function Icon(props: {
    img: string, 
    name: string, 
    coords: number[], 
    setIsDragging: Function, 
    isDragging: {dragging: boolean, icon: string, coords: number[]},
    selected: any
    setOpenedDialogBoxes: Function,
}) {

    const iconRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const onFocus = () => {setIsFocused(true)};
    const onBlur = () => {setIsFocused(false)};
    const [iconSelected, setIconSelected] = useState(false);

    //check if the icon is selected, if so, add the 'icon-focused' class
    useEffect(() => {
        setIconSelected(() => {
            for (const key in props.selected) {
                if (props.selected[key].name === props.name) {
                    return true;
                }
            }
            return false;
        })
    }, [props.selected])

    //drag event handler for the icon
    function handleMouseDragEvent(e: any) {
        const img = new Image();
        img.src = props.img;
        e.dataTransfer.setDragImage(img, 0, 0);
        props.setIsDragging({
            dragging: true,
            icon: props.name,
            img: props.img,
            coords: props.coords,
        })
    }

    //double click event handler for the icon. If the icon is the resume icon, it opens the resume in a new tab
    //otherwise, it opens a new dialog box if it isn't already open
    function handleIconDoubleClick() {
        if (props.name === "my-resume.pdf") {
            window.open(myResume);
            return;
        }
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            //make sure the dialog box isn't already open
            const newDialog = {title: props.name, status: "open", isFocused: true, icon: props.img, position: {x: 0, y: 0}};
            let updatedDialogs = [];
            let dialogBoxExists = false;
            for (let i = 0; i < prev.length; i++) {
                if (prev[i].title === props.name) {
                    updatedDialogs.push({...prev[i], status: "open", isFocused: true});
                    dialogBoxExists = true;
                } else {
                    updatedDialogs.push({...prev[i], isFocused: false});
                }
            }
            return dialogBoxExists ? updatedDialogs : [...updatedDialogs, newDialog];
        })
    }

    //load and unload the event listeners for the icon
    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.addEventListener("dragstart", handleMouseDragEvent)
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
    z-index: 10;
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