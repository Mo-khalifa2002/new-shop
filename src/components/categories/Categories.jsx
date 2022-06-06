import React from "react";
import "./categories.scss";
import { Slide, LightSpeed, Zoom, Flip, Pulse } from "react-reveal";

const Categories = ({ categories, onAdd }) => {
  return (
    <div>
      {categories.map((category) => (
        <div className="category">
          <div className="contaainer">
            <Flip left cascade>
              {/* <Pulse> */}
                <img src={category.img} alt={category.title} />
              {/* </Pulse> */}
            </Flip>
            <div className="cat-info">
              <Zoom left cascade>
                <Slide left cascade>
                  <h2 className="cat-name">{category.title}</h2>
                </Slide>
                <LightSpeed left cascade>
                  <button
                    onClick={() => onAdd(category)}
                    className="cat-button"
                  >
                    Add to Cart
                  </button>
                </LightSpeed>
              </Zoom>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
