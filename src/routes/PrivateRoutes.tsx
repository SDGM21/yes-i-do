import { Route, Routes, useNavigate } from "react-router-dom";
import Room from "../pages/Room";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/*" element={<>{navigate("/rooms")}</>} />
      <Route path="/rooms" element={<Room />} />
    </Routes>
  );
};

export default PrivateRoutes;
