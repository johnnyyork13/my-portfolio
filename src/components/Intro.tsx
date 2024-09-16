import styled from "styled-components";
import { MainContainer } from "../styled-components/main";
import { useEffect, useRef, useState } from "react";

export default function Intro() {

    const introRef = useRef<HTMLDivElement>(null)

    const [mouseCoords, setMouseCoords] = useState([0, 0])

    function moveTextShadow(e: MouseEvent, ref: any) {
        const windowWidth = window.innerWidth;
        const introWidth = ref.offsetWidth;
        const introHeight = ref.offsetHeight;
        let x = (5 - (e.clientX / 100)) * (e.clientX < introWidth / 2 ? 2 : -2);
        let y = e.clientY / 100;
        // console.log(e.clientY, introHeight / 2);
        if (e.clientX < introWidth / 2 && e.clientY < introHeight / 2) {
            // x *= 2;
            x = -x;
            y = -y;
        } else if (e.clientX > introWidth / 2 && e.clientY < introHeight / 2) {
            y = -y;
        } else if (e.clientX < introWidth / 2 && e.clientY > introHeight / 2) {
            // x *= 2;
            x = -x;
        }

        console.log(x, y)

        return [x, y];
    }

    useEffect(() => {
        console.log('here');
        if (introRef.current) {
            introRef.current.addEventListener("mousemove", (e) => {
                setMouseCoords(moveTextShadow(e, introRef.current));
            });
        }
    }, [])

    return (
        <IntroContainer ref={introRef} style={{textShadow: `${mouseCoords[0]}px ${mouseCoords[1]}px rgba(0,0,0,0.2)`}}>
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
`

const IntroLinkContainer = styled.div`
    margin-top: 20px;
    display: flex;
`

const IntroLink = styled.a`
    margin-right: 20px;
`