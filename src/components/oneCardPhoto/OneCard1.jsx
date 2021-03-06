import React from "react";
import { Slide, LightSpeed, Zoom, Flip } from "react-reveal";
import Tada from "react-reveal/Tada";

const OneCard1 = ({ animatedcard1, onAdd }) => {
  return (
    <div>
      {animatedcard1.map((anim) => (
        <div className="animated-card" key={anim.id}>
          <div className="animated-card-bg"></div>
          <Zoom top>
            <img src={anim.img} alt={anim.name} />
          </Zoom>
          <div className="animated-card-info">
            <div className="anim-name">{anim.name}</div>
            <div className="anim-desc">{anim.desc}</div>
            <button onClick={() => onAdd(anim)} className="anim-btn">
              add to card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneCard1;
