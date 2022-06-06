import "./threeDflip.scss";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const ThreeDflip = ({ threedflip, onAdd }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div className="three-d-flip">
        
      {threedflip.map((hover) => (
        <div className="three-d-container">
        
          <div className="three-front">
            <img src={hover.img} alt={hover.name} />
          </div>

          {/* three-back */}

          <div className="three-back">
            <div className="three-back-middle">
              <h2 className="three-title">{hover.name}</h2>
              <h3 className="three-price">{hover.price}</h3>
              <p className="three-par">{hover.desc}</p>

              {/* three-back-icons */}

              <div className="three-back-icons">
                <div className="three-d-icons">
                  <div
                    className={isActive ? "bg-red" : "heart-icon"}
                    onClick={handleClick}
                  >
                    <AiOutlineHeart />
                  </div>
                  <div className={isActive ? "bg-green" : "cart-icon"}>
                    <div onClick={handleClick}>
                      <BsCart4 onClick={() => onAdd(hover)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeDflip;
