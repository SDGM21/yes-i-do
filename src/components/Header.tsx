import { useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";
import M from "materialize-css";
import MemoSlider from "./Slider";

const Header = () => {
  const { db, auth, signOut } = useFirebase();
  const { dispatch } = useContext(authContext);

  const handleClick = async (e: any) => {
    const myRef2 = collection(db, "rooms");
    const data = await getDocs(myRef2);
  };

  const handleLogout = (e: any) => {
    signOut(auth).then(() => dispatch({ type: "Logout", payload: null }));
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <nav className="black">
        <div style={{ margin: "0px 10px" }} className="nav-wrapper">
          <a href="#" className="brand-logo center">
            Rooms
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <button className="btn red" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
          <span
            style={{ cursor: "pointer" }}
            data-target="slide-out"
            className="sidenav-trigger"
          >
            <i className="material-icons">menu</i>
            Menu
          </span>
        </div>
      </nav>

      {/* Slider  */}
      <MemoSlider handler={handleLogout} />
    </>
  );
};

export default Header;
