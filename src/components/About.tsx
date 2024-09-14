import styled from 'styled-components'
import { ContainerTitle, MainContainer } from '../styled-components/main'
import me from '../assets/me.png'

export default function About() {

    //About sections
    //Motorcycle enthusiast, woodworker, 

    return (
        <AboutContainer>
            <ContainerTitle>About</ContainerTitle>
            <AboutSection $backgroundColor={true}>
                <AboutText>
                    Hello, I'm Johnny York, a growing UX designer and developer based in Rome, Georgia. I'm a recent graduate of Mercer University with a Bachelor of Science in Software Application Development and Human-Computer Interaction.
                    I'm currently seeking opportunities to grow my skills in the tech industry.
                </AboutText>
                <AboutImage src={me} alt="Johnny York" />
            </AboutSection>
            <AboutSection $backgroundColor={false}>
                <AboutText>

                </AboutText>
            </AboutSection>
        </AboutContainer>
    )
}

const AboutContainer = styled(MainContainer)`
    margin-top: 100px;
`

const gradient = `background: rgb(255,255,255);
background: linear-gradient(82deg, rgba(255,255,255,1) 27%, rgba(252,211,77,1) 100%);`

const AboutSection = styled.div<{ $backgroundColor: boolean }>`
    display: flex;
    align-items: center;
    /* background-color: ${props => props.$backgroundColor ? gradient : ''}; */
    padding: 20px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    // background: rgb(255,255,255);
    // background: linear-gradient(82deg, rgba(255,255,255,1) 27%, rgba(252,211,77,1) 100%);
`

const AboutText = styled.p`
    font-size: 1.2rem;
`

const AboutImage = styled.img`
    width: 200px;
    border-radius: 50%;
    margin-left: 20px;
`

