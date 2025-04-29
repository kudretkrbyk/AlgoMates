import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";
import Admin from "./pages/Admin";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode toggled:", darkMode);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          darkMode={darkMode}
          handleDarkModeToggle={handleDarkModeToggle}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
