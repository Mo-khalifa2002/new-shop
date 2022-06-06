import React from "react";
import AnimatedCard from "./AnimatedCard";
import { Rotate, Bounce } from "react-reveal";

const Animated = ({ animatedcard }) => {
  return (
    <div className="animted">
      <Rotate top left cascade>
        <h1 className="text-center animated-nam text-capitalize fw-bolder text-light pt-3">
          React shopping cart
        </h1>
      </Rotate>
      <Rotate top left cascade>
        <Bounce left cascade>
          <h1 className="text-center animated-name text-capitalize fw-bolder text-warning pt-3">
            this first section is just styling
          </h1>
        </Bounce>
      </Rotate>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AnimatedCard animatedcard={animatedcard} />
          </div>
          <div className="col-lg-6">
            <AnimatedCard animatedcard={animatedcard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animated;
