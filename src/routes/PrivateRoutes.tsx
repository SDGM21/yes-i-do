import { Route, Routes } from "react-router-dom";
import Redirect from "../components/Redirect";
import RoomViewer from "../components/RoomViewer";
import NewRoom from "../pages/NewRoom";
import Room from "../pages/Room";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/rooms" element={<Room />} />
      <Route path="/rooms/:roomid" element={<RoomViewer />} />
      <Route path="/rooms/new" element={<NewRoom />} />
    </Routes>
  );
};

export default PrivateRoutes;
