import Header from '../../components/header/header';
import React from 'react';
import { Container } from "./loginStyle.js";
import LoginForm from '../../components/loginForm/loginForm.jsx';
import CookingPhoto from '../../assets/LoginMainPhoto.png';


const Login = () => {


  return (

    <div>

      <Header  />

      <Container>
        
        <LoginForm />  
        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />

      </Container>

    </div>

  );

};

export default Login;
