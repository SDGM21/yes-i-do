import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useContext } from "react";
import logoTest from "../assets/vite.svg";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";

const TEST_ID = "newRom";

const Header = () => {
  const { db, auth, signInWithPopup, GoogleProvider } = useFirebase();
  const { dispatch } = useContext(authContext);

  const handleClick = async (e: any) => {
    const myRef2 = collection(db, "rooms");
    const data = await getDocs(myRef2)
    data.forEach((doc) => {
      console.log(doc.data())
    })
    // const data = { roomName: 1, roomUserCreator: 2, roomDescription: 4 };

    // await addDoc(myRef2, data);
  };

  return (
    <>
      <nav>
        <div>
          <button
            onClick={handleClick}
            className={"waves-effect waves-light btn"}
          >
            <img src={logoTest} alt="Y.I.S. logo" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
