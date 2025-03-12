import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color:${props => props.theme.backgroundColorOne};

    .register-container {
        display: flex;
        flex-direction: column;
        
        align-items: center;

        width: 55vw;
        height: 100vh;
    }

    .Logo {
        width: 100vh;
        height: 200px;
        margin-top: 80px;
    }

    h1 {
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.colorOne};
    text-align: center;
    width: 80%;
    align-self: center;
    margin-top: 80px;
    }

    span {
        color: rgb(255, 1, 1);
    }

    a{
        color: rgb(255, 0, 0);
    }


    @media(max-width: 567px) {
        width: 90vw;

        div {
            gap: 2px;
        }

        input {
            height: 45px;
        }
    }
`;
