import styled from "styled-components"

export default function TaskbarItem(props: {title: string, setOpenedDialogBoxes: Function}) {

    return (
        <TaskBarItemContainer className="title-bar">
            <Title>{props.title}</Title>
        </TaskBarItemContainer>
    )
}

const TaskBarItemContainer = styled.div`
    width: 150px;
    height: 20px;
    // background-color: var(--xp-blue);
    filter: brightness(140%) !important;
    margin-left: 0px;
    padding-left: 10px;
    border-radius: 5px;
    color: white;
    // background-color: var(--taskbar-default) !important;
    &:hover {
        filter: brightness(160%) !important;
    }   
`

const Title = styled.p`
`