import { signOut } from "firebase/auth";
import { useContext } from "react";
import Main from "../components/Main";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

const Room = () => {
  const { dispatch } = useContext(authContext);
  const { auth, signOut } = useFirebase();
  const handleLogout = (e: any) => {
    signOut(auth).then(() => dispatch({ type: "Logout", payload: null }));
  };
  return (
    <>
      <Main>
        <button onClick={handleLogout}>Logout</button>
        <h1>Rooms</h1>
      </Main>
    </>
  );
};

export default Room;
