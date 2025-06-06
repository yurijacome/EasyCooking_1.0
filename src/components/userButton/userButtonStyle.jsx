import styled from "styled-components";

export const UserButtonStyled = styled.button`

    border: none;
    height: 50px;
    width: 50px;
    border-radius: 100px;
    cursor: pointer;
    margin-left: 30px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadow};

    &:hover {    
    box-shadow: ${(props) => props.theme.boxShadowHover};
    transform: translateY(-1px);
    } 

    .userIcon{
    width: 60%;
    height: 60%;
    color:${(props) => props.theme.colorIcon};
    }


`

export const UserContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 200px;
    min-height:180px;

    right:0;
    top: 90px;
    margin-right: 40px;

    
    border:none;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadowHard};


    background-color:${props => props.theme.backgroundColorTwo};

    Button{
    width:70%;
    height: 35px;

    margin-top:10px;



    border:none;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadow};

        &:hover {    
        box-shadow: ${(props) => props.theme.boxShadowHover};
        transform: translateY(-2px);
        } 
    }


`