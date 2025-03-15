import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; 
import { Container } from "./loginStyle.jsx";

import LoginForm from '../../components/loginForm/loginForm.jsx';
import { ThemeButton } from '../../components/themeButton/themeButton.jsx';

import LogoBlack from '../../assets/logoBlack.svg';
import LogoWhite from '../../assets/logoWhite.svg'; 
import CookingPhoto from '../../assets/LoginMainPhoto.png';

const Login = () => {
  const { currentTheme } = useContext(GlobalThemeContext); 

  return (
    <div className="login-page">
      <ThemeButton/>
      <Container>
        <div className="login-container">
          <img className="Logo" src={currentTheme === 'light' ? LogoBlack : LogoWhite} alt="Logo" />

          <LoginForm />
          <span className="LoginSpan">Não tem uma conta? <a href="/register">Cadastre-se</a> ou <a href="/"> entre como convidado</a></span>
        </div>
        
        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />
      </Container>
    </div>
  );
};

export default Login;
