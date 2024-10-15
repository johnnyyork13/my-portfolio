import './App.css';
import Login from './components/Login';
import Desktop from './components/Desktop';
import { useState } from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import styled from 'styled-components';

import LogOffModal from './components/LogOffModal';
import WindowsLoadingScreen from './components/WindowsLoadingScreen';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [initialLogin, setInitialLogin] = useState(true);
  const [allowAudio, setAllowAudio] = useState(true);
  const [logOffModal, setLogOffModal] = useState({
    show: false,
    modalType: "",
  });
  const [maxGrayscale, setMaxGrayscale] = useState(false);
  const [isError, setIsError] = useState({status: false, message: ""});
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  setTimeout(() => {
    setShowLoadingScreen(false);
  }, 7000);

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
      <AllowAudio onClick={() => setAllowAudio((prev) => !prev)} $color={showLogin ? 'white' : 'black'}>
        {allowAudio ? <VolumeUpIcon /> : <VolumeOffIcon />}
        <span>{allowAudio ? 'Disable Audio' : 'Enable Audio'}</span>
      </AllowAudio>
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
          />}
    </div>
  )
}
  
const AllowAudio = styled.div<({$color: string})>`
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 1000;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`

export default App;
