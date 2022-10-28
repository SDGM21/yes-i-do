import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Redirect from "../components/Redirect";
import Room from "../pages/Room";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Redirect redirect="/rooms" />} />
      <Route path="/rooms" element={<Room />} />
    </Routes>
  );
};

export default PrivateRoutes;
