import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

export default function FormModal() {
  const { dispatch } = useContext(authContext);
  const [state, setState] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const { auth, signInWithEmailAndPassword } = useFirebase();

  const handleChange = (e: any) => {
    const stringValue = e.target.value;
    setState({ ...state, [e.target.id]: stringValue });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (state.email.includes("@") && state.password !== "") {
      signInWithEmailAndPassword(auth, state.email, state.password).then(
        (user) => {
          dispatch({ type: "Login", payload: user });
          navigate("/rooms");
        }
      );
    }
  };

  return (
    <>
      <div id="modal1" className="modal">
        <div className="modal-content row container">
          <div style={{ marginBottom: "10px" }}>
            <button
              data-target="modal1"
              className="modal-close waves-effect waves-green btn red"
            >
              <i className="material-icons">arrow_back</i>
            </button>
          </div>
          <div className="row col s12">
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="center">
                <button className="btn blue">Login</button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <span>No Account?, go to </span>
            <Link to={"/register"}>Sing In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
