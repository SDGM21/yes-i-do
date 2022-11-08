import { useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { authContext } from "../context/AuthProvider";
import { db, auth } from "../firebase/init";
import MemoSlider from "./Slider";
import { signOut } from "firebase/auth";

const Header = () => {
  const { dispatch } = useContext(authContext);

  const handleClick = async (e: any) => {
    const myRef2 = collection(db, "rooms");
    const data = await getDocs(myRef2);
  };

  const handleLogout = (e: any) => {
    signOut(auth).then(() => dispatch({ type: "Logout", payload: null }));
  };

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
