import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    gap: 78vw;
    width: 100vw;
    height: 100px;
    background-color:${props => props.theme.colorHeader};
    color:${props => props.theme.colorOne};

    .imgLogo {
        width: 180px;
        height: 100%;
        margin-left: 20px;
        cursor: pointer;
    }

        button {
            border: none;
            background-color: ${props => props.theme.button.backgroundColor};
            color: white;
            height: 35px;
            width: 100px;
            border-radius: 35px;
            margin-left: -15vh;
            cursor: pointer;

            :hover {
                filter: brightness(1.4)
            }
        }






`