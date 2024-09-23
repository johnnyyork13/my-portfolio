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