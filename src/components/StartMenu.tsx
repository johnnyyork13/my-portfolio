import styled from "styled-components"

import userImageIcon from '../assets/start-menu/user-image.png';

import internetIcon from '../assets/start-menu/internet-explorer.png';
import emailIcon from '../assets/start-menu/email.png';
import notepadIcon from '../assets/start-menu/notepad.png';
import windowsMediaPlayerIcon from '../assets/start-menu/windows-media-player.png';
import windowsMessengerIcon from '../assets/start-menu/windows-messenger.png';
import greenArrow from '../assets/start-menu/arrow.ico';

import myDocumentsIcon from '../assets/start-menu/my-documents.png';
import recentDocumentsIcon from '../assets/start-menu/recent-documents.png';
import myPicturesIcon from '../assets/start-menu/my-pictures.png';
import myMusicIcon from '../assets/start-menu/my-music.png';
import myComputerIcon from '../assets/start-menu/my-computer.png';
import controlPanelIcon from '../assets/start-menu/control-panel.png';
import programAccessIcon from '../assets/start-menu/program-access.png';
import connectIcon from '../assets/start-menu/connect-to.png';
import printersIcon from '../assets/start-menu/printers.png';
import helpIcon from '../assets/start-menu/help.png';
import searchIcon from '../assets/start-menu/search.png';
import runIcon from '../assets/start-menu/run.png';

import logOffIcon from '../assets/start-menu/log-off.png';
import shutdownIcon from '../assets/start-menu/turn-off.png';

import catalogIcon from '../assets/start-menu/catalog.png';
import updateIcon from '../assets/start-menu/update.png';
import accessoriesIcon from '../assets/start-menu/accessories.png';
import remoteIcon from '../assets/start-menu/remote.png';
import movieMakerIcon from '../assets/start-menu/movie-maker.png';
import addressBookIcon from '../assets/start-menu/address-book.png';
import commandPromptIcon from '../assets/start-menu/command-prompt.png';
import paintIcon from '../assets/start-menu/paint.png';
import calculatorIcon from '../assets/start-menu/calculator.png';
import rdpIcon from '../assets/start-menu/rdp.png';
import synchronizeIcon from '../assets/start-menu/synchronize.png';
import tourIcon from '../assets/start-menu/tour.png';
import windowsExplorerIcon from '../assets/start-menu/windows-explorer.png';
import wordpadIcon from '../assets/start-menu/wordpad.png';
import accessibilityWizardIcon from '../assets/start-menu/accessibility-wizard.png';
import magnifierIcon from '../assets/start-menu/magnifier.png';
import onScreenKeyboardIcon from '../assets/start-menu/keyboard.png';
import utilityManagerIcon from '../assets/start-menu/utility-manager.png';
import narratorIcon from '../assets/start-menu/narrator.ico';
import hyperTerminalIcon from '../assets/start-menu/hyper-terminal.png';
import networkConnectionsIcon from '../assets/start-menu/network-connections.png';
import networkSetupIcon from '../assets/start-menu/network-setup.png';
import newConnectionIcon from '../assets/start-menu/new-connection.png';
import wirelessNetworkIcon from '../assets/start-menu/wireless-network.png';
import soundRecorderIcon from '../assets/start-menu/sound-recorder.png';
import volumeControlIcon from '../assets/start-menu/volume-control.png';
import backupIcon from '../assets/start-menu/backup.png';
import characterMapIcon from '../assets/start-menu/character-map.png';
import diskCleanupIcon from '../assets/start-menu/disk-cleanup.png';
import diskDefragmenterIcon from '../assets/start-menu/disk-defragmenter.png';
import filesAndSettingsIcon from '../assets/start-menu/files-and-settings.png';
import scheduledTasksIcon from '../assets/start-menu/scheduled-tasks.png';
import securityCenterIcon from '../assets/start-menu/security-center.png';
import systemInformationIcon from '../assets/start-menu/system-information.png';
import systemRestoreIcon from '../assets/start-menu/system-restore.ico';
import freeCellIcon from '../assets/start-menu/free-cell.png';
import heartsIcon from '../assets/start-menu/hearts.png';
import minesweeperIcon from '../assets/start-menu/minesweeper.png';
import pinballIcon from '../assets/start-menu/pinball.png';
import solitaireIcon from '../assets/start-menu/solitaire.png';
import spiderSolitaireIcon from '../assets/start-menu/spider-solitaire.png';
import internetBackgammonIcon from '../assets/start-menu/internet-backgammon.png';
import internetCheckersIcon from '../assets/start-menu/internet-checkers.png';
import internetHeartsIcon from '../assets/start-menu/internet-hearts.png';
import internetReversiIcon from '../assets/start-menu/internet-reversi.png';
import internetSpadesIcon from '../assets/start-menu/internet-spades.png';
import msnIcon from '../assets/start-menu/msn.png';
import pdfIcon from '../assets/dialog-icons/file_html.png';

import myResume from '../assets/JohnnyYorkResume.pdf';

import { useState } from "react";
import { DialogBoxInterface } from "../interfaces/default";
import { BlackRightArrow } from "../styled-components/main";


export default function StartMenu(props: {
    setOpenedDialogBoxes: Function,
    setOpenStartMenu: Function,
    setIsError: Function,
    setLogOffModal: Function,
}) {

    const [showAllPrograms, setShowAllPrograms] = useState(false);
    const [showAccessories, setShowAccessories] = useState(false);
    const [showAccessibility, setShowAccessibility] = useState(false);
    const [showCommunications, setShowCommunications] = useState(false);
    const [showEntertainment, setShowEntertainment] = useState(false);
    const [showSystemTools, setShowSystemTools] = useState(false);
    const [showGames, setShowGames] = useState(false);
    const [showStartup, setShowStartup] = useState(false);
    const [showRecentDocuments, setShowRecentDocuments] = useState(false);
    const [showConnectTo, setShowConnectTo] = useState(false);

    function handleStartMenuItemClick(name: string) {
        props.setOpenStartMenu(false);
        if (name === "my-resume.pdf") {
            window.open(myResume);
            return;
        }
        props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
            //make sure the dialog box isn't already open
            const newDialog = {title: name, status: "open", isFocused: true};
            let updatedDialogs = [];
            let dialogBoxExists = false;
            for (let i = 0; i < prev.length; i++) {
                if (prev[i].title === name) {
                    updatedDialogs.push({...prev[i], status: "open", isFocused: true});
                    dialogBoxExists = true;
                } else {
                    updatedDialogs.push({...prev[i], isFocused: false});
                }
            }
            return dialogBoxExists ? updatedDialogs : [...updatedDialogs, newDialog];
        })
    }

    function handleOpenLogOffModal(modalType: string) {
        props.setOpenStartMenu(false);
        props.setLogOffModal({show: true, modalType: modalType});
    }

    // function handleProgramNotAvailable() {
    //     props.setOpenStartMenu(false);
    //     props.setOpenedDialogBoxes((prev: DialogBoxInterface[]) => {
    //         //make sure the dialog box isn't already open
    //         const newDialog = {title: 'Error', status: "open", isFocused: true};
    //         let updatedDialogs = [];
    //         let dialogBoxExists = false;
    //         for (let i = 0; i < prev.length; i++) {
    //             if (prev[i].title === 'Error') {
    //                 updatedDialogs.push({...prev[i], status: "open", isFocused: true});
    //                 dialogBoxExists = true;
    //             } else {
    //                 updatedDialogs.push({...prev[i], isFocused: false});
    //             }
    //         }
    //         return dialogBoxExists ? updatedDialogs : [...updatedDialogs, newDialog];
    //     })
    //     props.setIsError && props.setIsError(true);
    // }

    return (
        <StartMenuContainer onClick={(e) => e.stopPropagation()}>
            <StartMenuHeader>
                <UserImage>
                    <img src={userImageIcon} alt="User" />
                    <p>Johnny York</p>
                </UserImage>
            </StartMenuHeader>
            <StartMenuBody>
                <StartMenuLeft>
                    <div>
                        {/* <MenuIcon $doubleText={true} onClick={handleProgramNotAvailable} className="grayscale">
                            <img src={internetIcon} alt="Internet" />
                            <MenuLeftTextSpecial>
                                <p>Internet</p>
                                <p>Internet Explorer</p>
                            </MenuLeftTextSpecial>
                        </MenuIcon> */}
                        <MenuIcon $doubleText={true} onClick={() => handleStartMenuItemClick('Email')}>
                            <img src={emailIcon} alt="Email" />
                            <MenuLeftTextSpecial>
                                <p>Email</p>
                                <p>Outlook Express</p>
                            </MenuLeftTextSpecial>
                        </MenuIcon>
                        <MenuIcon onClick={() => handleStartMenuItemClick('Notepad')}>
                            <img src={notepadIcon} alt="Notepad" />
                            <p>Notepad</p>
                        </MenuIcon>
                        <Divider />
                        <MenuIcon onClick={() => handleStartMenuItemClick('My Projects')}>
                            <img src={myDocumentsIcon} alt="My Projects" />
                            <p>My Projects</p>
                        </MenuIcon>
                        <MenuIcon onClick={() => handleStartMenuItemClick('My Skills')}>
                            <img src={controlPanelIcon} alt="My Skills" />
                            <p>My Skills</p>
                        </MenuIcon>
                        <MenuIcon onClick={() => handleStartMenuItemClick('my-resume.pdf')}>
                            <img src={pdfIcon} alt="My Resume" style={{width: '32px', height: '32px'}}/>
                            <p>my-resume.pdf</p>
                        </MenuIcon>
                        <MenuIcon onClick={() => handleStartMenuItemClick('about-me.txt')}>
                            <img src={notepadIcon} alt="About Me"/>
                            <p>about-me.txt</p>
                        </MenuIcon>
                        
                        {/* <MenuIcon onClick={handleProgramNotAvailable}>
                            <img src={windowsMediaPlayerIcon} alt="Windows Media Player" />
                            <p>Windows Media Player</p>
                        </MenuIcon>
                        <MenuIcon onClick={handleProgramNotAvailable}>
                            <img src={windowsMessengerIcon} alt="Windows Messenger" />
                            <p>Windows Messenger</p>
                        </MenuIcon> */}
                    </div>
                    <AllProgramsButton>
                        <Divider />
                        {showAllPrograms && <AllProgramsWindow onMouseEnter={() => setShowAllPrograms(true)} onMouseLeave={() => setShowAllPrograms(false)}>
                            <AllProgramsIcon>
                                <img src={programAccessIcon} alt="Program Access" />
                                <p>Set Programs Access and Defaults</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={catalogIcon} alt="Catalog" />
                                <p>Windows Catalog</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={updateIcon} alt="Update" />
                                <p>Windows Update</p>
                            </AllProgramsIcon>
                            <Divider />

                            {/* ACCESSORIES */}
                            <AllProgramsIcon onMouseEnter={() => setShowAccessories(true)} onMouseLeave={() => setShowAccessories(false)}>
                                <img src={accessoriesIcon} alt="Accessories" />
                                <p>Accessories</p>
                                <BlackRightArrow />
                                {showAccessories && <AccessoriesWindow onMouseEnter={() => setShowAccessories(true)} onMouseLeave={() => setShowAccessories(false)}>
                                    <AllProgramsIcon onMouseEnter={() => setShowAccessibility(true)} onMouseLeave={() => setShowAccessibility(false)}>
                                        <img src={accessoriesIcon} alt="Accessibility" />
                                        <p>Accessibility</p>
                                        <BlackRightArrow />
                                        {showAccessibility && <AccessibilityWindow onMouseEnter={() => setShowAccessibility(true)} onMouseLeave={() => setShowAccessibility(false)}>
                                            <AllProgramsIcon>
                                                <img src={accessibilityWizardIcon} alt="Accessibility Wizard" />
                                                <p>Accessibility Wizard</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={magnifierIcon} alt="Magnifier" />
                                                <p>Magnifier</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={narratorIcon} alt="Narrator" />
                                                <p>Narrator</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={onScreenKeyboardIcon} alt="On Screen Keyboard" />
                                                <p>On Screen Keyboard</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={utilityManagerIcon} alt="Utility Manager" />
                                                <p>Utility Manager</p>
                                            </AllProgramsIcon>
                                        </AccessibilityWindow>}
                                    </AllProgramsIcon>
                                    <AllProgramsIcon onMouseEnter={() => setShowCommunications(true)} onMouseLeave={() => setShowCommunications(false)}>
                                        <img src={accessoriesIcon} alt="Communications" />
                                        <p>Communications</p>
                                        <BlackRightArrow />
                                        {showCommunications && <CommunicationsWindow onMouseEnter={() => setShowCommunications(true)} onMouseLeave={() => setShowCommunications(false)}>
                                            <AllProgramsIcon>
                                                <img src={hyperTerminalIcon} alt="Hyper Terminal" />
                                                <p>Hyper Terminal</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={networkConnectionsIcon} alt="Network Connections" />
                                                <p>Network Connections</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={networkSetupIcon} alt="Network Setup" />
                                                <p>Network Setup Wizard</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={newConnectionIcon} alt="New Connection" />
                                                <p>New Connection Wizard</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={wirelessNetworkIcon} alt="Wireless Network Setup" />
                                                <p>Wireless Network Setup Wizard</p>
                                            </AllProgramsIcon>
                                        </CommunicationsWindow>}
                                    </AllProgramsIcon>
                                    <AllProgramsIcon onMouseEnter={() => setShowEntertainment(true)} onMouseLeave={() => setShowEntertainment(false)}>
                                        <img src={accessoriesIcon} alt="Entertainment" />
                                        <p>Entertainment</p>
                                        <BlackRightArrow />
                                        {showEntertainment && <EntertainmentWindow onMouseEnter={() => setShowEntertainment(true)} onMouseLeave={() => setShowEntertainment(false)}>
                                            <AllProgramsIcon>
                                                <img src={soundRecorderIcon} alt="Sound Recorder" />
                                                <p>Sound Recorder</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={volumeControlIcon} alt="Volume Control" />
                                                <p>Volume Control</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={windowsMediaPlayerIcon} alt="Windows Media Player" />
                                                <p>Windows Media Player</p>
                                            </AllProgramsIcon>
                                        </EntertainmentWindow>}
                                    </AllProgramsIcon>
                                    <AllProgramsIcon onMouseEnter={() => setShowSystemTools(true)} onMouseLeave={() => setShowSystemTools(false)}>
                                        <img src={accessoriesIcon} alt="System Tools" />
                                        <p>System Tools</p>
                                        <BlackRightArrow />
                                        {showSystemTools && <SystemToolsWindow>
                                            <AllProgramsIcon>
                                                <img src={backupIcon} alt="Backup" />
                                                <p>Backup</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={characterMapIcon} alt="Character Map" />
                                                <p>Character Map</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={diskCleanupIcon} alt="Disk Cleanup" />
                                                <p>Disk Cleanup</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={diskDefragmenterIcon} alt="Disk Defragmenter" />
                                                <p>Disk Defragmenter</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={filesAndSettingsIcon} alt="Files and Settings Transfer" />
                                                <p>Files and Settings Transfer Wizard</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={scheduledTasksIcon} alt="Scheduled Tasks" />
                                                <p>Scheduled Tasks</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={securityCenterIcon} alt="Security Center" />
                                                <p>Security Center</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={systemInformationIcon} alt="System Information" />
                                                <p>System Information</p>
                                            </AllProgramsIcon>
                                            <AllProgramsIcon>
                                                <img src={systemRestoreIcon} alt="System Restore" />
                                                <p>System Restore</p>
                                            </AllProgramsIcon>
                                        </SystemToolsWindow>}
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={addressBookIcon} alt="Address Book" />
                                        <p>Address Book</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={commandPromptIcon} alt="Command Prompt" />
                                        <p>Command Prompt</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={notepadIcon} alt="Notepad" />
                                        <p>Notepad</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={paintIcon} alt="Paint" />
                                        <p>Paint</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={calculatorIcon} alt="Calculator" />
                                        <p>Calculator</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={helpIcon} alt="Program Compatability Wizard" />
                                        <p>Program Compatability Wizard</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={rdpIcon} alt="Remote Desktop Connection" />
                                        <p>Remote Desktop Connection</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={synchronizeIcon} alt="Synchronize" />
                                        <p>Synchronize</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={tourIcon} alt="Tour" />
                                        <p>Tour Windows XP</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={windowsExplorerIcon} alt="Windows Explorer" />
                                        <p>Windows Explorer</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={wordpadIcon} alt="Wordpad" />
                                        <p>Wordpad</p>
                                    </AllProgramsIcon>
                                </AccessoriesWindow>}
                            </AllProgramsIcon>
                            <AllProgramsIcon onMouseEnter={() => setShowGames(true)} onMouseLeave={() => setShowGames(false)}>
                                <img src={accessoriesIcon} alt="Games" />
                                <p>Games</p>
                                <BlackRightArrow />
                                {showGames && <GamesWindow onMouseEnter={() => setShowGames(true)} onMouseLeave={() => setShowGames(false)}>
                                    <AllProgramsIcon>
                                        <img src={freeCellIcon} alt="Free Cell" />
                                        <p>Free Cell</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={heartsIcon} alt="Hearts" />
                                        <p>Hearts</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={internetBackgammonIcon} alt="Internet Backgammon" />
                                        <p>Internet Backgammon</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={internetCheckersIcon} alt="Internet Checkers" />
                                        <p>Internet Checkers</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={internetHeartsIcon} alt="Internet Hearts" />
                                        <p>Internet Hearts</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={internetReversiIcon} alt="Internet Reversi" />
                                        <p>Internet Reversi</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={internetSpadesIcon} alt="Internet Spades" />
                                        <p>Internet Spades</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={minesweeperIcon} alt="Minesweeper" />
                                        <p>Minesweeper</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={pinballIcon} alt="Pinball" />
                                        <p>Pinball</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={solitaireIcon} alt="Solitaire" />
                                        <p>Solitaire</p>
                                    </AllProgramsIcon>
                                    <AllProgramsIcon>
                                        <img src={spiderSolitaireIcon} alt="Spider Solitaire" />
                                        <p>Spider Solitaire</p>
                                    </AllProgramsIcon>
                                </GamesWindow>}
                            </AllProgramsIcon>
                            <AllProgramsIcon onMouseEnter={() => setShowStartup(true)} onMouseLeave={() => setShowStartup(false)}>
                                <img src={accessoriesIcon} alt="Startup" />
                                <p>Startup</p>
                                <BlackRightArrow />
                                {showStartup && <StartupWindow onMouseEnter={() => setShowStartup(true)} onMouseLeave={() => setShowStartup(false)}>
                                    <AllProgramsIcon>
                                        <p>{'(Empty)'}</p>
                                    </AllProgramsIcon>
                                </StartupWindow>}
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={internetIcon} alt="Internet Explorer" />
                                <p>Internet Explorer</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={emailIcon} alt="Email" />
                                <p>Outlook Express</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={remoteIcon} alt="Remote Assistance" />
                                <p>Remote Assistance</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={windowsMediaPlayerIcon} alt="Windows Media Player" />
                                <p>Windows Media Player</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={windowsMessengerIcon} alt="Windows Messenger" />
                                <p>Windows Messenger</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={movieMakerIcon} alt="Windows Movie Maker" />
                                <p>Windows Movie Maker</p>
                            </AllProgramsIcon>
                        </AllProgramsWindow>}
                        <div onMouseEnter={() => setShowAllPrograms(true)} onMouseLeave={() => setShowAllPrograms(false)}>
                            <p>All Programs</p>
                            <img src={greenArrow} alt="All Programs" />
                        </div>
                    </AllProgramsButton>
                </StartMenuLeft>
                <StartMenuRight>
                    <MenuIconSmall $bold={true}>
                        <img src={myDocumentsIcon} alt="My Documents" />
                        <p>My Documents</p>
                    </MenuIconSmall>
                    <MenuIconSmall $bold={true} onMouseEnter={() => setShowRecentDocuments(true)} onMouseLeave={() => setShowRecentDocuments(false)}>
                        <img src={recentDocumentsIcon} alt="Recent Documents" />
                        <p>Recent Documents</p>
                        <BlackRightArrow />
                        {showRecentDocuments && <RecentDocumentsWindow onMouseEnter={() => setShowRecentDocuments(true)} onMouseLeave={() => setShowRecentDocuments(false)}>
                            <AllProgramsIcon onClick={() => handleStartMenuItemClick('about-me.txt')}>
                                <img src={notepadIcon} alt="About Me"/>
                                <p>about-me.txt</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon onClick={() => handleStartMenuItemClick('My Projects')}>
                                <img src={myDocumentsIcon} alt="My Projects" />
                                <p>My Projects</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon onClick={() => handleStartMenuItemClick('My Skills')}>
                                <img src={controlPanelIcon} alt="My Skills" />
                                <p>My Skills</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon onClick={() => handleStartMenuItemClick('my-resume.pdf')}>
                                <img src={pdfIcon} alt="My Resume" />
                                <p>my-resume.pdf</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon onClick={() => handleStartMenuItemClick('Email')}>
                                <img src={emailIcon} alt="My Email" />
                                <p>Email</p>
                            </AllProgramsIcon>
                        </RecentDocumentsWindow>}
                    </MenuIconSmall>
                    <MenuIconSmall $bold={true}>
                        <img src={myPicturesIcon} alt="My Pictures" />
                        <p>My Pictures</p>
                    </MenuIconSmall>
                    <MenuIconSmall $bold={true}>
                        <img src={myMusicIcon} alt="My Music" />
                        <p>My Music</p>
                    </MenuIconSmall>
                    <MenuIconSmall $bold={true}>
                        <img src={myComputerIcon} alt="My Computer" />
                        <p>My Computer</p>
                    </MenuIconSmall>
                    <Divider />
                    <MenuIconSmall>
                        <img src={controlPanelIcon} alt="Control Panel" />
                        <p>Control Panel</p>
                    </MenuIconSmall>
                    <MenuIconSmall>
                        <img src={programAccessIcon} alt="Program Access" />
                        <p>Program Access</p>
                    </MenuIconSmall>
                    <MenuIconSmall onMouseEnter={() => setShowConnectTo(true)} onMouseLeave={() => setShowConnectTo(false)}>
                        <img src={connectIcon} alt="Connect" />
                        <p>Connect To</p>
                        <BlackRightArrow />
                        {showConnectTo && <ConnectToWindow onMouseEnter={() => setShowConnectTo(true)} onMouseLeave={() => setShowConnectTo(false)}>
                            <AllProgramsIcon>
                                <img src={msnIcon} alt="MSN" />
                                <p>MSN</p>
                            </AllProgramsIcon>
                            <AllProgramsIcon>
                                <img src={connectIcon} alt="Network Connections" />
                                <p>Network Connections</p>
                            </AllProgramsIcon>
                        </ConnectToWindow>}
                    </MenuIconSmall>
                    <MenuIconSmall>
                        <img src={printersIcon} alt="Printers" />
                        <p>Printers</p>
                    </MenuIconSmall>
                    <Divider />
                    <MenuIconSmall>
                        <img src={helpIcon} alt="Help" />
                        <p>Help</p>
                    </MenuIconSmall>
                    <MenuIconSmall>
                        <img src={searchIcon} alt="Search" />
                        <p>Search</p>
                    </MenuIconSmall>
                    <MenuIconSmall>
                        <img src={runIcon} alt="Run" />
                        <p>Run...</p>
                    </MenuIconSmall>
                </StartMenuRight>
            </StartMenuBody>
            <StartMenuFooter>
                <ShutdownIcon onClick={() => handleOpenLogOffModal("logoff")}>
                    <img src={logOffIcon} alt="Log Off" />
                    <p>Log Off</p>
                </ShutdownIcon>
                <ShutdownIcon onClick={() => handleOpenLogOffModal("shutdown")}>
                    <img src={shutdownIcon} alt="Turn Off" />
                    <p>Turn Off Computer</p>
                </ShutdownIcon>
            </StartMenuFooter>
        </StartMenuContainer>
    )
}

const StartMenuContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 32px;
    z-index: 99; 
`

const StartMenuHeader = styled.div`
    height: 50px;
    width: 100%;
    background: linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
`

const UserImage = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    color: white;
    font-weight: bolder;
    font-size: .9rem;
    p {
        margin-left: 5px;
    }
    img {
        width: 40px;
        height: 40px;
        margin-left: 5px;
        box-shadow: 0px 0px 1px 1px white;
        border-radius: 3px;
    }
`

const StartMenuBody = styled.div`
    width: 100%;
    display: flex;
`

const StartMenuLeft = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    background-color: white;
    padding: 5px;
`

const MenuLeftTextSpecial = styled.div`
    p:first-child {
        font-weight: bolder;
        margin-bottom: 2px;
    }
    p:last-child {
        color: rgb(180,180,180);
    }
`

const AllProgramsButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    position: relative;
    > div:last-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        &:hover {
            background-color: var(--xp-blue);
            color: white;
        }
        &:hover > div {
            visibility: visible;
        }
    }
    p {
        margin-right: 5px;
        font-weight: bolder;
        user-select: none;
    }
`

const AllProgramsWindow = styled.div`
    position: absolute;
    right: -165px;
    bottom: 0;
    background-color: white;
    border-left: 2px solid rgb(64, 129, 255);
    padding: 5px;
    padding-bottom: 0px;
    box-shadow: rgb(114, 173, 233) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.5) 2px 3px 3px;
    z-index: 2;
`

const AccessoriesWindow = styled(AllProgramsWindow)`
    right: -187px;
`

const AccessibilityWindow = styled(AllProgramsWindow)`
    right: -140px;
    height: fit-content;
    top: -5px;
`

const CommunicationsWindow = styled(AllProgramsWindow)`
    right: -193px;
    top: -30px;
    height: fit-content;
`

const EntertainmentWindow = styled(AllProgramsWindow)`
    right: -150px;
    top: -55px;
    height: fit-content;
`

const SystemToolsWindow = styled(AllProgramsWindow)`
    right: -207px;
    top: -80px;
    height: fit-content;
`

const GamesWindow = styled(AllProgramsWindow)`
    right: -143px;
    height: fit-content;
`

const StartupWindow = styled(AllProgramsWindow)`
    right: -100px;
    width: 100px;
    height: fit-content;
    display: flex;
    justify-content: center;
    div {
        width: 100%;
        margin: 0px;
        p {
            width: 100%;
            text-align: center;
            padding-bottom: 3px;
            color: rgb(180,180,180);
        }
    }
`   

const RecentDocumentsWindow = styled(AllProgramsWindow)`
    right: -160px;
    height: fit-content;
    width: 150px;
`

const ConnectToWindow = styled(AllProgramsWindow)`
    right: -140px;
`




const StartMenuRight = styled.div`
    min-width: 200px;
    padding: 5px;
    border-left: 1px solid rgba(58, 58, 255, 0.37);
    background-color: rgb(203, 227, 255);

`

const StartMenuFooter = styled.div`
    height: 35px;
    background: linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%);
    border-bottom: 2px solid black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    img {
        width: 20px;
        height: 20px;
    }
    div {
        margin: 0px;
        margin-right: 10px;
    }
`

const MenuIcon = styled.div<({$doubleText?: boolean})>`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 2px;
    img {
        margin-right: 5px;
    }
    p {
        font-size: .7rem;
        text-wrap: nowrap;
        user-select: none;
    }
    &:hover {
        background-color: var(--xp-blue);
        ${props => props.$doubleText ? 'p {color: white}' : `> p {color: white}`}
    }
    &:hover > div {
        visibility: visible;  
    }
`

const ShutdownIcon = styled(MenuIcon)`
    padding: 4px;
    &:hover {
        background-color: rgba(60, 80, 210, 0.5);
    }
    &:active {
        img, p {
            transform: translate(1px, 1px);
        }
    }
`

const MenuIconSmall = styled(MenuIcon)<({$bold?: boolean})>`
    img {
        width: 20px;
        height: 20px;
    }
    p {
        font-weight: ${props => props.$bold ? 'bolder' : 'normal'};
    }
`

const AllProgramsIcon = styled(MenuIcon)`
    img {
        height: 16px;
        width: 16px;
    }
    p {
        font-weight: normal;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
`

