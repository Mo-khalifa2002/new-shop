import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Slide, LightSpeed, Zoom, Flip, Fade } from "react-reveal";
import Tada from "react-reveal/Tada";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper";
import Small from "./Small";

export default function SmallSwiper({ small, onAdd }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <>
      <Fade bottom big>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          className="small-swiper"
        >
          {small.map((sm) => (
            <>
              <SwiperSlide className="swiper-slide" key={sm.id}>
                <div className="popular">
                  <div className="pop-circle" />
                  {/* <div className="pop-img"> */}
                  <Zoom top>
                    <Tada>
                      <img src={sm.img} alt="small swiper image" />
                    </Tada>
                  </Zoom>
                  {/* </div> */}
                  <div className="pop-icons">
                    <div
                      className={isActive ? "bg-red" : "heart-icon"}
                      onClick={handleClick}
                    >
                      <AiOutlineHeart />
                    </div>
                    <div onClick={() => onAdd(sm)} className="cart-icon">
                      <BsCart4 />
                    </div>
                    <div className="search-icon">
                      <BiSearch />
                    </div>
                    <div className="search-icon">{sm.price}</div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Fade>
    </>
  );
}
