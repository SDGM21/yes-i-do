import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useTransition,
} from "react";
import { initRequiredRoomData, RoomRequiredData } from "../firebase/config";
import M from "materialize-css";
import { authContext } from "../context/AuthProvider";
import createNewRoom from "../firebase/functions/createNewRoom";
import { Timestamp } from "firebase/firestore";

const NewRoom = () => {
  const { state } = useContext(authContext);
  const [init, setInit] = useTransition();
  const [inputData, setInputData] = useState<RoomRequiredData>({
    ...initRequiredRoomData,
  });

  const [ref, setRef] = useState<any>(null);
  const [instances, setInstances] = useState<{
    dateInstance: M.Datepicker[];
    timeInstance: M.Timepicker[];
    chipInstance: M.Chips[];
  } | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setInit(() => {
      setInputData({
        ...inputData,
        guests: M.Chips.getInstance(
          document.querySelectorAll(".chips")[0] as Element
        ).chipsData.map(({ tag }) => tag),

        roomStart: Timestamp.fromDate(new Date()),
        roomFinish: Timestamp.fromDate(new Date()),
        roomImage: "",
      });
    });

    createNewRoom({ ...inputData }).then((ref) => setRef(ref));
  };

  function handleChange(e: any) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (state) {
      setInputData({ ...inputData, roomCreator: state.email });
    }
    M.AutoInit();
  }, [state]);

  return (
    <>
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="input_roomName_text"
                name="roomName"
                type="text"
                onChange={handleChange}
              />
              <label htmlFor="input_roomName_text">Room Name</label>
            </div>

            <div className="input-field col s12">
              <input
                id="input_roomDescription_text"
                name="roomShortD"
                type="text"
                onChange={handleChange}
              />
              <label htmlFor="input_roomDescription_text">
                Room Short Description
              </label>
            </div>

            <div className="input-field col s12">
              <textarea
                onChange={handleChange}
                id="textarea1"
                name="roomDescription"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">Room Long Description</label>
            </div>

            <div className="input-field col s6">
              <input
                type="text"
                name="rSD"
                placeholder="Fecha de inicio"
                className="datepicker"
              />
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="rST"
                placeholder="Hora de inicio"
                className="timepicker"
              />
            </div>

            <div className="input-field col s12">
              <div className="chips chips-placeholder"></div>
            </div>

            <div className="file-field input-field col s12">
              <div className="btn">
                <span>File</span>
                <input type="file" name="roomImage" placeholder="Room Photo" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>

            <div className="switch">
              <label>
                Public
                <input
                  type="checkbox"
                  onClick={() =>
                    setInputData({
                      ...inputData,
                      roomPrivacy: !inputData.roomPrivacy,
                    })
                  }
                />
                <span className="lever"></span>
                Private
              </label>
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type={"submit"}
              className={`${init ? "btn red" : "btn blue"}`}
            >
              {`${init ? "Creating..." : "Crear+"}`}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRoom;
