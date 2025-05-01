import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";
import ProtectedRoute from "./Components/protedted/ProtectedRoute";
import Admin from "./pages/Admin";
import ContactModal from "./Components/ContactModal";
import ContactModalForm from "./Components/ContactModalForm";
import { useState } from "react";

import Login from "./pages/Login";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  //localStorage.removeItem("user");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)}>
          {" "}
          <ContactModalForm />{" "}
        </ContactModal>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            {/* Korumalı rota */}
            <Route
              path="/Admin"
              element={
                <ProtectedRoute redirectTo="/Login">
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer handleShowModal={handleShowModal} />
      </div>
    </Router>
  );
}

export default App;
