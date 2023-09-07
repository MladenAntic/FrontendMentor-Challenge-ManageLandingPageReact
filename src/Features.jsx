import React from "react";
import "./Features.scss";
import bgTabletPattern from './assets/images/bg-tablet-pattern.svg'

const Features = () => {
  return (
    <section className="features">
      <div className="wrapper">
        <div className="features__whatsDifferent">
          <h2 className="features__title">What's different about Manage?</h2>
          <p className="features__description">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <ul className="features__list">
          <li>
            <span className="features__number">01</span>
            <span className="features__name">Track company-wide progress</span>

            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progressat the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </li>
          <li>
            <span className="features__number">02</span>
            <span className="features__name">Advanced built-in reports</span>

            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </li>
          <li>
            <span className="features__number">03</span>
            <span className="features__name">
              Everything you need in one place
            </span>

            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers and
              all-in-one team productivity solution.
            </p>
          </li>
        </ul>
      </div>

      <img
        src={bgTabletPattern}
        className="features__pattern"
        alt="Features Pattern"
      />
    </section>
  );
};

export default Features;
