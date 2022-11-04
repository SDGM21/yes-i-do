import { useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import useFirebase from "./hooks/useFirebase";
import { authReducer } from "./reducers/authReducer";
import AuthProvider from "./context/AuthProvider";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import M from "materialize-css";
import { browserSessionPersistence } from "firebase/auth";

const App = () => {
  const { auth, onAuthStateChanged } = useFirebase();

  const [state, dispatch] = useReducer(authReducer, null, () => {
    localStorage.getItem("");
  });

  onAuthStateChanged(auth, (user) =>
    dispatch({ type: "Login", payload: user })
  );

  useEffect(() => {
    auth.setPersistence(browserSessionPersistence);
    M.AutoInit();
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
                element={
                  <>
                    <PrivateRoutes />
                    <PublicRoutes />
                  </>
                }
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
