import styled, { keyframes } from "styled-components";
import { ContainerTitle, MainContainer, SecondaryButton } from "../styled-components/main";
import ashleyTarotImg from '../assets/ashley-tarot.png';
import bearbookImg from '../assets/bearbook.png';
import vicewavesImg from '../assets/vicewaves.png';
import bloggyImg from '../assets/bloggy.png';
import portfolioImg from '../assets/portfolio.png';
import pokemonImg from '../assets/pokemon.png';

export default function Work() {

    function handleViewWebsite(url: string) {
        window.open(url);
    }

    return (
        <MainContainer>
            <ContainerTitle>Work</ContainerTitle>
            <WorkCardContainer>
                <WorkCard>
                    <WorkCardImage src={ashleyTarotImg} alt="Ashley Tarot" />
                    <WorkCardText>
                        <WorkCardTitle>Ashley Tarot</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            A tarot card reading website that utilizes AI to generate readings. Users can also schedule personal readings.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://ashleytarot.com")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={bearbookImg} alt="Bearbook" />
                    <WorkCardText>
                        <WorkCardTitle>Bearbook</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            A social media platform for Mercer Bears. Users can post, like, and comment, as well as add friends and view Mercer-related links.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://johnnyyork13.github.io/bearbook")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={vicewavesImg} alt="Vicewaves" />
                    <WorkCardText>
                        <WorkCardTitle>Vicewaves</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            A Synthwave e-commerce website for purchasing gear related to the synthwave and retrowave genres.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://vicewaves.com")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={bloggyImg} alt="Bloggy" />
                    <WorkCardText>
                        <WorkCardTitle>BloggyAI</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            A blog website that utilizes AI to generate blog posts.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://johnnyyork13.github.io/bloggyAI")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={portfolioImg} alt="Portfolio" />
                    <WorkCardText>
                        <WorkCardTitle>Port Folio</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            My portfolio website in pixel art style.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://johnnyyork13.github.io/portfolio")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={pokemonImg} alt="Pokemon" />
                    <WorkCardText>
                        <WorkCardTitle>Pokemon Deck Builder</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            A Pokemon card deck builder that allows users to search for cards and add them to a deck.
                        </WorkCardDescription>
                        <SecondaryButton onClick={() => handleViewWebsite("https://johnnyyork13.github.io/pokemon-deck-builder")}>View Live</SecondaryButton>
                    </WorkCardHoverContainer>
                </WorkCard>
            </WorkCardContainer>
        </MainContainer>
    )
}

const animateImage = keyframes`
    0% {

        transform: scale(1);
        filter: blur(0px);
    }
    100% {
        transform: scale(1.1);
        filter: blur(3px);
    }
`

const showDescription = keyframes`
    0%{
        opacity: 0;
        transform: scale(1);
    }
    100%{
        opacity: 1;
        transform: scale(1.15);
    }
`

const WorkCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 100px;
    grid-column-gap: 50px;
`

const WorkCardHoverContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: var(--nineFifty-secondary);
    font-weight: bold;
    font-size: 1.2rem;
    background-color: rgba(255,255,255,0.6);
    visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const WorkCard = styled.div`
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    &:hover {
        img {
            animation: ${animateImage} .2s linear forwards;
        }
        ${WorkCardHoverContainer} {
            animation: ${showDescription} .2s linear forwards;
            visibility: visible;
        }
    }
    position: relative;
`

const WorkCardText = styled.div`
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: -1;
    display: flex;
    justify-content: center;
`

const WorkCardTitle = styled.p`
    font-size: 1.2rem;
`

const WorkCardDescription = styled.p`
    margin: 10px;
    margin-bottom: 20px;
`

const WorkCardImage = styled.img`
    width: 100%;
    height: 250px;
`