import styled from "styled-components";

export const StyledForm = styled.form`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 25vw;
    min-height: 40vh;

    
    border: none;


    h1{
    align-self: center;
    margin-top: 40px;
    margin-bottom: 20px;
    }

        input{
 
    }

    span{
    font-size: 0.9rem;
    color: rgb(253, 0, 0);
    align-self: center;
    margin-top: 10px;
    }

    button{ 
        width: 40%;
        margin-top: 50px;
        height: 45px;
        border-radius: 50px;
        border: none;
        background-color: rgb(255, 0, 0);
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .Field{
        align-self: center;
        margin-top: 5px;
        margin-bottom: 5px;

        border-radius: 50px;
        border: none;
        background-color: #f0f0f0;

        width: 100%;
        height: 45px;

        padding: 6px;
        font-size: 15px;
    }

        label{
        font-size: 18px;
        font-weight: 600;
        margin-left: 30px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }









    @media(max-width: 567px){
        width: 90vw;

        div{
            gap: 2px;
        }

        input{
            height: 45px;
        }


    }


`

