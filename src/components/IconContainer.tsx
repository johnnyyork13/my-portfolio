import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon';
import { useEffect, useState } from "react";
import { DialogBoxInterface } from "../interfaces/default";

export default function IconContainer(props: {
    icons: { img: string, name: string, coords: number[] }[],
    setIcons: Function,
    setIsDragging: Function,
    isDragging: { dragging: boolean, icon: string, coords: number[] },
    isSelecting: boolean,
    selected: any,
    setOpenedDialogBoxes: Function
}) {
    const [grid, setGrid] = useState<any>([]);

    function handleUnfocusDialogBoxes() {
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
          return prev.map((dialog: DialogBoxInterface) => {
            return {...dialog, isFocused: false};
          });
        });
}


    const arrangeIcons = () => {
        const GRID_COLUMNS = 15;
        const GRID_ROWS = 10;
        let newGrid = [];
        
        for (let y = 0; y < GRID_ROWS; y++) {
            let row = [];
            for (let x = 0; x < GRID_COLUMNS; x++) {
                const icon = props.icons.find(icon => icon.coords[0] === x && icon.coords[1] === y);
                
                if (icon) {
                    row.push(
                        <Icon 
                            key={`${icon.name}-${icon.coords.join('-')}`} // Use a stable key
                            img={icon.img} 
                            name={icon.name} 
                            coords={icon.coords}
                            setIsDragging={props.setIsDragging}
                            isDragging={props.isDragging}
                            selected={props.selected}
                            setOpenedDialogBoxes={props.setOpenedDialogBoxes} 
                        />
                    );
                } else {
                    row.push(<div key={`${x}-${y}`} onClick={handleUnfocusDialogBoxes} className="empty-tile" draggable="false"></div>);
                }
            }
            newGrid.push(row);
        }
        return newGrid;
    }

    useEffect(() => {
        setGrid(arrangeIcons());
    }, [props.icons, props.selected]); // Update only when icons change

    return (
        <Grid>
            {grid}
        </Grid>
    );
}

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(15, 1fr);
`;
