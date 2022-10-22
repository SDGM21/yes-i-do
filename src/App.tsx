import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import useFirebase from "./hooks/useFirebase";

const App = () => {

  const { auth } = useFirebase()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
