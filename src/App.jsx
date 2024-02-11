import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/DetailPage/Detail";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { bg1, bg2, bg3, bg4 } from "./assets";

const App = () => {
  const backgroundImages = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
  ];

  const [backgroundImage, setBackgroundImage] = useState("");

  const selectRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  };

  useEffect(() => {
    selectRandomBackground();
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(../src/assets/${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="background"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
