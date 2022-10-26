import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

const LoginButton = ({
  logo,
  provider,
  alt,
  cardTitle,
  stateSetter,
  isOpen,
}: {
  logo?: string;
  provider?: any;
  alt?: string;
  cardTitle?: string;
  stateSetter?: any;
  isOpen?: boolean;
}) => {
  const { auth, signInWithPopup, signInAnonymously } = useFirebase();
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    if (cardTitle === "Github" || cardTitle === "Google") {
      signInWithPopup(auth, provider).then((user) => {
        dispatch({ type: "Login", payload: user });
        navigate("/rooms");
      });
    } else if (cardTitle === "Anonimo") {
      signInAnonymously(auth).then((user) => {
        dispatch({ type: "Login", payload: user });
      });
    } else {
      if (!isOpen) {
        stateSetter(cardTitle);
      }
    }
  };

  return (
    <>
      <div className="col s6">
        <div className="hoverable card">
          <div className="card-image">
            <button
              className={`${isOpen && "disabled"}`}
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
