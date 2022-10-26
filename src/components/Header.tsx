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
    const data = await getDocs(myRef2);
    data.forEach((doc) => {
      console.log(doc.data());
    });
    // const data = { roomName: 1, roomUserCreator: 2, roomDescription: 4 };

    // await addDoc(myRef2, data);
  };

  return (
    <>
      <nav>
        <div className="black nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
