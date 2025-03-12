
import { Container } from "./registerStyle.js";
import RegisterForm from '../../components/registerForm/registerForm.jsx';
import LogoBlack from '../../assets/logoBlack.svg';


const Register = () => {



  return (

    <div className="register-page">


      <Container>
        <div className="register-container">
          <img className="Logo" src={LogoBlack} alt="Logo" />
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
