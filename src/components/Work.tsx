import styled, { keyframes } from "styled-components";
import { ContainerTitle, MainContainer } from "../styled-components/main";
import ashleyTarotImg from '../assets/ashley-tarot.png';
import bearbookImg from '../assets/bearbook.png';
import vicewavesImg from '../assets/vicewaves.png';
import bloggyImg from '../assets/bloggy.png';
import portfolioImg from '../assets/portfolio.png';
import pokemonImg from '../assets/pokemon.png';

export default function Work() {

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
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
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
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
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
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
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
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
                    </WorkCardHoverContainer>
                </WorkCard>
                <WorkCard>
                    <WorkCardImage src={portfolioImg} alt="Portfolio" />
                    <WorkCardText>
                        <WorkCardTitle>Port Folio</WorkCardTitle>
                    </WorkCardText>
                    <WorkCardHoverContainer>
                        <WorkCardDescription>
                            My personal portfolio website in pixel art style.
                        </WorkCardDescription>
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
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
                        <ViewWebsiteButton>View Live</ViewWebsiteButton>
                    </WorkCardHoverContainer>
                </WorkCard>
            </WorkCardContainer>
        </MainContainer>
    )
}

const animateImage = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.15);
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
    color: white;
    font-size: 1.2rem;
    background-color: rgba(0,0,0,0.3);
    visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const WorkCard = styled.div`
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover {
        img {
            animation: ${animateImage} .2s linear forwards;
        }
        ${WorkCardHoverContainer} {
            animation: ${showDescription} .2s linear forwards;
            visibility: visible;
        }
    }
    cursor: pointer;
    position: relative;
`

const WorkCardText = styled.div`
    position: absolute;
    bottom: -40px;
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
`

const WorkCardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: stretch;
    filter: blur(1px);
`

const ViewWebsiteButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: var(--five-secondary);
        color: white;
    }
`