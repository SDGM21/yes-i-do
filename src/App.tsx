import { useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/init";
import { authReducer } from "./reducers/authReducer";
import AuthProvider from "./context/AuthProvider";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { browserSessionPersistence, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [state, dispatch] = useReducer(authReducer, null);

  onAuthStateChanged(auth, (user) =>
    dispatch({ type: "Login", payload: user })
  );

  useEffect(() => {
    auth.setPersistence(browserSessionPersistence);
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
