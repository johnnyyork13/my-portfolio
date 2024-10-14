import styled from "styled-components";

export const DialogBox = styled.div<({$left: number, $top: number})>`
    position: absolute;
    left: ${(props => props.$left)}px;
    top: ${(props => props.$top)}px;
`

export const DialogBoxHeader = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    font-size: .8rem;
    // padding-bottom: 5px;
    p {
        padding: 7px;
        &:hover {
            background-color: var(--xp-blue);
            color: white;
            cursor: default;
        }
    }
    border-bottom: 1px solid rgb(200,200,200);
`

export const DialogBoxBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 210px 1fr;
    height: 100%;
    border-top: 2px solid rgb(200,200,200);
`

export const MainDialogIconContainer = styled.div<({ $maximized: boolean})>`
    width: ${props => props.$maximized ? "100%" : "600px"};
    height: ${props => props.$maximized ? "100%" : "400px"};
    background-color: white;
    padding-bottom: ${props => props.$maximized ? "0px" : "100px"};
`

export const DialogIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export const DialogIconsHeader = styled.div`
    p {
        font-size: .8rem;
        font-weight: bold;
        margin: 5px;
        margin-bottom: 2px;
    }
    div {
        height: 1px;
        background: linear-gradient(to right, rgb(112, 191, 255) 0px, rgb(255, 255, 255) 100%);
    }
`

export const DialogIcon = styled.div<{ $selected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    margin-top: 10px;
    p {
        margin-top: 5px;
        padding: 5px;
        color: ${props => props.$selected ? "white" : "black"};
        background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
        cursor: default;
    }
    img {
        padding: 5px;
        width: 48px;
        height: 48px;
        background-color: ${props => props.$selected ? "var(--xp-blue)" : "white"};
    }
`

export const HeaderIconContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`

export const HeaderIcon = styled.div<{ $clicked?: boolean }>`
    border: 1px solid rgb(0,0,0,0.01);
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    img {
        margin-right: 5px;
    }
    &:hover {
        border: 1px solid rgb(0,0,0,0.1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 1px inset;
    }
    &:active {
        background-color: rgb(220,220,220);
        p, img {
            transform: translate(1px, 1px);
        }
    }
    p {
        cursor: default;    
    }
`

export const Divider = styled.div`
    border-left: 1px solid rgb(200,200,200);
    width: 1px;
    height: 100%;
`

export const BlackRightArrow = styled.div`
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid black;
    position: absolute;
    right: 15px;
    z-index: 1;
`