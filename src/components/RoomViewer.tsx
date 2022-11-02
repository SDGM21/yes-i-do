import { useParams } from "react-router-dom";

const RoomViewer = () => {
  const { roomid } = useParams();
  return (
    <>
      <div>
        <h3>New Room {roomid}</h3>
      </div>
    </>
  );
};

export default RoomViewer;
