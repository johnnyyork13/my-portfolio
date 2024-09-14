import styled from "styled-components";
import { MainContainer } from "../styled-components/main";

export default function Intro() {

    return (
        <IntroContainer>
            <IntroText>Hello,</IntroText>
            <IntroText>I'm Johnny York,</IntroText>
            <IntroText>A growing UX designer and developer</IntroText>
            <IntroText>based in Rome, Georgia.</IntroText>
            <IntroLinkContainer>
                <IntroLink>LinkedIn</IntroLink>
                <IntroLink>GitHub</IntroLink>
                <IntroLink>Email</IntroLink>
            </IntroLinkContainer>
        </IntroContainer>
    )
}

const IntroContainer = styled(MainContainer)`
    margin-top: 120px;
`

const IntroText = styled.p`
    font-size: 3.3rem;
    // font-weight: bold;
    margin-bottom: 7px;
    text-shadow: 7px 4px rgba(0, 0, 0, 0.2);
`

const IntroLinkContainer = styled.div`
    margin-top: 20px;
    display: flex;
`

const IntroLink = styled.a`
    margin-right: 20px;
`