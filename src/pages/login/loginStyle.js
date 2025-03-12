import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    width: 100vw;
    background-color: #f0f0f0;


    .login-page{
        width: 100vw;
        height: 100vw;
        display: flex;  
        flex-direction: column;
    }

    .login-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 55vw;
        height: 100vh;
        background-color:rgb(160, 29, 29);
    }

    .CookingImg{
        width: 40vw;
        height: 85vh;
        margin-left: 50px;
    }

    .LoginSpan{
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
`;
