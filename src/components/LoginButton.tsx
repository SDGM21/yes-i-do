import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { auth } from "../firebase/init";
import { signInAnonymously, signInWithPopup } from "firebase/auth";
const LoginButton = ({
  logo,
  provider,
  alt,
  cardTitle,
}: {
  logo?: string;
  provider?: any;
  alt?: string;
  cardTitle?: "Github" | "Google" | "Anonimo" | "Email";
}) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    if (cardTitle === "Github" || cardTitle === "Google") {
      signInWithPopup(auth, provider).then((user) => {
        dispatch({ type: "Login", payload: user.user });
      });
    } else if (cardTitle === "Anonimo") {
      signInAnonymously(auth).then((user) => {
        dispatch({ type: "Login", payload: user.user });
      });
    }

    navigate("/rooms");
  };

  return (
    <>
      <div className="col s6">
        <div className="hoverable card">
          <div className="card-image">
            <button
              className={`${
                cardTitle !== "Email" ? "disabled" : "modal-trigger"
              }`}
              data-target={cardTitle === "Email" && "modal1"}
              onClick={handleClick}
              style={{
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img src={logo} alt={alt} />
              <span
                className="card-title"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "1px",
                  borderRadius: "4px",
                }}
              >
                {cardTitle}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
