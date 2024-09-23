import './App.css';
import { Wallpaper } from 'react-windows-xp';
import styled from 'styled-components';
import IconContainer from './components/IconContainer';
import Selection from './components/Selection';
import Email from './components/Email';
import Notepad from './components/Notepad';
import Projects from './components/Projects';
import DialogBox from './components/DialogBox';
import Footer from './components/Footer';
import StatusBar from './components/StatusBar';

// Icon image imports
import myComputer from './assets/my-computer.png';
import myPictures from './assets/my-pictures.png';
import notepad from './assets/notepad.png';
import email from './assets/email.png';

//interface imports
import { DialogBoxInterface } from './interfaces/default';

import { useEffect, useRef, useState } from 'react';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const [icons, setIcons] = useState([
    { img: myComputer, name: "My Computer", coords: [0, 0] },
    { img: myPictures, name: "My Projects", coords: [0, 1] },
    { img: notepad, name: "About_Me.txt", coords: [0, 2] },
    { img: email, name: "Email_Me.exe", coords: [0, 3] },
  ]);

  const [isDragging, setIsDragging] = useState({
    dragging: false,
    icon: "",
    coords: []
  });
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionStart, setSelectionStart] = useState<number[]>([]);
  const [selectionCurrentPosition, setSelectionCurrentPosition] = useState<number[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [openedDialogBoxes, setOpenedDialogBoxes] = useState<DialogBoxInterface[]>([]);

  function calculateCoords(e: MouseEvent) {
    const GRID_COLUMNS = 15;
    const GRID_ROWS = 10;
    const x = Math.floor(e.clientX / window.innerWidth * GRID_COLUMNS);
    const y = Math.floor(e.clientY / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    return [x, y];
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging.dragging) return; // Early exit if not dragging
    const newIcons = [...icons];
    const mouseCoordinates = calculateCoords(e);
    const iconToMoveIndex = newIcons.findIndex(icon => icon.name === isDragging.icon);

    if (iconToMoveIndex !== -1 && mouseCoordinates[0] >= 0 && mouseCoordinates[1] >= 0
      && mouseCoordinates[0] <= 14 && mouseCoordinates[1] <= 9
    ) {
      const overlappingIcon = newIcons.find((icon, index) =>
        index !== iconToMoveIndex &&
        icon.coords[0] === mouseCoordinates[0] &&
        icon.coords[1] === mouseCoordinates[1]
      );

      if (!overlappingIcon) {
        newIcons[iconToMoveIndex].coords = mouseCoordinates;
      } else {
        const tempCoords = newIcons[iconToMoveIndex].coords;
        newIcons[iconToMoveIndex].coords = overlappingIcon.coords;
        overlappingIcon.coords = tempCoords;
      }

      setIcons(newIcons);
      setIsDragging({dragging: false, icon: "", coords: []});
    }
  }

  function checkOpenedDialogBoxes(title: string) {
    for (let i = 0; i < openedDialogBoxes.length; i++) {
      if (openedDialogBoxes[i].title === title && openedDialogBoxes[i].status === "open") {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (isDragging.dragging) {
      const handleDragEnd = () => {
        setIsDragging({ dragging: false, icon: "", coords: [] });
      };

      document.addEventListener("dragend", handleMouseMove);
      document.addEventListener("mouseup", handleDragEnd); // Ensure dragging stops on mouseup

      return () => {
        document.removeEventListener("dragend", handleMouseMove);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging]);

  function getSelectedCoords() {
    const GRID_COLUMNS = 15;
    const GRID_ROWS = 10;
    const x1 = Math.floor(selectionStart[0] / window.innerWidth * GRID_COLUMNS);
    const y1 = Math.floor(selectionStart[1] / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    const x2 = Math.floor(selectionCurrentPosition[0] / window.innerWidth * GRID_COLUMNS);
    const y2 = Math.floor(selectionCurrentPosition[1] / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    return [x1, y1, x2, y2];
  }

  useEffect(() => {
    if (isSelecting) {
      const [x1, y1, x2, y2] = getSelectedCoords();
      const selectedList = icons.filter(icon =>
        icon.coords[0] >= Math.min(x1, x2) && icon.coords[0] <= Math.max(x1, x2) &&
        icon.coords[1] >= Math.min(y1, y2) && icon.coords[1] <= Math.max(y1, y2)
      );
      setSelected(selectedList);
    }
  }, [selectionCurrentPosition, isSelecting, icons]); // Ensure dependencies are correct

  return (
    <MainContainer ref={appRef}>
      <Selection 
        isDragging={isDragging} 
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        selectionStart={selectionStart}
        setSelectionStart={setSelectionStart}
        currentSelectionPosition={selectionCurrentPosition}
        setCurrentSelectionPosition={setSelectionCurrentPosition}
      />
      <Wallpaper className="background-wallpaper" fullScreen={true} draggable="false" />
      <IconContainer 
        icons={icons} 
        setIcons={setIcons} 
        isDragging={isDragging} 
        setIsDragging={setIsDragging} 
        isSelecting={isSelecting}
        selected={selected}
        setOpenedDialogBoxes={setOpenedDialogBoxes}
      />
      {/* {currentDialogBox === "email" && <Email setIsDragging={setIsDragging}/>} */}
      {checkOpenedDialogBoxes("Email_Me.exe") && <DialogBox title="Email_Me.exe" setIsDragging={setIsDragging} children={<Email openedDialogBoxes={openedDialogBoxes}/>} setOpenedDialogBoxes={setOpenedDialogBoxes} openedDialogBoxes={openedDialogBoxes}></DialogBox>}
      {checkOpenedDialogBoxes("About_Me.txt") && <DialogBox title="About_Me.txt" setIsDragging={setIsDragging} children={<Notepad openedDialogBoxes={openedDialogBoxes}/>} setOpenedDialogBoxes={setOpenedDialogBoxes} openedDialogBoxes={openedDialogBoxes}></DialogBox>}
      {checkOpenedDialogBoxes("My Projects") && <DialogBox title="My Projects" setIsDragging={setIsDragging} children={<Projects openedDialogBoxes={openedDialogBoxes}/>} setOpenedDialogBoxes={setOpenedDialogBoxes} openedDialogBoxes={openedDialogBoxes}></DialogBox>} 
      <Footer openedDialogBoxes={openedDialogBoxes} setOpenedDialogBoxes={setOpenedDialogBoxes}/>
      <StatusBar />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
