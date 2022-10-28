import { Route, Routes } from "react-router-dom";
import Redirect from "../components/Redirect";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PublicRoutes: () => JSX.Element = () => {

  return (
    <Routes>
      <Route path="/*" element={<Redirect redirect="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;
