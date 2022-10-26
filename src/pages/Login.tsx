import Main from "../components/Main";
import LoginButton from "../components/LoginButton";
import gitHubLogo from "../assets/211904_social_github_icon.svg";
import googleLogo from "../assets/7123025_logo_google_g_icon.svg"
import { Link } from "react-router-dom";
const Login = () => {
  const handleLogin = () => {};

  const handleChange = () => {};
  return (
    <Main>
      <div className="row container">
        <div className="row col s7">
          <form onSubmit={handleLogin} className="container col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <label htmlFor="icon_prefix">Email</label>
                <input
                  onChange={handleChange}
                  id="icon_prefix"
                  name="email"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <label htmlFor="icon_password_prefix">Password</label>
                <input
                  onChange={handleChange}
                  id="icon_password_prefix"
                  name="password"
                  type="password"
                  className="validate"
                />
              </div>
            </div>

            <Link to={"/register"}>Register new user</Link>
          </form>
        </div>
        <div className="row col s5">
          <LoginButton logo={gitHubLogo} provider={""}/>
          <LoginButton logo={googleLogo} provider={""}/>
          <LoginButton logo={gitHubLogo} provider={""}/>
          <LoginButton logo={googleLogo} provider={""}/>
        </div>
      </div>
    </Main>
  );
};

export default Login;
