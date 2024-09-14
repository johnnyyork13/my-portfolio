import styled from "styled-components";
import { MainContainer, PrimaryButton, SecondaryButton } from "../styled-components/main";
import resumeIcon from '../assets/resume-icon.svg';

export default function Resume() {

    return (
        <ResumeContainer>
            {/* <h1>Resume</h1> */}
            <ResumeCenter>
                <ResumeIcon src={resumeIcon} alt="Resume Icon" />
                <ResumeButtons>
                    <PrimaryButton>View Resume</PrimaryButton>
                    <SecondaryButton>Download Resume</SecondaryButton>
                </ResumeButtons>
            </ResumeCenter>
        </ResumeContainer>
    )
}

const ResumeContainer = styled(MainContainer)`
    margin-top: 100px;
`

const ResumeCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ResumeIcon = styled.img`
    width: 150px;
`

const ResumeButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    button {
        margin-top: 20px;
    }
`

