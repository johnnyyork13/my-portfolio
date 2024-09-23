import styled from "styled-components";
import { Children, useEffect, useState } from "react";
import { DialogBoxInterface } from "../interfaces/default";
import sendButton from '../assets/dialog-icons/email_send.png'
import saveButton from '../assets/dialog-icons/save.png'
import cutButton from '../assets/dialog-icons/cut.png'
import copyButton from '../assets/dialog-icons/copy.png'
import pasteButton from '../assets/dialog-icons/paste.png'
import addressBook from '../assets/dialog-icons/address_book.png'
import documentPropertiesButton from '../assets/dialog-icons/document_properties.png'
import calendarButton from '../assets/dialog-icons/calendar.png'
import alignCenterButton from '../assets/dialog-icons/align_centre.png'
import alignLeftButton from '../assets/dialog-icons/align_left.png'
import alignRightButton from '../assets/dialog-icons/align_right.png'
import indentDecreaseButton from '../assets/dialog-icons/indent_decrease.png'
import indentIncreaseButton from '../assets/dialog-icons/indent_increase.png'
import boldButton from '../assets/dialog-icons/bold.png'
import italicButton from '../assets/dialog-icons/italic.png'
import underlineButton from '../assets/dialog-icons/underline.png'
import strikeThroughButton from '../assets/dialog-icons/strikethrough.png'
import undoButton from '../assets/dialog-icons/undo.png'
import { DialogBoxHeader } from "../styled-components/main";

export default function Email(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {
    
    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "Email_Me.exe")?.maximize || false);
    }, [props.openedDialogBoxes])
    

    return (
        <EmailContainer className="window-body">
            <DialogBoxHeader>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p>Actions</p>
                <p>Help</p>
            </DialogBoxHeader>
            <IconContainer>
                <Icon>
                    <img src={sendButton} alt="send" />
                    <p>Send</p>
                </Icon>
                <Divider />
                <Icon><img src={saveButton} alt="save" /></Icon>
                <Divider />
                <Icon><img src={cutButton} alt="cut" /></Icon>
                <Icon><img src={copyButton} alt="copy" /></Icon>
                <Icon><img src={pasteButton} alt="paste" /></Icon>
                <Icon><img src={undoButton} alt="undo" /></Icon>
                <Divider />
                <Icon><img src={calendarButton} alt="calendar" /></Icon>
            </IconContainer>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="to">
                <img src={addressBook} alt="address book" />
                    To:
                </label>
                <input type="text" id="to" />
            </DialogInput>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="from">
                <img src={addressBook} alt="address book" />
                    From:
                </label>
                <input type="text" id="from" />
            </DialogInput>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" />
            </DialogInput>
            <MessageIconContainer>
                <select>
                    <option value="plain">Arial</option>
                </select>
                <select>
                    <option>10</option>
                </select>
                <Divider />
                <img src={boldButton} alt="bold" />
                <img src={italicButton} alt="italic" />
                <img src={underlineButton} alt="underline" />
                <img src={strikeThroughButton} alt="strike through" />
                <Divider />
                <img src={indentDecreaseButton} alt="indent decrease" />
                <img src={indentIncreaseButton} alt="indent increase" />
                <Divider />
                <img src={alignLeftButton} alt="align left" />
                <img src={alignCenterButton} alt="align center" />
                <img src={alignRightButton} alt="align right" />
            </MessageIconContainer>
            <DialogInput className="field-row" $isMaximized={isMaximized} style={{height: '100%'}}>
                <textarea id="email-to"></textarea>
            </DialogInput>
        </EmailContainer>
    )
}

const EmailContainer = styled.div`
    height: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
`

const IconContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(200,200,200);
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    margin-right: 3px;
    p {
        margin-left: 5px;
    }
`

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: rgb(200, 200, 200);
    margin-left: 5px;
    margin-right: 5px;
`

const DialogInput = styled.div<{ $isMaximized: boolean }>`
    width: ${props => props.$isMaximized ? "100%" : "500px"};
    margin-bottom: 10px;
    img {
        margin-right: 5px;
    }
    label {
        width: 70px;
        display: flex;
    }
    input, textarea {
        box-sizing: border-box !important;
        width: 100%;    
    }
    textarea {
        height: ${props => props.$isMaximized ? "100%" : "150px"};
        resize: none;
        overflow-y: scroll;
    }
`

const MessageIconContainer = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    margin-bottom: 5px;
    border-top: 1px solid rgb(200,200,200);
    padding-top: 8px;
    > * {
        margin-right: 5px;
    }
    select:first-child {
        width: 150px    
    }
`