import React, { useState } from "react";
import "./Footer.scss";
import footerLogo from "./assets/images/footer-logo.svg";

const Footer = () => {
  const [input, setInput] = useState("");
  const [validation, setValidation] = useState("");
  const [error, setError] = useState("");

  const inputPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function checkInput(e) {
    e.preventDefault();

    if (!inputPattern.test(input)) {
      setValidation("error");
      setError("show");
    } else {
      setValidation("valid");
      setError("");
    }
  }

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__social">
          <img src={footerLogo} className="footer__logo" alt="Logo" />

          <div className="footer__icons">
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <ul className="footer__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="footer__links">
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <div className="footer__newsletter">
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="email"
              className={`email ${validation}`}
              placeholder="Updates in your inbox"
              required
            />
            <button type="submit" className="submit" onClick={checkInput}>
              Go
            </button>
            <small className={`footer__error ${error}`}>
              Please insert a valid email
            </small>
          </form>

          <p className="footer__copyright">
            &copy; Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
