import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    width: 100vw;
    background-color: ${props => props.theme.backgroundColorOne};



    .login-page {
        width: 100vw;
        height: 100vw;
        display: flex;  
        flex-direction: column;
    }

    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 55vw;
        height: 100vh;
        background-color:${props => props.theme.backgroundColorOne};
    }

    .Logo {
        width: 100vw;
        height: 200px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
        
    .CookingImg {
        width: 40vw;
        height: 90vh;
    }

    .LoginSpan {
        color: ${props => props.theme.colorOne};
        font-size: 0.9rem;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
    a {
        color: rgb(255, 0, 0);   
    }
`;
