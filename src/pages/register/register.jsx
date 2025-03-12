import { useContext } from "react"; // Import useContext for theme management
import { GlobalThemeContext } from '../../providers/models/theme/theme.jsx'; // Import the context
import { Container } from "./registerStyle.jsx";

import RegisterForm from '../../components/registerForm/registerForm.jsx';
import StyledButton from '../../components/StyledButton'; // Import the StyledButton component

import LogoBlack from '../../assets/logoBlack.svg';
import LogoWhite from '../../assets/logoWhite.svg'; // Import LogoWhite for dark theme


const Register = () => {
  const { currentTheme, getOpositeTheme } = useContext(GlobalThemeContext); // Use context to get theme switch function



  return (

    <div className="register-page">


      <Container>
      <StyledButton onClick={getOpositeTheme}>TEMA</StyledButton>
        <div className="register-container">
          <img className="Logo" src={currentTheme === 'light' ? LogoBlack : LogoWhite} alt="Logo" />
            <h1>Facilitando sua vida no dia a dia. Guiando sua <span>cozinha </span> 
            com <span>harmonia</span>, pensado <span>para você!</span> 
            </h1>
        </div>

        <RegisterForm />

      </Container>

    </div>

  );

};

export default Register;
