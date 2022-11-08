import { Timestamp } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import {
  FirebaseDate,
  initRequiredRoomData,
  RoomRequiredData,
} from "../firebase/config";
import M from "materialize-css";
import { Room } from "../firebase/classes/Room";
import { authContext } from "../context/AuthProvider";
import setUserNewRoom from "../firebase/functions/setUserNewRoom";

const NewRoom = () => {
  const { state } = useContext(authContext);

  const [inputData, setInputData] = useState<RoomRequiredData>({
    ...initRequiredRoomData,
    roomCreator: state ? state.email : "",
  });

  const handleChange = (e: any) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dateInstance = M.Datepicker.getInstance(
      document.querySelector(".datepicker") as Element
    );
    const timeInstance = M.Timepicker.getInstance(
      document.querySelector(".timepicker") as Element
    );
    const chipInstance = M.Chips.getInstance(
      document.querySelector(".chips") as Element
    );

    const firebaseTime = new FirebaseDate(
      dateInstance.date,
      timeInstance.time,
      timeInstance.amOrPm
    ).getFixedDate();

    setInputData({
      ...inputData,
      guests: chipInstance.chipsData.map(({ tag }) => tag),
      roomStart: Timestamp.fromDate(new Date()),
      roomFinish: Timestamp.fromDate(firebaseTime),
    });

    const createdRoom = new Room(inputData);

    setUserNewRoom;
  };

  function initChips() {
    return M.Chips.init(document.querySelector(".chips") as Element, {
      placeholder: "Guests Emails",
    });
  }
  function initTimePicker() {
    return M.Timepicker.init(document.querySelector(".timepicker") as Element);
  }

  function initDatePicker() {
    return M.Datepicker.init(document.querySelector(".datepicker") as Element);
  }

  useEffect(() => {
    initTimePicker();
    initChips();
    initDatePicker();
  }, []);

  return (
    <>
      <div className="row container">
        <form className="col s6">
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

            {/* Fecha de Inicio y Finalizacion */}
            <div className="row">
              <div className="input-field col s6">
                <input
                  type="text"
                  placeholder="Fecha de inicio"
                  className="datepicker"
                />
              </div>
              <div className="input-field col s6">
                <input
                  type="text"
                  placeholder="Hora de inicio"
                  className="timepicker"
                />
              </div>

              {/* <div className="input-field col s6">
                <input
                  placeholder="Fecha de Finalización"
                  type="text"
                  className="datepicker"
                />
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Hora de finalización"
                  type="text"
                  className="timepicker"
                />
              </div> */}
            </div>
            <div className="input-field col s12">
              <div className="chips chips-placeholder"></div>
            </div>

            <div className="file-field input-field col s12">
              <div className="btn">
                <span>File</span>
                <input type="file" name="roomImage" onChange={handleChange} />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleSubmit} type="submit" className="btn blue">
              Crear+
            </button>
          </div>
        </form>
        <div className="col s6">
          <div className="header container">
            <h3>Data</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
