import { Wallpaper } from 'react-windows-xp';
import styled from 'styled-components';
import IconContainer from './IconContainer';
import Selection from './Selection';
import Email from './Email';
import Notepad from './Notepad';
import NotepadEmpty from './NotepadEmpty';
import DialogBox from './DialogBox';
import Footer from './Footer';
import StatusBar from './StatusBar';
import FileExplorer from './FileExplorer';
import MySkills from './MySkills';
import ErrorDialogBox from './ErrorDialogBox';
import StartMenu from './StartMenu';
import Clippy from './Clippy';

// Icon image imports
import myComputer from '../assets/my-computer.png';
import myDocuments from '../assets/my-documents.png';
import notepad from '../assets/notepad.png';
import email from '../assets/email.png';
import controlPanelIcon from '../assets/control-panel.png';
import pdfIcon from '../assets/dialog-icons/file_html.png';
import errorIcon from '../assets/dialog-icons/dialog_error.png';

//interface imports
import { DialogBoxInterface } from '../interfaces/default';
import { useEffect, useRef, useState } from 'react';

//audio imports
import startupSound from '../assets/sounds/startup.wav';


export default function Desktop(props: {
    setShowLogin: Function,
    setInitialLogin: Function,
    allowAudio: boolean,
    maxGrayscale: boolean,
    setMaxGrayscale: Function,
    setLogOffModal: Function,
    logOffModal: {show: boolean, modalType: string},
    setIsError: Function,
    isError: {status: boolean, message: string},
    setIsFullscreen: Function,
}) {
    // const url = "http://localhost:3000";
  const url = "https://app-ciepuk5waq-uc.a.run.app";

  const appRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLAudioElement>(null);

  const [icons, setIcons] = useState([
    { img: myComputer, name: "My Computer", coords: [0, 0], currentPath: ["My Computer"]},
    { img: controlPanelIcon, name: "My Skills", coords: [0, 1], currentPath: [] },
    { img: myDocuments, name: "My Projects", coords: [0, 2], currentPath: ["My Computer", "C:\\My Documents", "C:\\My Documents\\My Projects"]},
    { img: notepad, name: "about-me.txt", coords: [0, 3], currentPath: []},
    { img: email, name: "Email", coords: [0, 4], currentPath: [] },
    { img: pdfIcon, name: "my-resume.pdf", coords: [0, 5], currentPath: [] },
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
  
  const [openStartMenu, setOpenStartMenu] = useState(false);
  const [movingClippy, setMovingClippy] = useState(false);
  const [showClippy, setShowClippy] = useState(true);
  const [fileExplorerLoaded, setFileExplorerLoaded] = useState(false);

  //set initial login to false so the windows logo doesn't show again if the user logs off or changes users
  useEffect(() => {
    props.setInitialLogin(false);
  }, [])

  //toggles the display of the error dialog box when an error occurs
  useEffect(() => {
    if (props.isError.status) {
      setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
        //make sure the dialog box isn't already open
        const newDialog: DialogBoxInterface = {title: 'Error', status: "open", isFocused: true, maximize: false, icon: errorIcon, position: {x: 0, y: 0}};
        let updatedDialogs: DialogBoxInterface[] = [];
        let dialogBoxExists = false;
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].title === 'Error') {
                updatedDialogs.push({...prev[i], status: "open", isFocused: true});
                dialogBoxExists = true;
            } else {
                updatedDialogs.push({...prev[i], isFocused: false});
            }
        }
        return dialogBoxExists ? updatedDialogs : [...updatedDialogs, newDialog];
      })
    }
  }, [props.isError])

  //helper function that calculates the coordinates of the mouse pointer
  function calculateCoords(e: MouseEvent) {
    const GRID_COLUMNS = 15;
    const GRID_ROWS = 10;
    const x = Math.floor(e.clientX / window.innerWidth * GRID_COLUMNS);
    const y = Math.floor(e.clientY / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    return [x, y];
  }

  //handles the mouse move event when the user is dragging an icon
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

  //checks if a dialog box with the same title is already open
  function checkOpenedDialogBoxes(title: string) {
    for (let i = 0; i < openedDialogBoxes.length; i++) {
      if (openedDialogBoxes[i].title === title && openedDialogBoxes[i].status === "open") {
        return true;
      }
    }
    return false;
  }

  //handles the mouse down event when the user is dragging an icon
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

  //animates the error dialog box if a user clicks outside of its boundaries
  function errorMouseDown(e: any) {
    if (e.target && e.target.children[0]) e.target.children[0].children[0].classList.add("error-dialog-click");
    setTimeout(() => {
      if (e.target && e.target.children[0]) e.target.children[0].children[0].classList.remove("error-dialog-click");
    }, 500);
    errorRef.current!.play();
  }

  //gets the coordinates of the selected icon so it can be moved around the screen
  function getSelectedCoords() {
    const GRID_COLUMNS = 15;
    const GRID_ROWS = 10;
    const x1 = Math.floor(selectionStart[0] / window.innerWidth * GRID_COLUMNS);
    const y1 = Math.floor(selectionStart[1] / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    const x2 = Math.floor(selectionCurrentPosition[0] / window.innerWidth * GRID_COLUMNS);
    const y2 = Math.floor(selectionCurrentPosition[1] / (appRef.current ? appRef.current.offsetHeight : window.innerHeight) * GRID_ROWS);
    return [x1, y1, x2, y2];
  }

  //updates the selected icons when the user is selecting multiple icons
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
    <MainContainer ref={appRef} onClick={() => setOpenStartMenu(false)} className={props.maxGrayscale ? "grayscale-all" : ""}>
      {props.allowAudio && <audio src={startupSound} autoPlay></audio>}
      {showClippy && <Clippy url={url} setMovingClippy={setMovingClippy} setShowClippy={setShowClippy}/>}
      <Selection 
        isDragging={isDragging} 
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        selectionStart={selectionStart}
        setSelectionStart={setSelectionStart}
        currentSelectionPosition={selectionCurrentPosition}
        setCurrentSelectionPosition={setSelectionCurrentPosition}
        isError={props.isError}
        movingClippy={movingClippy}
        logOffModal={props.logOffModal}
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
      {checkOpenedDialogBoxes("My Computer") && 
        <DialogBox 
          title="My Computer" 
          titleImage={myComputer}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          fileExplorerLoaded={fileExplorerLoaded}
          setFileExplorerLoaded={setFileExplorerLoaded}
          children={
            <FileExplorer 
              reference="My Computer"
              startPath={["My Computer"]}
              openedDialogBoxes={openedDialogBoxes}
              setOpenedDialogBoxes={setOpenedDialogBoxes}
              setIsError={props.setIsError}
              setFileExplorerLoaded={setFileExplorerLoaded}
              />
          }>
        </DialogBox>} 
      {checkOpenedDialogBoxes("My Projects") && 
      <DialogBox 
        title="My Projects" 
        titleImage={myDocuments}
        setIsDragging={setIsDragging} 
        setOpenedDialogBoxes={setOpenedDialogBoxes} 
        openedDialogBoxes={openedDialogBoxes}
        fileExplorerLoaded={fileExplorerLoaded}
        setFileExplorerLoaded={setFileExplorerLoaded}
        children={
          <FileExplorer 
            reference="My Projects"
            startPath={["My Computer", "C:\\My Documents", "C:\\My Documents\\My Projects"]}
            openedDialogBoxes={openedDialogBoxes}
            setOpenedDialogBoxes={setOpenedDialogBoxes}
            setIsError={props.setIsError}
            setIsFullscreen={props.setIsFullscreen}
            setFileExplorerLoaded={setFileExplorerLoaded}
            />
          }>
      </DialogBox>} 
      {checkOpenedDialogBoxes("Email") && 
        <DialogBox 
          title="Email" 
          titleImage={email}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <Email 
              openedDialogBoxes={openedDialogBoxes}
              url={url}
              setIsError={props.setIsError}
              />}>
          </DialogBox>}
      {checkOpenedDialogBoxes("about-me.txt") && 
        <DialogBox 
          title="about-me.txt" 
          titleImage={notepad}
          setIsDragging={setIsDragging} 
          setOpenedDialogBoxes={setOpenedDialogBoxes} 
          openedDialogBoxes={openedDialogBoxes}
          children={
            <Notepad 
              openedDialogBoxes={openedDialogBoxes}/>} >
        </DialogBox>}
      {checkOpenedDialogBoxes("Notepad") && 
      <DialogBox 
        title="Notepad" 
        titleImage={notepad}
        setIsDragging={setIsDragging} 
        setOpenedDialogBoxes={setOpenedDialogBoxes} 
        openedDialogBoxes={openedDialogBoxes}
        children={
          <NotepadEmpty 
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
        <ErrorContainer onClick={errorMouseDown} className="error-container">
          <DialogBox
            title="Error"
            titleImage={errorIcon}
            setIsDragging={setIsDragging}
            setOpenedDialogBoxes={setOpenedDialogBoxes}
            openedDialogBoxes={openedDialogBoxes}
            isError={true}
            setIsError={props.setIsError}
            children={
              <ErrorDialogBox
                openedDialogBoxes={openedDialogBoxes}
                setOpenedDialogBoxes={setOpenedDialogBoxes}
                setIsError={props.setIsError}
                message={props.isError.message}
                errorRef={errorRef}
                allowAudio={props.allowAudio}
                />
            }/>
        </ErrorContainer>
        }
      {openStartMenu && <StartMenu setLogOffModal={props.setLogOffModal} setOpenedDialogBoxes={setOpenedDialogBoxes} setOpenStartMenu={setOpenStartMenu} setIsError={props.setIsError}/>}
      <Footer setOpenStartMenu={setOpenStartMenu} openedDialogBoxes={openedDialogBoxes} setOpenedDialogBoxes={setOpenedDialogBoxes}/>
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
  z-index: 501;
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