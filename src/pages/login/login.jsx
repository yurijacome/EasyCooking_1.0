import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context
import { Container } from "./loginStyle.jsx";

import LoginForm from '../../components/loginForm/loginForm.jsx';
import StyledButton from '../../components/StyledButton'; // Import the StyledButton component

import LogoBlack from '../../assets/logoBlack.svg';
import LogoWhite from '../../assets/logoWhite.svg'; // Import LogoWhite for dark theme
import CookingPhoto from '../../assets/LoginMainPhoto.png';

const Login = () => {
  const { currentTheme, getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function

  return (
    <div className="login-page">
      {/* <Header  /> */}
      <Container>
      <StyledButton onClick={getOpositeTheme}>TEMA</StyledButton>

        <div className="login-container">
          <img className="Logo" src={currentTheme === 'light' ? LogoBlack : LogoWhite} alt="Logo" /> {/* Change logo based on theme */}

          <LoginForm />
          <span className="LoginSpan">Não tem uma conta? <a href="/register">Cadastre-se</a> ou <a href="/"> entre como convidado</a></span>
        </div>
        
        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />
      </Container>
    </div>
  );
};

export default Login;
