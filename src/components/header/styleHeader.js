import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    width: 100vw;
    height: 70px;
    background-color:rgb(79, 102, 148);

    .imgLogo {
        width: 150px;
        height: 100%;
        cursor: pointer;
        background-color: rgb(15, 190, 221);
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