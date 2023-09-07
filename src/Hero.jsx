import React from "react";
import "./Hero.scss";
import heroIllustration from "./assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__content">
          <h1 className="hero__title">
            Bring everyone together to build better products
          </h1>
          <p className="hero__description">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team golas in view.
          </p>
          <a href="#" className="main-cta-btn">
            Get Started
          </a>
        </div>

        <img
          src={heroIllustration}
          className="hero__illustration"
          alt="Illustration Intro"
        />
      </div>
    </section>
  );
};

export default Hero;
