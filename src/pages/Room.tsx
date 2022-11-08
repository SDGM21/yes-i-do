import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import RoomsList from "../components/RoomsList";

const Room = () => {
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <div className="container">
          <div className="row">
            <div className="center col s12">
              <h3>Rooms</h3>
              <button
                onClick={() => {
                  navigate("/rooms/new");
                }}
                className="btn blue"
              >
                +Iniciar Nueva Sala
              </button>
            </div>
          </div>
          <div>
            <RoomsList />
          </div>
        </div>
      </Main>
    </>
  );
};

export default Room;
