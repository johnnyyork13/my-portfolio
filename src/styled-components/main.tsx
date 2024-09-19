import styled from "styled-components";

export const DialogBox = styled.div<({$left: number, $top: number})>`
    position: absolute;
    left: ${(props => props.$left)}px;
    top: ${(props => props.$top)}px;
`