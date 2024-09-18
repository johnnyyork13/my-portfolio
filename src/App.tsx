import './App.css'
import {v4 as uuidv4} from 'uuid';
import { Wallpaper, Window } from 'react-windows-xp';
import styled from 'styled-components';
import IconContainer from './components/IconContainer';
import Selection from './components/Selection';
import Footer from './components/Footer';

//icon image imports
import myComputer from './assets/my-computer.png';
import myPictures from './assets/my-pictures.png';
import notepad from './assets/notepad.png';
import email from './assets/email.png';

import { useEffect, useRef, useState } from 'react';

function App() {

  const appRef = useRef<HTMLDivElement>(null);

  const [icons, setIcons] = useState([
    {img: myComputer, name: "My Computer", coords: [0,0]},
    {img: myPictures, name: "My Pictures", coords: [0,1]},
    {img: notepad, name: "Notepad", coords: [0,2]},
    {img: email, name: "Email", coords: [0,3]},

  ])
  const [isDragging, setIsDragging] = useState({
    dragging: false,
    icon: "",
    coords: []
  });

  function calculateCoords(e: MouseEvent) {
    const GRID_COLUMNS = 15;
    const GRID_ROWS = 10;
    const x = Math.floor(e.clientX / window.innerWidth * GRID_COLUMNS);
    const y = Math.floor(e.clientY / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    return [x, y];
  }

  function handleMouseMove(e: MouseEvent) {
    setIcons(() => {
      let newIcons = [...icons];
      for (const key in newIcons) {
        if (newIcons[key].name === isDragging.icon) {
          //check if icon already exists in new position
          let overlappingIcon = null;
          const mouseCoordinates = calculateCoords(e);

          for (const key in newIcons) {
            if (newIcons[key].name !== isDragging.icon && 
              newIcons[key].coords[0] === mouseCoordinates[0] &&
              newIcons[key].coords[1] === mouseCoordinates[1])
            {
              overlappingIcon = newIcons[key];
            }
          }
          if (!overlappingIcon) {
            newIcons[key].coords = mouseCoordinates;
          } else {
            newIcons[key].coords = overlappingIcon.coords;
            overlappingIcon.coords = isDragging.coords;
          }
          setIsDragging({
            dragging: false,
            icon: "",
            coords: []
          })
        }
      }
      return newIcons;
    })
  }

  useEffect(() => {
    if (isDragging.dragging) {
      document.addEventListener("dragend", handleMouseMove)
    }
    return () => {
      document.removeEventListener("dragend", handleMouseMove)
    }
  }, [isDragging])

  return (
    <MainContainer ref={appRef}>
      <Selection />
      <Wallpaper className="background-wallpaper" fullScreen={true} draggable="false"/> 
      <IconContainer icons={icons} setIcons={setIcons} isDragging={isDragging} setIsDragging={setIsDragging} />
      <Footer />
    </MainContainer>
  )
}


const MainContainer = styled.div`
  width: 100%;
  height: 90%;
`


export default App
