import Header from '../../components/header/header';
import React, { useState } from 'react';

import { Container } from "./loginStyle.js";
import LoginForm from '../../components/loginForm/loginForm.jsx';
import CookingPhoto from '../../assets/LoginMainPhoto.png';
import RegisterForm from '../../components/registerForm/registerForm.jsx'; // Import RegisterForm



const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false); // Define state




  return (

    <div>

      <Header  />

      <Container>
        <div className="login-container">
          <span className="LoginSpan">Faça 
            <button onClick={() => setShowRegisterForm(false)}>Login</button>, 
            ou 
            <button onClick={() => setShowRegisterForm(true)}>cadastre-se</button>
          </span>
          {showRegisterForm ? <RegisterForm /> : <LoginForm />}  

        </div>

        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />

      </Container>

    </div>

  );

};

export default Login;
