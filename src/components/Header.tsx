import styled from "styled-components";
import { MainContainer } from "../styled-components/main";

export default function Header() {

    return (
        <HeaderContainer>
            <Name>
                <p>Johnny York</p>
            </Name>
            <Nav>
                <NavItem>
                    <a href="#home">Home</a>
                </NavItem>
                <NavItem>
                    <a href="#work">Work</a>
                </NavItem>
                <NavItem>
                    <a href="#about">About</a>
                </NavItem>
                <NavItem>
                    <a href="#resume">Resume</a>
                </NavItem>
                <NavItem>
                    <a href="#contact">Contact</a>
                </NavItem>
            </Nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0px;
    height: 84px;
    background: rgb(252,211,77);
    background: linear-gradient(180deg, rgba(252,211,77,1) 23%, rgba(255,255,255,0.5907155098367471) 100%);
    z-index: 100;
`

const Name = styled.div`
    font-size: 1.7rem;
`

const Nav = styled.div`
    display: flex;
`

const NavItem = styled.div`
    margin-right: 20px;
    a {
        text-decoration: none;
        color: black;
    }
`

