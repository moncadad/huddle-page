import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import imgMockups from "../../assets/images/illustration-mockups.svg";

const Hero = () => {
  return (
    <section className="hero section">
      <Header />
      <div className="hero__wrapper">
        <div className="cta__text">
          <h1 className="heading">Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn btn--secondary">Get Started For Free</button>
        </div>
        <img src={imgMockups} alt="Mockups" />
      </div>
    </section>
  );
};

export default Hero;
