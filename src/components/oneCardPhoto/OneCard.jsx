import React from "react";
import "./oneCard.scss";

const OneCard = ({ animatedcard2, onAdd }) => {
  return (
    <div>
      {animatedcard2.map((anim) => (
        <div className="animated-card" key={anim.id}>
 
          <div className="animated-card-bg"></div>
          <img src={anim.img} alt={anim.name} />
          <div className="animated-card-info">
            <div className="anim-name">{anim.name}</div>
            <div className="anim-price">Price: ${anim.price}</div>
            <div className="anim-desc">{anim.desc}</div>
            <button onClick={() => onAdd(anim)} class="anim-btn" role="button">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneCard;
