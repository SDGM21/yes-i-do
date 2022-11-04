import { setDoc } from "firebase/firestore";
import { useContext } from "react";
import Main from "../components/Main";
import { authContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";
import useGetCollection from "../hooks/useGetCollection";

const Room = () => {
  const { state } = useContext(authContext);

  const { db, addDoc, collection, doc } = useFirebase();

  const handleCreateRoom = async (e: any) => {
    const addCollectionRef = collection(db, "privateRooms");
    const ref2 = doc(addCollectionRef);
    const ref3 = collection(ref2, "userMessages");

    try {
      const docRef = await addDoc(addCollectionRef, {
        roomCreator: "",
        roomDescription: "",
        roomFinish: "",
        roomName: "",
        roomPrivacy: "",
        roomStart: "",
      });

      const messagesRef = await setDoc(
        doc(docRef, "userMessages", `${state.uid}`),
        {
          messages: {},
        }
      );
    } catch (ERR) {
      console.error(ERR);
    }

    return;
  };
  return (
    <>
      <Main>
        <div className="row container">
          <div>
            <h1>Rooms</h1>
          </div>
          <div className="row col s12">
            <ul className="collection">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle" />
                <span className="title">Title</span>
                <p>
                  First Line <br />
                  Second Line
                </p>
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Title</span>
                <p>
                  First Line <br />
                  Second Line
                </p>
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">Title</span>
                <p>
                  First Line <br />
                  Second Line
                </p>
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">Title</span>
                <p>
                  First Line <br />
                  Second Line
                </p>
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Room;
