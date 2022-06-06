import React from "react";
import "./hoverCard.scss";

const HoverCard = ({ hovercard, onAdd }) => {
  return (
    <div className="hoverCard">
      {hovercard.map((hover) => (
        <div className="single-card .col-sm-12">
       
          <img src={hover.img} alt={hover.name} />
          <div className="single-card-info">
            <h2 className="single-card-title">{hover.name}</h2>
            <p className="single-card-price">Price: {hover.price}</p>
            <p className="single-card-par">{hover.desc}</p>
            <div className="single-card-button">
              <div
                onClick={() => onAdd(hover)}
                className="button-77"
                role="button"
              >
                Add to cart
              </div>
            </div>
            <div className="singllle">
              <button onClick={() => onAdd(hover)} className="single-button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCard;
