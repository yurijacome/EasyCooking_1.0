import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react"; // Import useContext for theme management

import { UserButton } from "./userButtonStyle";
import { UserContainer } from "./userButtonStyle";
import { GiCook } from "react-icons/gi";

export const UserArea = () => {
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
        <UserButton onClick={() => setOpen(!open)}>
            <GiCook className="userIcon" />
        </UserButton>

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