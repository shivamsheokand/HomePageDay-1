import React from "react";
import Navbar from "./nav/Navbar";
import Hero from "./components/Hero";
import Footer from "./nav/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex flex-col">
    <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
