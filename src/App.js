import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./GlobalStyles";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} isOpen={isOpen} />
    </>
  );
}

export default App;
