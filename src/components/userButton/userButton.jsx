import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react"; // Import useContext for theme management

import { UserButtonStyled } from "./userButtonStyle";
import { UserContainer } from "./userButtonStyle";
import { GiCook } from "react-icons/gi";

export const UserButton = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    const handleRegister = () => {
        history.push('/register');
    };

    return (
    <>
        <UserButtonStyled onClick={() => setOpen(!open)}>
            <GiCook className="userIcon" />
        </UserButtonStyled>

        {open && ( 
            <UserContainer>

                <button 
                onClick={handleLogin}>Login
                </button>

                <button 
                onClick={handleRegister}>Registrar
                </button>

            </UserContainer>)}



    </>
    );
};