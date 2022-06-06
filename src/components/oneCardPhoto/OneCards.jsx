import React from "react";
import OneCard from "./OneCard";
import OneCard1 from "./OneCard1";

const OneCards = ({ animatedcard2, animatedcard1, onAdd }) => {
  return (
    <div className="one-cards">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <OneCard onAdd={onAdd} animatedcard2={animatedcard2} />
          </div>
          <div className="col-lg-6 col-md-12">
            <OneCard1 onAdd={onAdd} animatedcard1={animatedcard1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCards;
