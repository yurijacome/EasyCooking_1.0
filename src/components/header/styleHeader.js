import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    gap: 78vw;
    width: 100vw;
    height: 100px;
    background-color:rgb(79, 102, 148);

    .imgLogo {
        width: 180px;
        height: 100%;
        margin-left: 20px;
        cursor: pointer;
    }

        button {
            border: none;
            background-color: rgb(216, 29, 69);
            color: white;
            height: 35px;
            width: 100px;
            border-radius: 35px;
            cursor: pointer;

            :hover {
                filter: brightness(1.4)
            }
        }






`