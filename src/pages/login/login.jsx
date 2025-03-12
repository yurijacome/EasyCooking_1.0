// import Header from '../../components/header/header';

import { Container } from "./loginStyle.js";
import LoginForm from '../../components/loginForm/loginForm.jsx';
import CookingPhoto from '../../assets/LoginMainPhoto.png';
import LogoBlack from '../../assets/logoBlack.svg';


const Login = () => {




  return (

    <div className="login-page">

      {/* <Header  /> */}

      <Container>
        <div className="login-container">
          <img className="Logo" src={LogoBlack} alt="Logo" />
          <LoginForm />
          <span className="LoginSpan">Não tem uma conta? <a href="/register">Cadastre-se</a> ou <a href="/"> entre como convidado</a></span>
        </div>

        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />

      </Container>

    </div>

  );

};

export default Login;
