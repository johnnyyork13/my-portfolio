import styled from "styled-components";
import {useEffect, useState } from "react";
import { DialogBoxInterface } from "../interfaces/default";
import sendButton from '../assets/dialog-icons/email_send.png'
import cutButton from '../assets/dialog-icons/cut.png'
import copyButton from '../assets/dialog-icons/copy-large.png'
import pasteButton from '../assets/dialog-icons/paste-large.png'
import addressBook from '../assets/dialog-icons/address_book.png'
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
import undoButton from '../assets/dialog-icons/undo-large.png'
import { DialogBoxHeader, Divider, HeaderIcon, HeaderIconContainer } from "../styled-components/main";

export default function Email(props: {
    openedDialogBoxes: DialogBoxInterface[],
    url: string,
    setIsError: Function,
}) {
    
    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [sendEmail, setSendEmail] = useState<boolean>(false);
    const [user, setUser] = useState({
        from: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        setIsMaximized(props.openedDialogBoxes.find(dialog => dialog.title === "Email")?.maximize || false);
    }, [props.openedDialogBoxes])

    useEffect(() => {
        if (sendEmail) {
            async function sendUserEmail() {
                const url = props.url + "/email";
                await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                }).then((res) => res.json())
                .then(() => {
                    setUser({
                        from: "",
                        subject: "",
                        message: "",
                    })
                    setSendEmail(false);
                })
            }
            sendUserEmail();
        }
    }, [sendEmail])

    function handleUserInputChange(e: any) {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function handleSendEmail() {
        let allFieldsHaveValues = true;
        for (const key in user) {
            if (user[key as keyof typeof user] === "") {
                props.setIsError({status: true, message: "Please fill out all fields."});
                allFieldsHaveValues = false;
                return;
            }
        }

        if (allFieldsHaveValues) {
            setSendEmail(true);
        }
    }


    return (
        <EmailContainer className="window-body">
            <EmailDialogBoxHeader>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p>Actions</p>
                <p>Help</p>
            </EmailDialogBoxHeader>
            <EmailIconContainer>
                <EmailIcon onClick={handleSendEmail}>
                    <img src={sendButton} alt="send" />
                    <p>Send</p>
                </EmailIcon>
                <Divider />
                <EmailIcon>
                    <img src={cutButton} alt="cut" />
                    <p>Cut</p>
                </EmailIcon>
                <EmailIcon>
                    <img src={copyButton} alt="copy" />
                    <p>Copy</p>
                </EmailIcon>
                <EmailIcon>
                    <img src={pasteButton} alt="paste" />
                    <p>Paste</p>
                </EmailIcon>
                <EmailIcon>
                    <img src={undoButton} alt="undo"/>
                    <p>Undo</p>    
                </EmailIcon>
                <Divider />
                <EmailIcon>
                    <img src={calendarButton} alt="calendar" />
                    <p>Calendar</p>
                </EmailIcon>
            </EmailIconContainer>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="to">
                <img src={addressBook} alt="address book" />
                    To:
                </label>
                <input type="text" id="to" placeholder="johnnyyork13@hotmail.com" disabled/>
            </DialogInput>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="from">
                <img src={addressBook} alt="address book" />
                    From:
                </label>
                <input type="text" id="from" name="from" onChange={handleUserInputChange} value={user.from}/>
            </DialogInput>
            <DialogInput className="field-row" $isMaximized={isMaximized}>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" onChange={handleUserInputChange} value={user.subject}/>
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
                <textarea id="email-to" name="message" onChange={handleUserInputChange} value={user.message}></textarea>
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

const EmailDialogBoxHeader = styled(DialogBoxHeader)`
    border-left: 2px dotted rgb(200,200,200);
`

const EmailIconContainer = styled(HeaderIconContainer)`
    height: 50px;
    border-bottom: 1px solid rgb(200,200,200);
    border-left: 2px dotted rgb(200,200,200);
    margin-bottom: 5px;
    padding-bottom: 4px;
`

const EmailIcon = styled(HeaderIcon)`
    flex-direction: column;
    width: 45px;
    margin: 0px;
    img {
        width: 28px;
        height: 28px;
        margin: 0px;
        margin-bottom: 5px;
    }
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