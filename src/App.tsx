import { useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import useFirebase from "./hooks/useFirebase";
import { authReducer } from "./reducers/authReducer";
import AuthProvider from "./context/AuthProvider";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  const { auth, onAuthStateChanged } = useFirebase();

  const [state, dispatch] = useReducer(authReducer, null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? dispatch({ type: "Login", payload: user }) : null
    );
  }, []);

  return (
    <>
      <AuthProvider
        state={state}
        dispatch={dispatch}
        children={
          <>
            <Header />
            <Routes>
              <Route
                path="/*"
                element={state ? <PrivateRoutes /> : <PublicRoutes />}
              />
            </Routes>
            <Footer />
          </>
        }
      />
    </>
  );
};

export default App;
