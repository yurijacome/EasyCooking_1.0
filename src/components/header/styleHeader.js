import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    gap: 78vw;
    width: 100vw;
    height: 100px;
    background-color:${props => props.theme.backgroundColorOne};
    color:${props => props.theme.colorOne};

    .imgLogo {
        width: 180px;
        height: 100%;
        margin-left: 20px;
        cursor: pointer;
    }







`