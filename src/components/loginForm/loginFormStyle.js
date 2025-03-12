import styled from "styled-components";

export const StyledForm = styled.form`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;


    width: 35vw;
    min-height: 30vh;
    margin: 20px 20px 20px 0px;

    
    border: 1px solid #000;
    background-color:rgb(226, 223, 12);


    h1{
    margin: 30px 0; 
    align-self: center;
    }

    span{
    color: red;
    align-self: center;
    margin-top: 10px;
    }

    button{ 
        width: 70%;
        margin-top: 50px;
        margin-left: 80px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: #000;
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .Field{
        align-self: center;
        height: 35px;
        width: 70%;
        margin-top: 35px;
        border-radius: 5px;
        border: 1px solid #000;
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

