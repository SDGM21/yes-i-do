import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e: any) => {
    let values: string = e.target.value;

    if (e.target.name === "username") {
      values = values.replaceAll(" ", "_");
    }

    setData({
      ...data,
      [e.target.name]: values,
    });
  };

  const handleRegister = (e:any) => {
    e.preventDefault();

    if (data.email.trim() === "" || !data.email.includes("@")) {
      return;
    } else if (data.username.length < 6 || data.username.trim() === "") {
      console.error("INVALID_USERNAME");
      return;
    } else if (data.password.length < 6) {
      console.error("Password need at least 6 characters");
      return;
    } else if (
      data.password !==
      document.getElementById("icon_confirmPassword_prefix")?.value.toString()
    ) {
      console.error("Password Don't Match");
      return;
    } else {
      return;
    }
  };

  return (
    <>
      {" "}
      <div className="container">
        <h3>LoginScreen</h3>
        <hr />
        <div className="row container">
          <form onSubmit={handleRegister} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <label htmlFor="icon_prefix">Email</label>
                <input
                  onChange={handleChange}
                  name={"email"}
                  id="icon_prefix"
                  type="email"
                  className="validate"
                />
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">person</i>
                <label htmlFor="icon_username_prefix">Username</label>
                <input
                  onChange={handleChange}
                  name={"username"}
                  id="icon_username_prefix"
                  type="text"
                  className="validate"
                />
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <label htmlFor="icon_password_prefix">Password</label>
                <input
                  onChange={handleChange}
                  name={"password"}
                  id="icon_password_prefix"
                  type="password"
                  className="validate"
                />
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <label htmlFor="icon_confirmPassword_prefix">
                  Confirm Password
                </label>
                <input
                  id="icon_confirmPassword_prefix"
                  type="password"
                  className="validate"
                />
              </div>
            </div>

            <button className="btn blue" type="submit">
              Send
            </button>
            <hr />

            <Link to={"/login"}>Login with Email</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
