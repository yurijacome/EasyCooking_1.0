import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context
import { Container } from "./loginStyle.jsx";

import LoginForm from '../../components/loginForm/loginForm.jsx';
import CookingPhoto from '../../assets/LoginMainPhoto.png';
import LogoBlack from '../../assets/logoBlack.svg';
import LogoWhite from '../../assets/logoWhite.svg'; // Import LogoWhite for dark theme


const Login = () => {
  const { currentTheme, getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function


  return (
    <div className="login-page">
      {/* <Header  /> */}
      <Container>
        <div className="login-container">
          <img className="Logo" src={currentTheme === 'light' ? LogoBlack : LogoWhite} alt="Logo" />

          <button className="themeSelector" onClick={getOpositeTheme}>TEMA</button> {/* Use context function to toggle theme */}
          <LoginForm />
          <span className="LoginSpan">Não tem uma conta? <a href="/register">Cadastre-se</a> ou <a href="/"> entre como convidado</a></span>
        </div>
        <img className="CookingImg" src={CookingPhoto} alt="CookingPhoto" />
      </Container>
    </div>
  );
};

export default Login;
