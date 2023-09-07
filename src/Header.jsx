import React, { useState } from "react";
import "./Header.scss";
import logo from "./assets/images/logo.svg";
import bgTabletPattern from "./assets/images/bg-tablet-pattern.svg";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("header__hamburger");
  const [mobileNav, setMobileNav] = useState("");

  function toggleMenu() {
    if (toggleBtn === "header__hamburger") {
      setToggleBtn("header__hamburger open");
      setMobileNav("show");
    } else {
      setToggleBtn("header__hamburger");
      setMobileNav("");
    }
  }

  return (
    <header className="header">
      <img src={bgTabletPattern} className="bg-tablet" alt="Bg Tablet" />
      <div className="wrapper">
        <img src={logo} alt="Logo" />
        <nav className="header__navigation">
          <ul className={mobileNav}>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="main-cta-btn">
          Get Started
        </a>

        <button onClick={toggleMenu} className={toggleBtn} type="button">
          <span className="header__top"></span>
          <span className="header__middle"></span>
          <span className="header__bottom"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
