import styled from "styled-components";

export const FilterAreaContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 180px;
    background-color: ${(props) => props.theme.backgroundColorTwo};

.filterBar{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    width: 50%;
}

.filterBar input{
    position: relative;
    height: 40px;
    width: 50vw;
    border: none;
    border-radius: 50px; 
    padding-left: 30px;

    background-color: ${(props) => props.theme.inputColorFilter};
    color: ${(props) => props.theme.colorOne};
    
    transition: all 0.3s ease-in-out;
    &:hover {    
    box-shadow: ${(props) => props.theme.boxShadowHover};
    }
    

}


.searchButton{
    position: absolute;
    left: 69.5%;
    height: 31px;
    width: 80px;

    border: none;
    border-radius: 50px;
}


.filterButtons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    margin-top: 30px;
    gap: 2vw;
}

.filterButtons button{
    border: none;
    width: 20vh;
    height: 30px;
    color: rgb(255, 255, 255);
    font-size: 0.9rem;
    font-weight: bold;

    transition: all 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadow};

    &:hover {    
        box-shadow: ${(props) => props.theme.boxShadowHover};
        transform: translateY(-6px);
    }
}

#B0{
    border-radius: 35px;
    background-color: ${props => props.theme.pallet1};
}

#B1{
    border-radius: 35px;
    background-color: ${(props) => props.theme.pallet2};
}

#B2{
    background-color: ${(props) => props.theme.pallet3};
    border-radius: 35px;
}

#B3{
    background-color: ${(props) => props.theme.pallet4};
    border-radius: 35px;
}

#B4{
    background-color: ${(props) => props.theme.pallet5};
    border-radius: 35px;
}

@media screen and (min-width: 700px){

    .filterBar div select {
        width: 95px;
}
        
    .filterButtons {
        width: 50vw;
        gap: 1vw;
}

}
`;