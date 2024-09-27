import { useEffect, useState } from 'react';
import htmlIcon from '../../assets/dialog-icons/file_html.png'
import githubIcon from '../../assets/dialog-icons/github-icon.svg'
import linkedInIcon from '../../assets/dialog-icons/linkedin-icon.svg'

import { DialogBoxBodyContainer, DialogIcon, DialogIcons, DialogIconsHeader, MainDialogIconContainer } from "../../styled-components/main";
import { DialogBoxInterface } from '../../interfaces/default';

export default function ProjectsContent(props: {
    isMaximized: boolean,
    selectedIcon: string,
    handleIconClick: (e: any, name: string) => void,
}) {

    return (
        <MainDialogIconContainer $maximized={props.isMaximized}>
                    <DialogIconsHeader>
                        <p>Project Links</p>
                        <div></div>
                    </DialogIconsHeader>
                    <DialogIcons>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Ashley_Tarot.html')} 
                            onDoubleClick={() => window.open("https://ashleytarot.com/")}
                            $selected={props.selectedIcon === 'Ashley_Tarot.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Ashley_Tarot.html</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Bearbook.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/bearbook")}
                            $selected={props.selectedIcon === 'Bearbook.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Bearbook.html</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Vicewaves.html')} 
                            onDoubleClick={() => window.open("https://vicewaves.com")}
                            $selected={props.selectedIcon === 'Vicewaves.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Vicewaves.html</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Port_Folio.html')} 
                            onDoubleClick={() => window.open("")}
                            $selected={props.selectedIcon === 'Port_Folio.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Port_Folio.html</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Bloggy_AI.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/bloggyAI")}
                            $selected={props.selectedIcon === 'Bloggy_AI.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Bloggy_AI.html</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'Pokemon_Deck_Builder.html')} 
                            onDoubleClick={() => window.open("https://johnnyyork13.github.io/pokemon-deck-builder")}
                            $selected={props.selectedIcon === 'Pokemon_Deck_Builder.html' ? true : false}>
                            <img src={htmlIcon} alt="html" />
                            <p>Pokemon_Deck_Builder.html</p>
                        </DialogIcon>
                    </DialogIcons>
                    <br />
                    <br />
                    <DialogIconsHeader>
                        <p>Social Links</p>
                        <div></div>
                    </DialogIconsHeader>
                    <DialogIcons>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'GitHub.exe')} 
                            onDoubleClick={() => window.open("https://www.github.com/johnnyyork13")}
                            $selected={props.selectedIcon === 'GitHub.exe' ? true : false}>
                            <img src={githubIcon} alt="html" />
                            <p>GitHub.exe</p>
                        </DialogIcon>
                        <DialogIcon 
                            onClick={(e) => props.handleIconClick(e, 'LinkedIn.exe')} 
                            onDoubleClick={() => window.open("https://www.linkedin.com/in/johnny-york")}
                            $selected={props.selectedIcon === 'LinkedIn.exe' ? true : false}>
                            <img src={linkedInIcon} alt="html" />
                            <p>LinkedIn.exe</p>
                        </DialogIcon>
                    </DialogIcons>
                </MainDialogIconContainer>
    )
}