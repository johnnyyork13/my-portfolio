import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';
import Icon from './Icon';
import { ReactHTMLElement, useEffect, useState } from "react";

export default function IconContainer(props: {
    icons: {img: string, name: string, coords: number[]}[], 
    setIcons: Function,
    setIsDragging: Function, 
    isDragging: {dragging: boolean, icon: string, coords: number[]}
    isSelecting: boolean
    selected: any
    }) {

    const arrangeIcons = () => {
        const GRID_COLUMNS = 15;
        const GRID_ROWS = 10;
        let grid = [];
        for (let y = 0; y < GRID_ROWS; y++) {
          let row = [];
          for (let x = 0; x < GRID_COLUMNS; x++) {
            if (props.icons.some(icon => icon.coords[0] === x && icon.coords[1] === y)) {
              // row.push(icons.find(icon => icon.coords[0] === x && icon.coords[1] === y));
              const icon = props.icons.find(icon => icon.coords[0] === x && icon.coords[1] === y);
              row.push(
                <Icon 
                  key={uuidv4()}
                  img={icon ? icon.img : ""} 
                  name={icon ? icon.name : ""} 
                  coords={icon ? icon.coords : []}
                  setIsDragging={props.setIsDragging}
                  isDragging={props.isDragging}
                  selected={props.selected}
                  />)
            } else {
              row.push(<div key={uuidv4()} className="empty-tile" draggable="false"></div>)
            }
          }
          grid.push(row);
        }
        return grid;
      }

    // useEffect(() => {
      
    // }, [props.icons])

    return (
        <Grid>
            {arrangeIcons()}
        </Grid>
    )
}

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(15, 1fr);
  border: 1px sold red;
`