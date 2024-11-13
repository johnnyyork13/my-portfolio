import lanIcon from '../assets/dialog-icons/net_lan.png';
import messengerIcon from '../assets/dialog-icons/messenger.png';
import ejectIcon from '../assets/dialog-icons/eject.png';
import speakerIcon from '../assets/dialog-icons/speaker.png';
import paperclip from '../assets/paperclip.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function StatusBar(props: {
    showClippy: boolean,
    setShowClippy: Function,
    setPopup: Function,
}) {

    const [currentTime, setCurrentTime] = useState("");

    //shows the time in the status bar when the application is loaded
    useEffect(() => {
        setCurrentTime(() => {
            return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        })
    }, [])

    function toggleShowClippy() {
        props.setShowClippy(true);
        props.setPopup({show: false, text: ""});
    }

    return (
        <StatusBarContainer $showClippy={props.showClippy}>
            <Icons>
                {!props.showClippy && <ClippyIcon onDoubleClick={toggleShowClippy} src={paperclip} alt="Paperclip" />}
                <img src={lanIcon} alt="LAN" />
                <img src={messengerIcon} alt="Messenger" />
                <img src={ejectIcon} alt="Eject" />
                <img src={speakerIcon} alt="Speaker" />
            </Icons>
            <p>{currentTime}</p>
        </StatusBarContainer>
    )
}


const StatusBarContainer = styled.div<({ $showClippy: boolean })>`
    z-index: 100;
    position: fixed;
    bottom: 0;
    right: 0;
    width: ${props => props.$showClippy ? "135px" : "150px"};
    height: 32px;
    border-left: 1px solid black;
    padding-left: 10px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%);
    // background: linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7);
    img {
        margin-right: 3px;
    }
    p {
        color: white;
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
`

const ClippyIcon = styled.img`
    width: 16px;
    height: 16px;
`