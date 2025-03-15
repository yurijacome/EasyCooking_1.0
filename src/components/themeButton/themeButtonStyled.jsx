import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";

export const SwitchStyled = styled(Switch)`
position: absolute;
left: 95.3vw;

height: 50px;
width: 75px;

.MuiSwitch-root {
width:50px;

}

.MuiSwitch-thumb {
width: 17px;
height: 17px;

margin-top:7px;
margin-left: 8px;
color: red; 

}

.MuiSwitch-track {
width: 45px;

background-color: black; 
opacity: 0.8;
border-radius: 20px;

}

.Mui-checked {
& + .MuiSwitch-track {
background-color: white; 
opacity: 1;
}


`;