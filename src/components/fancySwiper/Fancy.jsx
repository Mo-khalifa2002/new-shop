import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.scss";

import { Slide, LightSpeed, Zoom, Flip, Fade } from "react-reveal";
import Tada from "react-reveal/Tada";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function Fancy({ fancyswiper, onAdd }) {
  return (
    <>
      <Zoom bottom>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 4000 }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="fancySwiper"
        >
          {fancyswiper.map((fancy) => (
            <SwiperSlide key={fancy.id} className="fancy-slide">
              <div className="fancy-slide-info">
                <div className="sancy-slide-bg"></div>
                <Zoom top>
                  <img src={fancy.img} alt={fancy.name} />
                </Zoom>
                <div className="over">
                  <div className="fancy-slide-overlay image__overlay image__overlay--blur">
                    <h2 className="fancy-slide-name">{fancy.name}</h2>
                    <p className="fancy-slide-price">{fancy.price}</p>
                    <a onClick={() => onAdd(fancy)} class="button" id="button">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Zoom>
    </>
  );
}
