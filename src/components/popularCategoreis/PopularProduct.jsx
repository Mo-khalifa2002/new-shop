import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Slide, LightSpeed, Zoom, Flip } from "react-reveal";
import Tada from "react-reveal/Tada";
import Swing from "react-reveal/Swing";

const PopularProduct = ({ item, onAdd }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <Tada>
      <div className="popular">
        <div className="pop-circle" />
        {/* <div className="pop-img"> */}
        <Zoom left>
          <img src={item.img} alt="popular" />
        </Zoom>
        {/* </div> */}
        <div className="pop-icons">
          <div
            className={isActive ? "bg-red" : "heart-icon"}
            onClick={handleClick}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={isActive ? "bg-green" : "cart-icon"}
            onClick={() => onAdd(item)}
          >
            <div onClick={handleClick}>
              <BsCart4 />
            </div>
          </div>
          <div className="search-icon">
            <BiSearch />
          </div>
          <div className="search-icon">{item.price}</div>
        </div>
      </div>
    </Tada>
  );
};

export default PopularProduct;
