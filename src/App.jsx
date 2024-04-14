import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/DetailPage/Detail";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { bg1, bg2, bg3, bg4 } from "./assets";
import Home2 from "./components/Home/Home2";

const App = () => {
  const backgroundImages = [bg1, bg2, bg3, bg4];

  const [backgroundImage, setBackgroundImage] = useState("");
  const [tabularView, setTabularView] = useState(true);

  const selectRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  };

  useEffect(() => {
    selectRandomBackground();
  }, []);

  function handleTabularView() {
    setTabularView((prev) => !prev);
  }

  console.log(tabularView);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="background"
      >
        <Navbar
          handleTabularView={handleTabularView}
          tabularView={tabularView}
        />
        <Routes>
          {tabularView ? (
            <Route path="/" element={<Home2 />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
          <Route path="/:city" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
