import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;


    .CookingImg{
        width: 40vw;
        height: 85vh;
        margin-left: 50px;
    }

    .login-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45vw;
        height: 100vh;
        background-color:rgb(160, 29, 29);
    }

    .LoginSpan{
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
`;
