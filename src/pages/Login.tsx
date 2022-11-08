import Main from "../components/Main";
import LoginButton from "../components/LoginButton";
import gitHubLogo from "../assets/211904_social_github_icon.svg";
import googleLogo from "../assets/7123025_logo_google_g_icon.svg";
import anonimLogo from "../assets/3994434_address_at_contact_email_icon.svg";
import emailPassLogo from "../assets/9024815_password_light_icon.svg";
import { useEffect } from "react";
import FormModal from "../modals/FormModal";
import { GithubProvider, GoogleProvider } from "../firebase/init";
import M from "materialize-css";

const Login = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Main>
      <div className="row container">
        <h2 className="flow-text center">
          Seleccione un metodo de Inicio de Sesion
        </h2>
        <FormModal />
        <div className="row container">
          <div className="row col s12">
            <LoginButton logo={anonimLogo} cardTitle={"Anonimo"} />
            <LoginButton logo={emailPassLogo} cardTitle={"Email"} />
            <LoginButton
              logo={gitHubLogo}
              alt={"Github Logo"}
              cardTitle={"Github"}
              provider={GithubProvider}
            />
            <LoginButton
              logo={googleLogo}
              cardTitle={"Google"}
              provider={GoogleProvider}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Login;
