import styled from "styled-components";
import { MainContainer, MainInput, PrimaryButton } from "../styled-components/main";
import { useState } from "react";

export default function Contact() {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    })

    function handleContactInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    function handleContactFormSubmit() {
        console.log(contact)
    }

    return (
        <ContactContainer>
            <h1>Send me a message</h1>
            <ContactForm onSubmit={(e) => e.preventDefault()}>
                <MainInput type="text" placeholder="Full Name*" onChange={handleContactInputChange} value={contact.name} name="name"/>
                <MainInput type="email" placeholder="Email*" onChange={handleContactInputChange} value={contact.email} name="email"/>
                <MainInput type="tel" placeholder="Phone Number" onChange={handleContactInputChange} value={contact.phone} name="phone"/>
                <MainInput type="text" placeholder="Organization*" onChange={handleContactInputChange} value={contact.organization} name="organization"/>
                <MessageInput placeholder="Message*" onChange={handleContactInputChange} value={contact.message} name="message"/>
                <PrimaryButton type="submit" onClick={handleContactFormSubmit}>Submit</PrimaryButton>
            </ContactForm>
        </ContactContainer>
    )
}

const ContactContainer = styled(MainContainer)`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--six);
    h1 {
        font-size: 2rem;
        margin-bottom: 30px;    
    }
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MessageInput = styled(MainInput)`

`