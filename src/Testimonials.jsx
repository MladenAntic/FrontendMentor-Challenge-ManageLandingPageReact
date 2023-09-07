import React from "react";
import "./Testimonials.scss";
import avatarAnisha from "./assets/images/avatar-anisha.png";
import avatarAli from "./assets/images/avatar-ali.png";
import avatarRichard from "./assets/images/avatar-richard.png";
import avatarShanai from "./assets/images/avatar-shanai.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const responsive = {
    280: {
      items: 1,
    },
    767: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">What they've said</h2>
      <OwlCarousel
        className="wrapper"
        autoplay
        loop
        items="3"
        responsive={responsive}
      >
        <div className="testimonials__item">
          <img
            src={avatarAnisha}
            className="testimonials__avatar"
            alt="Avatar Anisha"
          />
          <h3 className="testimonials__name">Anisha Li</h3>
          <q className="testimonials__quote">
            Manage has supercharged our team's workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone
            motivated.
          </q>
        </div>

        <div className="testimonials__item">
          <img
            src={avatarAli}
            className="testimonials__avatar"
            alt="Avatar Ali"
          />
          <h3 className="testimonials__name">Ali Bravo</h3>
          <q className="testimonials__quote">
            We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.
          </q>
        </div>

        <div className="testimonials__item">
          <img
            src={avatarRichard}
            className="testimonials__avatar"
            alt="Avatar Richard"
          />
          <h3 className="testimonials__name">Richard Watts</h3>
          <q className="testimonials__quote">
            Manage allows us to provide structure and process. It keeps us
            organized and focused. I can't stop recommending them to everyone I
            talk to.
          </q>
        </div>

        <div className="testimonials__item">
          <img
            src={avatarShanai}
            className="testimonials__avatar"
            alt="Avatar Shanai"
          />
          <h3 className="testimonials__name">Shanai Gough</h3>
          <q className="testimonials__quote">
            Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.
          </q>
        </div>
      </OwlCarousel>

      <a href="#" className="main-cta-btn">
        Get Started
      </a>
    </section>
  );
};

export default Testimonials;
