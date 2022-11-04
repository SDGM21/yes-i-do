import Main from "../components/Main";
import LoginButton from "../components/LoginButton";
import gitHubLogo from "../assets/211904_social_github_icon.svg";
import googleLogo from "../assets/7123025_logo_google_g_icon.svg";
import anonimLogo from "../assets/3994434_address_at_contact_email_icon.svg";
import emailPassLogo from "../assets/9024815_password_light_icon.svg";
import { memo, useEffect, useState } from "react";
import FormModal from "../modals/FormModal";
import useFirebase from "../hooks/useFirebase";
import M from "materialize-css";

const Login = () => {
  const modalElements = document.querySelectorAll(".modal");
  const modalInstance = M.Modal.init(modalElements);

  const { GithubProvider, GoogleProvider } = useFirebase();

  const [open, setOpen] = useState(false);
  const [state, setState] = useState<string>("");

  useEffect(() => {
    if (state === "Email") {
      setOpen(true);
    }
  }, [state]);

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
