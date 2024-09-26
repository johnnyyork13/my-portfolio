import './App.css';
import { Wallpaper } from 'react-windows-xp';
import styled from 'styled-components';
import IconContainer from './components/IconContainer';
import Selection from './components/Selection';
import Email from './components/Email';
import Notepad from './components/Notepad';
import DialogBox from './components/DialogBox';
import Footer from './components/Footer';
import StatusBar from './components/StatusBar';
import FileExplorer from './components/FileExplorer';
import MySkills from './components/MySkills';
import ErrorDialogBox from './components/ErrorDialogBox';

// Icon image imports
import myComputer from './assets/my-computer.png';
import myPictures from './assets/my-pictures.png';
import notepad from './assets/notepad.png';
import email from './assets/email.png';
import controlPanelIcon from './assets/control-panel.png';
import pdfIcon from './assets/dialog-icons/file_html.png';
import errorIcon from './assets/dialog-icons/dialog_error.png';

//interface imports
import { DialogBoxInterface } from './interfaces/default';

import { useEffect, useRef, useState } from 'react';

function App() {
  const appRef = useRef<HTMLDivElement>(null);


  const [icons, setIcons] = useState([
    { img: myComputer, name: "My Computer", coords: [0, 0], currentPath: ["My Computer"]},
    { img: controlPanelIcon, name: "My Skills", coords: [0, 1], currentPath: [] },
    { img: myPictures, name: "My Projects", coords: [0, 2], currentPath: ["My Computer", "C:\\My Documents", "C:\\My Documents\\My Projects"]},
    { img: notepad, name: "About_Me.txt", coords: [0, 3], currentPath: []},
    { img: email, name: "Email_Me.exe", coords: [0, 4], currentPath: [] },
    { img: pdfIcon, name: "My_Resume.pdf", coords: [0, 5], currentPath: [] },

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
  const [isError, setIsError] = useState(false);

  const [currentPath, setCurrentPath] = useState<string[]>([]);

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

  function errorMouseDown(e: any) {
    if (e.target && e.target.children[0]) e.target.children[0].children[0].classList.add("error-dialog-click");
    setTimeout(() => {
      if (e.target && e.target.children[0]) e.target.children[0].children[0].classList.remove("error-dialog-click");
    }, 500);
  }


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
        isError={isError}
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
        setCurrentPath={setCurrentPath}
      />
      {/* {currentDialogBox === "email" && <Email setIsDragging={setIsDragging}/>} */}
      {checkOpenedDialogBoxes("My Computer") && 
        <DialogBox 
          title="My Computer" 
          titleImage={myComputer}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <FileExplorer 
              reference="My Computer"
              startPath={["My Computer"]}
              openedDialogBoxes={openedDialogBoxes}
              setOpenedDialogBoxes={setOpenedDialogBoxes}
              setIsError={setIsError}
              />
          }>
        </DialogBox>} 
      {checkOpenedDialogBoxes("My Projects") && 
      <DialogBox 
        title="My Projects" 
        titleImage={myPictures}
        setIsDragging={setIsDragging} 
        setOpenedDialogBoxes={setOpenedDialogBoxes} 
        openedDialogBoxes={openedDialogBoxes}
        children={
          <FileExplorer 
            reference="My Projects"
            startPath={["My Computer", "C:\\My Documents", "C:\\My Documents\\My Projects"]}
            openedDialogBoxes={openedDialogBoxes}
            setOpenedDialogBoxes={setOpenedDialogBoxes}
            />
          }>
      </DialogBox>} 
      {checkOpenedDialogBoxes("Email_Me.exe") && 
        <DialogBox 
          title="Email_Me.exe" 
          titleImage={email}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <Email 
              openedDialogBoxes={openedDialogBoxes}/>}>
          </DialogBox>}
      {checkOpenedDialogBoxes("About_Me.txt") && 
        <DialogBox 
          title="About_Me.txt" 
          titleImage={notepad}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <Notepad 
              openedDialogBoxes={openedDialogBoxes}/>} >
        </DialogBox>}
        {checkOpenedDialogBoxes("My Skills") && 
        <DialogBox 
          title="My Skills" 
          titleImage={controlPanelIcon}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <MySkills 
              openedDialogBoxes={openedDialogBoxes}/>}>
        </DialogBox>}
        {checkOpenedDialogBoxes("Error") &&
        <ErrorContainer onClick={errorMouseDown}>
          <DialogBox
            title="Error"
            titleImage={errorIcon}
            setIsDragging={setIsDragging}
            setOpenedDialogBoxes={setOpenedDialogBoxes}
            openedDialogBoxes={openedDialogBoxes}
            isError={true}
            setIsError={setIsError}
            children={
              <ErrorDialogBox
                openedDialogBoxes={openedDialogBoxes}
                setOpenedDialogBoxes={setOpenedDialogBoxes}
                setIsError={setIsError}
                />
            }/>
        </ErrorContainer>
        }
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

const ErrorContainer = styled.div`
  position: absolute;
  z-index: 400;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.01);
  mouse-events: none;
`


export default App;
