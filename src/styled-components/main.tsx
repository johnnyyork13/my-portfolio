import styled from 'styled-components'

export const MainContainer = styled.div`
    margin-top: 40px;
    // border: 1px solid red;
    width: 1000px;
`

export const ContainerTitle = styled.p`
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: 1.2rem;
`

export const PrimaryButton = styled.button`
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--five);
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 1.1rem;
    &:hover {
        background-color: var(--four);
    }
`

export const SecondaryButton = styled(PrimaryButton)`
    background-color: var(--four-secondary);
    &:hover {
        background-color: var(--three-secondary);
    }
`

export const MainInput = styled.input`
    width: 500px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 5px;
    // border: 2px solid var(--five);
    border: none;
    padding-left: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    font-size: 1.2rem;
    &::placeholder {
        // color: var(--six-secondary);
        color: var(--six);
    }
`