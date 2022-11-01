import { signOut } from "firebase/auth";
import { useContext } from "react";
import Main from "../components/Main";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

const Room = () => {
  const { dispatch } = useContext(authContext);
  const { auth, signOut } = useFirebase();

  return (
    <>
      <Main>
        <div className="container">
          <h1>Rooms</h1>
        </div>
      </Main>
    </>
  );
};

export default Room;
