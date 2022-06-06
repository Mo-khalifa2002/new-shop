import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./animatedCard.scss";

const AnimatedCard = ({ animatedcard }) => {
  return (
    <div className="animatedcard-body">
      <div className="product-information">
        <div className="rank">3</div>

        <div className="product-info-front">
          <div className="animated-card-bg"></div>

          <img
            className="thumbnail"
            src="https://png.pngitem.com/pimgs/s/20-203775_computer-icon-area-brand-personal-computer-hd-png.png"
            alt="main product"
          />
          <h3 className="product-info-name">Computer</h3>
          <div className="product-info-status">
            <p className="product-info-viewrs text-secondary">
              <AiOutlineShoppingCart className="info-icon" />
              538,45K
            </p>
            <div className="product-info-streamers">
              <img
                src="https://png.pngitem.com/pimgs/s/76-762515_limited-ipad-hd-png-download.png"
                alt="product"
              />
              <img
                src="https://png.pngitem.com/pimgs/s/76-762225_ipad-png-free-download-apple-ipad-pro-11.png"
                alt="product"
              />
              <img
                src="https://png.pngitem.com/pimgs/s/121-1215746_monitor-display-screen-computer-computer-monitor-computer-hardware.png"
                alt="product"
              />
            </div>
          </div>
        </div>
        {/* product - info -back */}
        <div className="product-info-back">
          <div className="streaming-info">
            <div className="pro">
              <p className="product-info">55.9</p>
              <p>watcher</p>
            </div>
            <div className="product-line" />
            <div className="pro">
              <p className="product-info">66.9</p>
              <p>viewrs</p>
            </div>
          </div>

          <a href="" className="btn">
            see more streamers
          </a>

          <div className="streamers">
            <div className="streamer">
              <img
                src="https://png.pngitem.com/pimgs/s/76-762515_limited-ipad-hd-png-download.png"
                alt="hello"
              />
              <p className="streamer-name">tablet</p>
              <p className="streamer-number">55.3</p>
            </div>
            <div className="streamer">
              <img
                src="https://png.pngitem.com/pimgs/s/121-1215746_monitor-display-screen-computer-computer-monitor-computer-hardware.png"
                alt="hello"
              />
              <p className="streamer-name">Screen</p>
              <p className="streamer-number">55.3</p>
            </div>
            <div className="streamer">
              <img
                src="https://png.pngitem.com/pimgs/s/76-762225_ipad-png-free-download-apple-ipad-pro-11.png"
                alt="hello"
              />
              <p className="streamer-name">Ipad</p>
              <p className="streamer-number">55.3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
