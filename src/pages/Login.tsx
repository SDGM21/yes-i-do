import Main from "../components/Main";
import LoginButton from "../components/LoginButton";
import gitHubLogo from "../assets/211904_social_github_icon.svg";
import googleLogo from "../assets/7123025_logo_google_g_icon.svg";
import anonimLogo from "../assets/3994434_address_at_contact_email_icon.svg";
import emailPassLogo from "../assets/9024815_password_light_icon.svg";
import { memo, useEffect, useState } from "react";
import FormModal from "../modals/FormModal";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { GithubProvider, GoogleProvider } = useFirebase();

  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState({});

  const [state, setState] = useState<string>("");

  const Modal = memo(FormModal);

  useEffect(() => {
    if (state === "Email") {
      setOpen(true);
    }
  }, [state]);

  return (
    <Main>
      <div className="row container">
        <h2 className="flow-text center">
          Seleccione un metodo de Inicio de Sesion
        </h2>
        <Modal
          open={open}
          close={() => {
            setOpen(false);
            setState("");
          }}
        />
        <div className="row container">
          <div className="row col s12">
            <LoginButton
              logo={anonimLogo}
              cardTitle={"Anonimo"}
              stateSetter={setState}
              isOpen={open}
            />
            <LoginButton
              logo={emailPassLogo}
              cardTitle={"Email"}
              stateSetter={setState}
              isOpen={open}
            />
            <LoginButton
              logo={gitHubLogo}
              alt={"Github Logo"}
              cardTitle={"Github"}
              stateSetter={setState}
              isOpen={open}
              provider={GithubProvider}
            />
            <LoginButton
              logo={googleLogo}
              cardTitle={"Google"}
              stateSetter={setState}
              isOpen={open}
              provider={GoogleProvider}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Login;
