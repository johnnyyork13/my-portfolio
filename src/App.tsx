import './App.css';
import Login from './components/Login';
import Desktop from './components/Desktop';
import { useEffect, useState } from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import styled from 'styled-components';

import LogOffModal from './components/LogOffModal';
import WindowsLoadingScreen from './components/WindowsLoadingScreen';

function App() {

  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [initialLogin, setInitialLogin] = useState(true);
  const [allowAudio, setAllowAudio] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [logOffModal, setLogOffModal] = useState({
    show: false,
    modalType: "",
  });
  const [maxGrayscale, setMaxGrayscale] = useState(false);
  const [isError, setIsError] = useState({status: false, message: ""});

  //removes windows loading screen after 7 seconds
  setTimeout(() => {
    setShowLoadingScreen(false);
  }, 7000);

  //toggles fullscreen mode
  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.fullscreenElement) document.exitFullscreen();
    }
  }, [isFullscreen])

  return (
    <div>
      {showLoadingScreen && <WindowsLoadingScreen />}
      {logOffModal.show && 
        <LogOffModal 
          setLogOffModal={setLogOffModal} 
          logOffModal={logOffModal} 
          setMaxGrayscale={setMaxGrayscale}
          setShowLogin={setShowLogin}  
          setIsError={setIsError}
        />}
      <Controls $color={showLogin ? 'white' : 'black'}>
        <ControlsSection onClick={() => setAllowAudio((prev) => !prev)}>
          {allowAudio ? <VolumeUpIcon /> : <VolumeOffIcon />}
          <span>{allowAudio ? 'Disable Audio' : 'Enable Audio'}</span>
        </ControlsSection>
        <ControlsSection onClick={() => setIsFullscreen((prev) => !prev)}>
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          <span>{isFullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}</span>
        </ControlsSection>
      </Controls>
      {showLogin ? 
        <Login setShowLogin={setShowLogin} initialLogin={initialLogin} allowAudio={allowAudio}/> 
      : 
        <Desktop 
          setShowLogin={setShowLogin} 
          setInitialLogin={setInitialLogin} 
          allowAudio={allowAudio}
          maxGrayscale={maxGrayscale}
          setMaxGrayscale={setMaxGrayscale}
          setLogOffModal={setLogOffModal}
          logOffModal={logOffModal}
          setIsError={setIsError}
          isError={isError}
          setIsFullscreen={setIsFullscreen}
          />}
    </div>
  )
}
  
const Controls = styled.div<({$color: string})>`
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 2;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 1px;
  }
`

const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export default App;
