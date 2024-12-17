import React from "react";
import "./FeatureBlock.scss";

const FeatureBlock = (props) => {
  return (
    <section className="feature-block section">
      <div className={props.className}>
        <img src={props.image} alt="Grow Together" className="img-feature" />
        <div className="feature__text">
          <h2 className="heading">{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
