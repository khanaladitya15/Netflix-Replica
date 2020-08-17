import React, { useState, useEffect } from "react";
import "./Nav.css";
import one from'./one.png';
import  two from './two.png';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
      src={one} alt='Logo'className="nav__logo" />
      <img 
      src= {two} alt=' Logo' className="nav__avatar"/>
    </div>
  );
}

export default Nav;
