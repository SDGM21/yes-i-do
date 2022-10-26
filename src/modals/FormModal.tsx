import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

export default function FormModal({ open, close }: { open: any; close: any }) {
  const { dispatch } = useContext(authContext);
  const [state, setState] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const { createUserWithEmailAndPassword, auth } = useFirebase();

  const handleChange = (e: any) => {
    const stringValue = e.target.value;
    setState({ ...state, [e.target.id]: stringValue });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (state.email.includes("@") && state.password !== "") {
      createUserWithEmailAndPassword(auth, state.email, state.password).then(
        (user) => {
          dispatch({ type: "Login", payload: user });
          navigate("/rooms");
        }
      );
    }
  };
  if (!open) {
    return null;
  } else {
    return (
      <>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,.7)",
            zIndex: 1000,
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "#fff",
            padding: "20px",
            zIndex: 1000,
          }}
          className="row col s4"
        >
          <div style={{ marginBottom: "10px" }}>
            <button onClick={close} className="btn black">
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
            </form>
            <div>
              <Link to={"/register"}>Registrarse</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
