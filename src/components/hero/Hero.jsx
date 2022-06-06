import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../Data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Hero() {
  const { products } = data;

  return (
    <>
      <Swiper
        pagination={
          {
            //   type: "progressbar",
          }
        }
        // navigation={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="swiper-slide">
            <div className="row gap-4 d-flex justify-content-center align-items-center">
              <div className="col-lg-5 product-image">
                <img src={product.image} alt="" />
              </div>
              {/* <div className="pro"> */}
              <div className="col-lg-6 product-right text-left">
                <div className="product-name fw-bold mb-1">{product.name}</div>
                <div className="product-price mb-3 text-primary">
                  price: {product.price}
                </div>
                <div className="product-desc mb-3 fs-5">{product.desc}</div>
                <div className="btn btn-secondary">Show more</div>
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
